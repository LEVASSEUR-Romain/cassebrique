import setPositionDefaultBall from "../../controler/objetGlobalchange/setPositionDefaultBall.js";
import setLoseBall from "../../controler/objetGlobalchange/setLoseBall.js";
import setStart from "../../controler/objetGlobalchange/setStart.js";
import reGoLoopGame from "./tools/reGoLoopGame.js";
import stopLoopGame from "./tools/stopLoopGame.js";
const restartLoseLife = (objectGlobal, listEvent, listCollision) => {
  if (objectGlobal.loseBall) {
    // refrech life start stop
    setLoseBall(objectGlobal, false);
    setStart(objectGlobal, false);
    //restart position
    setPositionDefaultBall(objectGlobal);
    stopLoopGame(objectGlobal);
  } else reGoLoopGame(objectGlobal, listEvent, listCollision);
};
export default restartLoseLife;
