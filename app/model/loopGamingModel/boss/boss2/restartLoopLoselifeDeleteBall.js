import loopGaming from "../../../../controler/main/loopGaming.js";
const restartLoopLoselifeDeleteBall = (
  objectGlobal,
  listEvent,
  listCollision
) => {
  // restart boucle
  objectGlobal.setTimeOutGame = setTimeout(() => {
    loopGaming(objectGlobal, listEvent, listCollision);
  }, objectGlobal.Commons.gameSpeedMillisecond);
};
export default restartLoopLoselifeDeleteBall;
