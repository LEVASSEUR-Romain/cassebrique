import getHtmlCollectionImg from "../../controler/objetGlobalchange/getHtmlCollectionImg.js";

const drawPlayerOnMap = (objectGlobal, otherCanvas = null) => {
  let playerPx, playerPy, ctxMap, canvasMap, widthPlayer, heightPlayer;
  if (otherCanvas === null) {
    playerPx = objectGlobal.Player.pxMap;
    playerPy = objectGlobal.Player.pyMap;
    canvasMap = objectGlobal.canvasMap;
    ctxMap = objectGlobal.ctxMap;
    widthPlayer = objectGlobal.Commons.widthPlayerMap;
    heightPlayer = objectGlobal.Commons.heightPlayerMap;
  } else {
    playerPx = otherCanvas.px;
    playerPy = otherCanvas.py;
    canvasMap = otherCanvas.canvas;
    ctxMap = otherCanvas.ctx;
    widthPlayer = otherCanvas.width;
    heightPlayer = otherCanvas.height;
  }
  const positionX = (canvasMap.width * playerPx) / 100;
  const positionY = (canvasMap.height * playerPy) / 100;
  const wP = (widthPlayer * canvasMap.width) / 100;
  const hP = (heightPlayer * canvasMap.height) / 100;
  // icone
  ctxMap.drawImage(
    getHtmlCollectionImg(objectGlobal, "positiononmap"),
    positionX,
    positionY,
    wP,
    hP
  );
  // text
  if (
    objectGlobal.Commons.PlayerDefault.pxMap === playerPx &&
    objectGlobal.Commons.PlayerDefault.pyMap === playerPy
  ) {
    const maxLenght = canvasMap.width - (positionX + wP);
    ctxMap.font = "20px arial";
    ctxMap.fillText(
      "Choisir un chemin",
      positionX + wP,
      positionY + hP - 10,
      maxLenght
    );
  }
};

export default drawPlayerOnMap;
