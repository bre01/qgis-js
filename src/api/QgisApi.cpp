#include <string>

#include <qgsexpressioncontextutils.h>
#include <qgslayertree.h>
#include <qgsmaprenderercustompainterjob.h>
#include <qgsmaprendererparalleljob.h>
#include <qgsmaprenderersequentialjob.h>
#include <qgsmapsettings.h>
#include <qgsproject.h>
#include <qgstiles.h>

#include <QImage>
#include <QString>
#include <QtConcurrent/QtConcurrent>

#include "../model/MapLayer.hpp"
#include "../model/PointXY.hpp"
#include "../model/QgsMapRendererJob.hpp"
#include "../model/QgsMapRendererParallelJob.hpp"
#include "../model/QgsMapRendererQImageJob.hpp"
#include "../model/Rectangle.hpp"

#include <emscripten/bind.h>

//dev
#include<qgsfields.h>

#include<qgsfield.h>
#include<qgsvectorlayer.h>
#include <qgsvectorfilewriter.h>
#include<qgsfeature.h>
#include<qgsjsonutils.h>



QList<QgsMapLayer *> QgisApi_allLayers() {
  return QgsProject::instance()->layerTreeRoot()->layerOrder();
}

QList<QgsMapLayer *> QgisApi_visibleLayers() {
  QList<QgsMapLayer *> result = {};
  auto root = QgsProject::instance()->layerTreeRoot();
  const QList<QgsMapLayer *> allLayers = root->layerOrder();
  for (QgsMapLayer *layer : allLayers) {
    QgsLayerTreeLayer *nodeLayer = root->findLayer(layer->id());
    if (nodeLayer && nodeLayer->layer()->isSpatial() && nodeLayer->isVisible()) {
      result << layer;
    }
  }
  return result;
}
//pass fields out as string 

/*
void QgisApi_getFields(emscripten::val callback) {
  QgsVectorLayer *layer = static_cast<QgsVectorLayer*> (QgisApi_visibleLayers().first());
  QString result = "";
  for(const QgsField &field : layer->fields()) {
    result.append(field.name() );
  }
  callback(emscripten::val(result.toStdString()));
  QgsVectorLayer *layer = static_cast<QgsVectorLayer *>(QgisApi_visibleLayers().first());
  if (!layer || !layer->isValid()) {
    callback(emscripten::val("")); // Return an empty string if the layer is invalid
    return;
  }

  // Prepare a string to hold the GeoJSON
  QString geojson;
  QTextStream stream(&geojson);

  // Write the layer to GeoJSON format
  QgsVectorFileWriter::writeAsVectorFormat(
    layer, 
    stream, 
    "utf-8", 
    layer->crs(), 
    "GeoJSON"
  );

  // Pass the GeoJSON string to the JavaScript callback
  callback(emscripten::val(geojson.toStdString()));
  QgsVectorLayer *layer = static_cast<QgsVectorLayer *>(QgisApi_visibleLayers().first());
  if (!layer || !layer->isValid()) {
    callback(emscripten::val("layer not valid")); // Return an empty string if the layer is invalid
    return;
  }

  // Prepare a string to hold the GeoJSON
  QString geojson;
  QgsVectorFileWriter::SaveVectorOptions options;
  options.driverName = "GeoJSON"; // Specify the format
  options.fileEncoding = "UTF-8"; // Set the encoding


  // Write the layer to GeoJSON format
  QgsVectorFileWriter::WriterError error = QgsVectorFileWriter::writeAsVectorFormatV2(
    layer,
    geojson,
    QgsCoordinateTransformContext(),
    options
  );
  if (error != QgsVectorFileWriter::NoError) {
    callback(emscripten::val("error")); // Return an empty string if there was an error
    return;
  }

  // Pass the GeoJSON string to the JavaScript callback
  callback(emscripten::val(geojson.toStdString()));
 
  QgsVectorLayer *layer = static_cast<QgsVectorLayer *>(QgisApi_allLayers().first());
  if (!layer || !layer->isValid()) {
    callback(emscripten::val("layer invalid")); // Return an empty string if the layer is invalid
    return;
  }

    if (!layer || !layer->isValid())
        callback(emscripten::val("not valid"));

    // Configure export options
    QgsVectorFileWriter::SaveVectorOptions options;
    options.driverName = "GeoJSON";
    options.fileEncoding = "UTF-8";

    // Create a temporary file for GeoJSON output
    QTemporaryFile tempFile;
    if (!tempFile.open())
        callback(emscripten::val("temp file not open"));

    QString tempFilePath = tempFile.fileName();
    tempFile.close(); // Close the file so it can be written to

    // Export the layer to the temporary file
    QString errorMessage;
    QgsVectorFileWriter::WriterError error = QgsVectorFileWriter::writeAsVectorFormatV3(
        layer,
        tempFilePath,
        QgsCoordinateTransformContext(),
        options,
        &errorMessage
    );

    if (error != QgsVectorFileWriter::NoError)
    {
        callback(emscripten::val((int)error));
    }

    // Read the GeoJSON content from the temporary file
    QFile file(tempFilePath);
    if (!file.open(QIODevice::ReadOnly | QIODevice::Text))
        callback(emscripten::val("152"));

    QTextStream in(&file);
    QString geoJsonString = in.readAll();
    file.close();

    // Clean up the temporary file
    QFile::remove(tempFilePath);
    callback(emscripten::val("end"));
    //callback(emscripten::val(geoJsonString.toStdString()));
    return ;
}
*/
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

void QgisApi_getLayerJson(int layerNumber,emscripten::val callback) {
  // Get the first layer from all layers
  QgsVectorLayer* vectorLayer=qobject_cast<QgsVectorLayer*>(QgisApi_allLayers()[layerNumber]);


    QgsJsonExporter exporter(vectorLayer,5);
    QgsFeatureList featureList = getAllFeatures(vectorLayer);
    QString res= exporter.exportFeatures(featureList,0);




  // Pass the GeoJSON string to the JavaScript callback
  callback(emscripten::val(res.toStdString()));
}

bool QgisApi_loadProject(std::string filename) {
  Qgis::ProjectReadFlags readFlags =
    Qgis::ProjectReadFlag::ForceReadOnlyLayers | Qgis::ProjectReadFlag::TrustLayerMetadata;

  bool res = QgsProject::instance()->read(QString::fromStdString(filename), readFlags);
  if (!res) return false;

  return true;
}

QgsRectangle QgisApi_fullExtent() {
  QgsMapSettings mapSettings;
  mapSettings.setDestinationCrs(QgsProject::instance()->crs());
  mapSettings.setLayers(QgisApi_visibleLayers());
  return mapSettings.fullExtent();
}

std::string QgisApi_srid() {
  return QgsProject::instance()->crs().authid().toStdString();
}

void QgisApi_renderXYZTile(
  unsigned long x,
  unsigned long y,
  unsigned int z,
  unsigned int tileSize,
  float pixelRatio,
  float extentBufferFactor,
  emscripten::val callback) {

  QgsMapSettings mapSettings;

  mapSettings.setOutputImageFormat(QImage::Format_ARGB32);
  mapSettings.setBackgroundColor(Qt::transparent);
  mapSettings.setOutputSize(QSize(tileSize, tileSize));
  mapSettings.setOutputDpi(96.0 * pixelRatio);

  mapSettings.setLayers(QgisApi_visibleLayers());

  mapSettings.setDestinationCrs(QgsCoordinateReferenceSystem(QStringLiteral("EPSG:3857")));

  QgsTileMatrix mTileMatrix = QgsTileMatrix::fromWebMercator(z);
  auto extent = mTileMatrix.tileExtent(QgsTileXYZ(x, y, z));
  mapSettings.setExtent(extent);

  auto tileExtentBuffer = extent.width() * extentBufferFactor;
  if (tileExtentBuffer > 0.0) {
    mapSettings.setExtentBuffer(tileExtentBuffer);
  }

  mapSettings.setFlag(Qgis::MapSettingsFlag::RenderMapTile, true);

  QgsExpressionContext context = QgsProject::instance()->createExpressionContext();
  context << QgsExpressionContextUtils::mapSettingsScope(mapSettings);
  mapSettings.setExpressionContext(context);

  mapSettings.setPathResolver(QgsProject::instance()->pathResolver());

  QgsMapRendererSequentialJob *job = new QgsMapRendererSequentialJob(mapSettings);
  QObject::connect(job, &QgsMapRendererSequentialJob::finished, [job, callback] {
    auto image = job->renderedImage();
    image.rgbSwap(); // for html canvas
    callback(emscripten::val(emscripten::typed_memory_view(
      image.width() * image.height() * 4, (const unsigned char *)image.constBits())));
    job->deleteLater();
  });
  job->start();
}

void QgisApi_renderImage(
  std::string srid,
  const QgsRectangle &extent,
  unsigned int width,
  unsigned int height,
  float pixelRatio,
  emscripten::val callback) {

  QgsMapSettings mapSettings;

  mapSettings.setOutputImageFormat(QImage::Format_ARGB32);
  mapSettings.setBackgroundColor(Qt::transparent);
  mapSettings.setOutputSize(QSize(width, height));
  mapSettings.setOutputDpi(96.0 * pixelRatio);

  mapSettings.setLayers(QgisApi_visibleLayers());

  mapSettings.setDestinationCrs(QgsCoordinateReferenceSystem(QString::fromStdString(srid)));

  mapSettings.setExtent(extent);

  QgsExpressionContext context = QgsProject::instance()->createExpressionContext();
  context << QgsExpressionContextUtils::mapSettingsScope(mapSettings);
  mapSettings.setExpressionContext(context);

  mapSettings.setPathResolver(QgsProject::instance()->pathResolver());

  // START optimizations
  QgsVectorSimplifyMethod simplify;
  simplify.setSimplifyHints(QgsVectorSimplifyMethod::FullSimplification);
  mapSettings.setSimplifyMethod(simplify);

  mapSettings.setFlag(Qgis::MapSettingsFlag::UseRenderingOptimization, true);
  mapSettings.setFlag(Qgis::MapSettingsFlag::ForceRasterMasks, true);
  mapSettings.setFlag(Qgis::MapSettingsFlag::RenderPreviewJob, true);

  mapSettings.setRendererUsage(Qgis::RendererUsage::View);
  // END optimizations

  QgsMapRendererParallelJob *job = new QgsMapRendererParallelJob(mapSettings);

  QObject::connect(job, &QgsMapRendererParallelJob::finished, [job, callback] {
    auto image = job->renderedImage();
    image.rgbSwap(); // for html canvas
    callback(emscripten::val(emscripten::typed_memory_view(
      image.width() * image.height() * 4, (const unsigned char *)image.constBits())));
    job->deleteLater();
  });
  job->start();
}

QgsMapRendererParallelJob *QgisApi_renderJob(
  std::string srid,
  const QgsRectangle &extent,
  unsigned int width,
  unsigned int height,
  float pixelRatio) {

  QgsMapSettings mapSettings;

  mapSettings.setOutputImageFormat(QImage::Format_ARGB32);
  mapSettings.setBackgroundColor(Qt::transparent);
  mapSettings.setOutputSize(QSize(width, height));
  mapSettings.setOutputDpi(96.0 * pixelRatio);

  mapSettings.setLayers(QgisApi_visibleLayers());

  mapSettings.setDestinationCrs(QgsCoordinateReferenceSystem(QString::fromStdString(srid)));

  mapSettings.setExtent(extent);

  QgsExpressionContext context = QgsProject::instance()->createExpressionContext();
  context << QgsExpressionContextUtils::mapSettingsScope(mapSettings);
  mapSettings.setExpressionContext(context);

  mapSettings.setPathResolver(QgsProject::instance()->pathResolver());

  // START optimizations
  QgsVectorSimplifyMethod simplify;
  simplify.setSimplifyHints(QgsVectorSimplifyMethod::FullSimplification);
  mapSettings.setSimplifyMethod(simplify);

  mapSettings.setFlag(Qgis::MapSettingsFlag::UseRenderingOptimization, true);
  mapSettings.setFlag(Qgis::MapSettingsFlag::ForceRasterMasks, true);
  mapSettings.setFlag(Qgis::MapSettingsFlag::RenderPreviewJob, true);
  mapSettings.setFlag(Qgis::MapSettingsFlag::RenderPartialOutput, true);

  mapSettings.setRendererUsage(Qgis::RendererUsage::View);
  // END optimizations

  QgsMapRendererParallelJob *job = new QgsMapRendererParallelJob(mapSettings);

  job->start();

  return job;
}

const QgsRectangle QgisApi_transformRectangle(
  const QgsRectangle &inputRectangle, std::string inputSrid, std::string outputSrid) {
  QgsCoordinateTransform transform(
    QgsCoordinateReferenceSystem(QString::fromStdString(inputSrid)),
    QgsCoordinateReferenceSystem(QString::fromStdString(outputSrid)),
    QgsProject::instance());
  return transform.transformBoundingBox(inputRectangle);
}

const std::vector<MapLayer> QgisApi_mapLayers() {
  std::vector<MapLayer> result = {};
  for (QgsMapLayer *layer : QgisApi_allLayers()) {
    result.push_back(MapLayer(layer));
  }
  return result;
}

const std::vector<std::string> QgisApi_mapThemes() {
  std::vector<std::string> result = {};
  for (const QString &theme : QgsProject::instance()->mapThemeCollection()->mapThemes()) {
    result.push_back(theme.toStdString());
  }
  return result;
}

const std::string QgisApi_getMapTheme() {
  QgsLayerTree *layerTreeRoot = QgsProject::instance()->layerTreeRoot();
  QgsMapThemeCollection *collection = QgsProject::instance()->mapThemeCollection();
  QgsLayerTreeModel model(layerTreeRoot);
  auto currentState = QgsMapThemeCollection::createThemeFromCurrentState(layerTreeRoot, &model);
  for (const QString &theme : QgsProject::instance()->mapThemeCollection()->mapThemes()) {
    if (currentState == QgsProject::instance()->mapThemeCollection()->mapThemeState(theme)) {
      return theme.toStdString();
    }
  }
  return "";
}

const bool QgisApi_setMapTheme(std::string themeName) {
  QString qThemeName = QString::fromStdString(themeName);
  if (!QgsProject::instance()->mapThemeCollection()->hasMapTheme(qThemeName)) {
    return false;
  } else {
    QgsLayerTree *layerTreeRoot = QgsProject::instance()->layerTreeRoot();
    QgsMapThemeCollection *collection = QgsProject::instance()->mapThemeCollection();
    QgsLayerTreeModel model(layerTreeRoot);
    collection->applyTheme(qThemeName, layerTreeRoot, &model);
    return true;
  }
}

EMSCRIPTEN_BINDINGS(QgisApi) {
  emscripten::function("loadProject", &QgisApi_loadProject);
  emscripten::function("fullExtent", &QgisApi_fullExtent);
  emscripten::function("srid", &QgisApi_srid);
  emscripten::function("renderImage", &QgisApi_renderImage);
  emscripten::function("renderXYZTile", &QgisApi_renderXYZTile);
  emscripten::function("renderJob", &QgisApi_renderJob, emscripten::allow_raw_pointers());
  emscripten::function("transformRectangle", &QgisApi_transformRectangle);
  emscripten::function("mapLayers", &QgisApi_mapLayers);
  emscripten::register_vector<MapLayer>("vector<MapLayer>");
  emscripten::function("mapThemes", &QgisApi_mapThemes);
  emscripten::function("getMapTheme", &QgisApi_getMapTheme);
  emscripten::function("setMapTheme", &QgisApi_setMapTheme);
  emscripten::function("getLayerJson", &QgisApi_getLayerJson);
  emscripten::register_vector<std::string>("vector<std::string>");

}
