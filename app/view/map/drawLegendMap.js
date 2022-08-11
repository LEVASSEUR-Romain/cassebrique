import drawMapItemBoss from "./drawMapItemBoss.js";
import drawMapItemCampFire from "./drawMapItemCampFire.js";
import drawMapItemNormal from "./drawMapItemNormal.js";

const drawLegendMap = (objectGlobal) => {
  const { ctxMap, canvasMap, Commons } = objectGlobal;
  // variable
  const widhtPourcentage = 20;
  const heightPourcentage = 30;
  const lenghtPourcentage = 3;
  const borderPourcentage = 2;
  // calcule
  const border = (borderPourcentage * canvasMap.height) / 100;
  // responsive
  const widthRec = (widhtPourcentage * canvasMap.width) / 100;
  const heightRec = (heightPourcentage * canvasMap.height) / 100;
  const pxRec = 0;
  const pyRec = canvasMap.height - heightRec;
  let currentYposition = pyRec;
  //rec
  ctxMap.fillStyle = "green";
  ctxMap.fillRect(pxRec, pyRec, widthRec, heightRec);
  //text.
  const lenghtText = (lenghtPourcentage * canvasMap.height) / 100;
  const halfWidthRec = widthRec / 2;
  currentYposition += lenghtText;
  ctxMap.font = "italic  bold" + lenghtText + "px fantasy";
  ctxMap.fillStyle = "black";
  ctxMap.textAlign = "center";
  ctxMap.fillText("Legend", halfWidthRec, currentYposition, widthRec);

  // legend Boss
  const radius = (Commons.radiusItemMap * canvasMap.height) / 100;
  const pxBoss = ((radius + border) / canvasMap.width) * 100;
  currentYposition += radius + border;
  const pyBoss = (currentYposition / canvasMap.height) * 100;

  drawMapItemBoss(objectGlobal, { px: pxBoss, py: pyBoss });
  //text Boss
  currentYposition;
  ctxMap.font = "italic  bold" + lenghtText + "px fantasy";
  ctxMap.fillStyle = "black";
  ctxMap.textAlign = "left";
  ctxMap.fillText("Boss", halfWidthRec, pyRec + lenghtText, widthRec);
};
export default drawLegendMap;
