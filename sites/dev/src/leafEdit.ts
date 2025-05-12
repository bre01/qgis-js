import L, { FeatureGroup, polygon, type DrawOptions } from "leaflet"

import 'leaflet/dist/leaflet.css';
import 'leaflet-draw';
import 'leaflet-draw/dist/leaflet.draw.css'
/*
import PointString from "./data/Point.ts"
import PolygonString from "./data/Polygon.ts"
import PolylineString from "./data/Polyline.ts"
*/

export default async function Leaf(jsonString: string) {

  const map = L.map("map").setView([25, -100], 13); // Set to desired center and zoom

  // Step 2: Add a base layer (e.g., OpenStreetMap)
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    crossOrigin: true,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Step 3: Define your GeoJSON data

  // Step 4: Parse the JSON string

  const geoJSONData = await JSON.parse(jsonString);
  console.log(geoJSONData)
  const layerType = document.getElementById("layerType")! as HTMLInputElement
  layerType.value = geoJSONData.features[0].geometry.type;

  // Step 4: Add the GeoJSON layer to the map
  const jsonLayer = L.geoJSON(geoJSONData);
  jsonLayer.addTo(map);

  // Initialize the draw control and set options


  let drawOptions: L.Control.DrawOptions = { polygon: false, polyline: false, marker: false, rectangle: false, circlemarker: false, circle: false };

  // Map layertype to Leaflet draw tool key


  //techinically this is not required in leaflet
  //but in QGIS software, there's only one type in a layer 
  //so we constrain it 
  if (layerType.value === "Polygon") {
    drawOptions.polygon = {};
    //drawOptions.rectangle={};
    //does not work
    drawOptions.circlemarker = {};
    drawOptions.circle = {};
  } else if (layerType.value === "Polyline") {
    drawOptions.polyline = {};
  } else if (layerType.value === "Point") {
    // For points, Leaflet.Draw uses "marker"
    drawOptions.marker = {};
  }
  const drawControl = new L.Control.Draw({
    edit: {
      featureGroup: jsonLayer// Allows editing of the geojsonLayer
    },
    draw: drawOptions
  });

  // Add the draw control to the map
  map.addControl(drawControl);


  // Enable editing by listening to the `draw:created` event
  map.on("draw:created", function (event) {
    const layer = event.layer;
    jsonLayer.addLayer(layer); // Add the created layer to the GeoJSON layer
    console.log(jsonLayer.toGeoJSON());
  });

  // Enable editing by listening to the `draw:edited` event

  map.on("draw:edited", function (event) {
    // Handle edits (you can access edited layers here)
    /*
    const layers = event.layers;
    layers.eachLayer(function (layer) {
      console.log("Edited Layer:", layer);
    });
    */
    console.log(jsonLayer.toGeoJSON());
  });

  // Enable removal by listening to the `draw:deleted` event
  map.on("draw:deleted", function (event) {
    // Handle deletion (you can access deleted layers here)
    /*
    const layers = event.layers;
    layers.eachLayer(function (layer) {
      console.log("Deleted Layer:", layer);
    });
    */
    console.log(jsonLayer.toGeoJSON());
  });

  const getJson = () => {
    return jsonLayer.toGeoJSON();
  }
  return getJson
}



