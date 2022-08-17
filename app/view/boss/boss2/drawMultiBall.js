import drawBall from "../../zoneplay/drawBall.js";
const drawMultiBall = (objectGlobal) => {
  const { Ball } = objectGlobal;
  Ball.forEach((element) => {
    drawBall(objectGlobal, {
      x: element.x,
      y: element.y,
      radiusHeight: element.radiusHeight,
      ctx: objectGlobal.ctx,
      canvasPlay: objectGlobal.canvasPlay,
    });
  });
};
export default drawMultiBall;
