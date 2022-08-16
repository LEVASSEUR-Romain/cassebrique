import getHtmlCollectionImg from "../../controler/objetGlobalchange/getHtmlCollectionImg.js";
const backgroundCanvas = (objectGlobal) => {
  const { ctx, canvasMap } = objectGlobal;

  const ptrn = ctx.createPattern(
    getHtmlCollectionImg(objectGlobal, "fontplay"),
    "repeat"
  );
  ctx.fillStyle = ptrn;
  ctx.fillRect(0, 0, canvasMap.width, canvasMap.height);
};

export default backgroundCanvas;
