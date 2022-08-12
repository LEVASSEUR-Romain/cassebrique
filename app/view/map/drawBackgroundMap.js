import getHtmlCollectionImg from "../../controler/objetGlobalchange/getHtmlCollectionImg.js";
const drawBackgroundMap = (objectGlobal) => {
  const { ctxMap, canvasMap } = objectGlobal;

  const ptrn = ctxMap.createPattern(
    getHtmlCollectionImg(objectGlobal, "fontmenu"),
    "repeat"
  );
  ctxMap.fillStyle = ptrn;
  ctxMap.fillRect(0, 0, canvasMap.width, canvasMap.height);
};
export default drawBackgroundMap;
