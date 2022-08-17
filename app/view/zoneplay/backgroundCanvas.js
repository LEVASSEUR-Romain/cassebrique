import getHtmlCollectionImg from "../../controler/objetGlobalchange/getHtmlCollectionImg.js";
const backgroundCanvas = (objectGlobal, other = null) => {
  let ctx, canvasPlay;
  if (other === null) {
    ctx = objectGlobal.ctx;
    canvasPlay = objectGlobal.canvasPlay;
  } else {
    ctx = other.ctx;
    canvasPlay = other.canvasPlay;
  }
  const ptrn = ctx.createPattern(
    getHtmlCollectionImg(objectGlobal, "fontplay"),
    "repeat"
  );
  ctx.fillStyle = ptrn;
  ctx.fillRect(0, 0, canvasPlay.width, canvasPlay.height);
};

export default backgroundCanvas;
