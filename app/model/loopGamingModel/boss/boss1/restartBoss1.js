import setLoseBall from "../../../../controler/objetGlobalchange/setLoseBall.js";
import setStart from "../../../../controler/objetGlobalchange/setStart.js";
import setPositionDefaultBall from "../../../../controler/objetGlobalchange/setPositionDefaultBall.js";
import { emptyShoot } from "../../../../controler/objetGlobalchange/controleurShoot.js";
import stopLoopGame from "../../tools/stopLoopGame.js";
import reGoLoopGame from "../../tools/reGoLoopGame.js";
const restartBoss1 = (objectGlobal, listEvent, listCollision) => {
  //ball left zonePlay
  if (objectGlobal.loseBall) {
    // refrech life start stop
    setLoseBall(objectGlobal, false);
    setStart(objectGlobal, false);
    // if shoot on vide
    if (objectGlobal.Shoot) {
      emptyShoot(objectGlobal);
    }
    //restart position
    setPositionDefaultBall(objectGlobal);
    stopLoopGame(objectGlobal);
  } else {
    reGoLoopGame(objectGlobal, listEvent, listCollision);
  }
};
export default restartBoss1;
