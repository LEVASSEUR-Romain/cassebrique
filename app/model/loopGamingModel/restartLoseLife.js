import setPositiondefaultBall from "../../controler/objetGlobalchange/setPositiondefaultPlayerBall.js";
import loopGaming from "../../controler/loopGaming.js";
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
    setPositiondefaultBall(objectGlobal);
    clearTimeout(objectGlobal.setTimeOutGame);
  } else
    objectGlobal.setTimeOutGame = setTimeout(() => {
      loopGaming(objectGlobal, listEvent, listCollision);
    }, Commons.gameSpeedMillisecond);
};
export default restartLoseLife;
