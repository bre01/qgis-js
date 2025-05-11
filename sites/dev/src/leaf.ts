import { QgisApi } from "qgis-js";
import L, { Layer } from "leaflet"

import 'leaflet/dist/leaflet.css';

import 'leaflet-draw';
import 'leaflet-draw/dist/leaflet.draw.css'

import type { Rectangle } from "qgis-js";
import { drawImageOrLabel } from "ol/render/canvas";


const mapScaleFactor = 1.5;
const mapMoveFactor = 0.1;

export function leafDemo(
  canvas: HTMLCanvasElement,
  api: QgisApi,
): { update: () => void; render: () => void } {
  let lastExtent: Rectangle | null = null;
  // ensure pixel perfect rendering
  // see https://web.dev/articles/device-pixel-content-box
  const observer = new ResizeObserver((entries) => {
    const entry = entries.find((entry) => entry.target === canvas);
    if (entry) {
      canvas.width = entry.devicePixelContentBoxSize[0].inlineSize;
      canvas.height = entry.devicePixelContentBoxSize[0].blockSize;
    }
    renderMap();
  });
  observer.observe(canvas, { box: "device-pixel-content-box" });


  async function renderMap() {
    //console.log("leaflet");
    //console.log(currentLayer);
    /*
    if (currentLayer) {
      drawnItems.removeLayer(currentLayer);
    }
      */



    /*
    L.marker([24.5, -100]).addTo(map)
      .bindPopup('A pretty CSS popup.<br> Easily customizable.')
      .openPopup();
      */
    /*
   const layer = L.geoJSON(json, {
     onEachFeature: function (feature, layer) {
       layer.bindPopup(
         "<h1>" + feature.properties.name + "</h1><p>id: " + feature.id + "</p>",
       );
     },
   })
   currentLayer = layer;
   console.log("do it");
   layer.addTo(map);
   */






    // 3. Create a feature group to hold and edit the GeoJSON


    // 4. Load GeoJSON features into the feature group
    /*
    L.geoJSON(json).eachLayer(function (layer) {
      drawnItems.addLayer(layer);
    });
    */

    // 5. Set up the draw control
    // 6. Listen to edit/save events




















    /*

    var devicePixelRatio = window.devicePixelRatio || 1;
    var cssRect = canvas.getBoundingClientRect();
    const imageWidth = cssRect.width * devicePixelRatio;
    const imageHeight = cssRect.height * devicePixelRatio;

    if (imageWidth && imageHeight) {
      const image = await api.renderImage(
        api.srid(),
        lastExtent!,
        imageWidth,
        imageHeight,
        window.devicePixelRatio,
      );

      const context = canvas.getContext("2d");
      canvas.width = imageWidth;
      canvas.height = imageHeight;
      context!.scale(devicePixelRatio, devicePixelRatio);
      context!.putImageData(image, 0, 0);
    }
      */
  }
  /*
  document.getElementById("zoomin")!.onclick = function () {
    lastExtent!.scale(1 / mapScaleFactor);
    renderMap();
  };
  document.getElementById("zoomout")!.onclick = function () {
    lastExtent!.scale(mapScaleFactor);
    renderMap();
  };
  document.getElementById("panleft")!.onclick = function () {
    lastExtent!.move(
      (lastExtent!.xMaximum - lastExtent!.xMinimum) * mapMoveFactor,
      0,
    );
    renderMap();
  };
  document.getElementById("panright")!.onclick = function () {
    lastExtent!.move(
      -(lastExtent!.xMaximum - lastExtent!.xMinimum) * mapMoveFactor,
      0,
    );
    renderMap();
  };
  document.getElementById("panup")!.onclick = function () {
    lastExtent!.move(
      0,
      -(lastExtent!.yMaximum - lastExtent!.yMinimum) * mapMoveFactor,
    );
    renderMap();
  };
  document.getElementById("pandown")!.onclick = function () {
    lastExtent!.move(
      0,
      (lastExtent!.yMaximum - lastExtent!.yMinimum) * mapMoveFactor,
    );
    renderMap();
  };
  */

  function onStart() {
    lastExtent = api.fullExtent();
    renderMap();
    let map = L.map("map").setView([24, -100], 6);


    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      crossOrigin: true,
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap/copyright">OpenStreetMap</a>',
    }).addTo(map);



    // 2. Create the map

    // 3. Create a feature group to hold and edit the GeoJSON
    const drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    // 4. Load GeoJSON features into the feature group


    // 5. Set up the draw control
    const drawControl = new L.Control.Draw({
      draw: {
      }, // disable new shapes if you only want editing
      edit: {
        featureGroup: drawnItems
      }
    });
    map.addControl(drawControl);
    // 6. Listen to edit/save events
    map.on('draw:edited', function (e) {
      console.log("draw edited");
      const layer = e.layer;
      console.log(layer.toGeoJSON())
      /*
      const layers = e.layers;
      layers.eachLayer(function (layer) {
        // handle updated geometry here
        const updatedGeoJSON = layer.toGeoJSON();
        console.log(updatedGeoJSON);
      });
      */
    });
    map.on(L.Draw.Event.CREATED, function (event) {
      event.layers.forEach(layer => {

        drawnItems.addLayer(layer); // ✅ Important: this keeps it on the map
        const newFeature = layer.toGeoJSON();
        console.log(newFeature);
      });
    });
    const json = JSON.parse((api.getLayerJson(0)));
    const singleLayer = L.geoJSON(json);
    drawnItems.addLayer(singleLayer);















    let currentLayer: Layer | null = null;

  }

  onStart();

  return {
    update: () => {
      onStart();
    },
    render: () => {
      renderMap();
    },
  };
}
