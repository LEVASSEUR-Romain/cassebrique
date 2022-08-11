import getHtmlCollectionImg from "../../controler/objetGlobalchange/getHtmlCollectionImg.js";
const drawInterrogationPoint = (objectGlobal) => {
  const { ctxMap, canvasMap, itemMapInterrogation } = objectGlobal;
  const radius = (itemMapInterrogation.radius * canvasMap.height) / 100;
  const px = (itemMapInterrogation.px * canvasMap.width) / 100;
  const py = (itemMapInterrogation.py * canvasMap.height) / 100;
  ctxMap.drawImage(
    getHtmlCollectionImg(objectGlobal, "interrogation"),
    px,
    py,
    radius * 2,
    radius * 2
  );
};
export default drawInterrogationPoint;
