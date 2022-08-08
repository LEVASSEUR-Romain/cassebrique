import setLoseBall from "../../../../controler/objetGlobalchange/setLoseBall.js";
import setStart from "../../../../controler/objetGlobalchange/setStart.js";
import setPositionDefaultBall from "../../../../controler/objetGlobalchange/setPositionDefaultBall.js";
import stopLoopGame from "../../tools/stopLoopGame.js";
import reGoLoopGame from "../../tools/reGoLoopGame.js";
import { addBomb } from "../../../../controler/objetGlobalchange/controleurBomb.js";
const restartBoss3 = (objectGlobal, listEvent, listCollision) => {
  //ball left zonePlay
  if (objectGlobal.loseBall) {
    // refrech life start stop
    setLoseBall(objectGlobal, false);
    setStart(objectGlobal, false);
    // stop bomb
    if (objectGlobal.Bomb) {
      addBomb(objectGlobal);
    }
    //restart position
    setPositionDefaultBall(objectGlobal);
    objectGlobal.Boss.frame = 0;
    stopLoopGame(objectGlobal);
  } else {
    reGoLoopGame(objectGlobal, listEvent, listCollision);
  }
};
export default restartBoss3;
