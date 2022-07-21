import loopGaming from "../../../controler/main/loopGaming.js";
const reGoLoopGame = (objectGlobal, listEvent, listCollision) => {
  objectGlobal.setTimeOutGame = setTimeout(() => {
    loopGaming(objectGlobal, listEvent, listCollision);
  }, objectGlobal.Commons.gameSpeedMillisecond);
};
export default reGoLoopGame;
