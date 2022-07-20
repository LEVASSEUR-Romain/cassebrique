import setLifePlayer from "../../../controler/objetGlobalchange/setLifePlayer.js";
import setStart from "../../../controler/objetGlobalchange/setStart.js";
import setPositionDefaultBall from "../../../controler/objetGlobalchange/setPositionDefaultBall.js";
import borderBottomBall from "../../collision/toolsCollision/borderBottomBall.js";
import { emptyShoot } from "../../../controler/objetGlobalchange/controleurShoot.js";
import loopGaming from "../../../controler/loopGaming.js";
const restartLoseLifeBoss = (objectGlobal, listEvent, listCollision) => {
  //ball left zonePlay
  if (borderBottomBall(objectGlobal)) {
    // refrech life start stop
    setLifePlayer(objectGlobal);
    setStart(objectGlobal, false);
    // if shoot on vide
    if (objectGlobal.Shoot) {
      emptyShoot(objectGlobal);
    }
    //restart position
    setPositionDefaultBall(objectGlobal);
    clearTimeout(objectGlobal.setTimeOutGame);
  } else {
    objectGlobal.setTimeOutGame = setTimeout(() => {
      loopGaming(objectGlobal, listEvent, listCollision);
    }, objectGlobal.Commons.gameSpeedMillisecond);
  }
};
export default restartLoseLifeBoss;
