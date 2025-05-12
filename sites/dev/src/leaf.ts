import { QgisApi } from "qgis-js";
import type { Rectangle } from "qgis-js";
import leafEdit from "./leafEdit"

const mapScaleFactor = 1.5;
const mapMoveFactor = 0.1;

export function leafDemo(
  canvas: HTMLDivElement,
  api: QgisApi,
): { update: () => void; render: () => void } {
  let lastExtent: Rectangle | null = null;

  /*
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
  */

  async function addLeafMap() {

    const getJson = await leafEdit(await api.getLayerJson(0));
    document.getElementById("leafsave")!.onclick = () => {
      const str = JSON.stringify(getJson(), null, 2);
      api.setLayerByJson(0, str).then(console.log);
    };
  }

  async function renderMap() {

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
    addLeafMap();
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
