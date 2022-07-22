import reGoLoopGame from "../../tools/reGoLoopGame.js";
const restartBoss2 = (objectGlobal, listEvent, listCollision) => {
  // restart boucle
  if (objectGlobal.Boss) {
    reGoLoopGame(objectGlobal, listEvent, listCollision);
  }
};
export default restartBoss2;
