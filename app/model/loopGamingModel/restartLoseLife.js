import setPositionDefaultBall from "../../controler/objetGlobalchange/setPositionDefaultBall.js";
import loopGaming from "../../controler/main/loopGaming.js";
import setLifePlayer from "../../controler/objetGlobalchange/setLifePlayer.js";
import setStart from "../../controler/objetGlobalchange/setStart.js";
const restartLoseLife = (objectGlobal, listEvent, listCollision) => {
  //destructuring
  const { Player, Ball, Commons } = objectGlobal;
  if (objectGlobal.lifePlayer !== Player.life) {
    // refrech life start stop
    setLifePlayer(objectGlobal);
    setStart(objectGlobal, false);
    //restart position
    setPositionDefaultBall(objectGlobal);
    clearTimeout(objectGlobal.setTimeOutGame);
  } else
    objectGlobal.setTimeOutGame = setTimeout(() => {
      loopGaming(objectGlobal, listEvent, listCollision);
    }, Commons.gameSpeedMillisecond);
};
export default restartLoseLife;
