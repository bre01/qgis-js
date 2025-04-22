#include "mapLayer.hpp"
#include <qgsfeature.h>
#include <qgsjsonutils.h>
class VectorLayer:MapLayer{
public:
  VectorLayer(QgsMapLayer *maplayer):
  MapLayer(maplayer)
    //if it is passed in, then the pointer is assumed to 
    //point to a qgVectorLayer and can be casted  
    //but we need to initilize the super class
    
   {

}

  std::string layerJsonStd() {
    QgsJsonExporter exporter(vectorLayer(),5);
    QgsFeatureList featureList = getAllFeatures(vectorLayer());
    QString res= exporter.exportFeatures(featureList,0);
    return res.toStdString();
  }
  //to implement some edit 

  bool editLayerByJson(std::string geoJsonString){
    QgsVectorLayer *layer = vectorlayer();
    if (!layer || !layer->isValid())
    {
        qWarning() << "Invalid layer provided.";
        return false;
    }

    // Parse the GeoJSON string
    nlohmann::json geoJson;
    try
    {
        geoJson = nlohmann::json::parse(geoJsonString);
    }
    catch (const nlohmann::json::parse_error &e)
    {
        qWarning() << "Failed to parse GeoJSON:" << e.what();
        return false;
    }

    // Ensure the GeoJSON is a FeatureCollection
    if (geoJson["type"] != "FeatureCollection")
    {
        qWarning() << "GeoJSON must be a FeatureCollection.";
        return false;
    }

    // Start editing the layer
    if (!layer->startEditing())
    {
        qWarning() << "Failed to start editing the layer.";
        return false;
    }

    // Clear existing features
    QgsFeatureIds featureIds;
    QgsFeatureIterator it = layer->getFeat
    QgsFeature feature;
    while (it.nextFeature(feature))
    {
        featureIds.insert(feature.id());
    }
    if (!layer->deleteFeatures(featureIds))
    {
        qWarning() << "Failed to delete existing features.";
        layer->rollBack();
        return false;
    }

    // Add new features from GeoJSON
    QgsFeatureList newFeatures;
    for (const auto &geoJsonFeature : geoJson["features"])
    {
        QgsFeature newFeature;
        newFeature.setFields(layer->fields());

        // Set geometry
        QgsGeometry geometry = QgsJsonUtils::geometryFromGeoJson(QString::fromStdString(geoJsonFeature["geometry"].dump()));
        if (geometry.isNull())
        {
            qWarning() << "Invalid geometry in GeoJSON feature.";
            continue;
        }
        newFeature.setGeometry(geometry);

        // Set properties
        const auto &properties = geoJsonFeature["properties"];
        for (const auto &field : layer->fields())
        {
            QString fieldName = field.name();
            if (properties.contains(fieldName.toStdString()))
            {
                QVariant value = QgsJsonUtils::jsonToVariant(properties[fieldName.toStdString()]);
                newFeature.setAttribute(fieldName, value);
            }
        }

        newFeatures.append(newFeature);
    }

    if (!layer->addFeatures(newFeatures))
    {
        qWarning() << "Failed to add new features.";
        layer->rollBack();
        return false;
    }

    // Commit changes
    if (!layer->commitChanges())
    {
        qWarning() << "Failed to commit changes to the layer.";
        return false;
    }

    return true;

  }


  void addFeature(std::string feature) {
    QgsFeature qgsFeature;
    qgsFeature.setAttributes(QgsJsonUtils::convertToAttributes(feature));
    static_cast<QgsVectorLayer *>(this->layer())->addFeature(qgsFeature);
  }




  QgsFeatureList getAllFeatures(QgsVectorLayer *layer)
  {
      QgsFeatureList featureList;
  
      if (!layer)
      {
          qWarning() << "Layer is null.";
          return featureList;
      }
  
      // Create a feature iterator to iterate over all features in the layer
      QgsFeatureIterator featureIterator = layer->getFeatures();
  
      QgsFeature feature;
      while (featureIterator.nextFeature(feature))
      {
          featureList.append(feature);
      }
  
      return featureList;
  }




protected:
  QgsVectorLayer *vectorLayer() const {
    return static_cast<QgsVectorLayer *>(this->mapLayer());
  }
}
