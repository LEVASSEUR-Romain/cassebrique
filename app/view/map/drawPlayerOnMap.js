import getHtmlCollectionImg from "../../controler/objetGlobalchange/getHtmlCollectionImg.js";

const drawPlayerOnMap = (objectGlobal, otherCanvas = null) => {
  let playerPx, playerPy, ctxMap, canvasMap, radiusPlayer;
  if (otherCanvas === null) {
    playerPx = objectGlobal.Player.pxMap;
    playerPy = objectGlobal.Player.pyMap;
    canvasMap = objectGlobal.canvasMap;
    ctxMap = objectGlobal.ctxMap;
    radiusPlayer = objectGlobal.Player.radiusPlayer;
  } else {
    playerPx = otherCanvas.px;
    playerPy = otherCanvas.py;
    canvasMap = otherCanvas.canvas;
    ctxMap = otherCanvas.ctx;
    radiusPlayer = otherCanvas.radius;
  }

  const positionX = (canvasMap.width * playerPx) / 100;
  const positionY = (canvasMap.height * playerPy) / 100;
  const radius = (radiusPlayer * canvasMap.height) / 100;
  // icone
  const imgPositionX = positionX - radius;
  const imgPositionY = positionY - radius;
  ctxMap.drawImage(
    getHtmlCollectionImg(objectGlobal, "positiononmap"),
    imgPositionX,
    imgPositionY,
    radius * 2,
    radius * 2
  );
};

export default drawPlayerOnMap;
