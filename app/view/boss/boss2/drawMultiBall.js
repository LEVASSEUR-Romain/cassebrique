import drawBall from "../../zoneplay/drawBall.js";
const drawMultiBall = (objectGlobal) => {
  const { Ball } = objectGlobal;
  Ball.forEach((element) => {
    drawBall(objectGlobal, element);
  });
};
export default drawMultiBall;
