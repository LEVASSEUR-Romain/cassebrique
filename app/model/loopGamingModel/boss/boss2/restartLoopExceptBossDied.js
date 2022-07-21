import reGoLoopGame from "../../tools/reGoLoopGame.js";
const restartLoopExceptBossDied = (objectGlobal, listEvent, listCollision) => {
  // restart boucle
  if (objectGlobal.Boss) {
    reGoLoopGame(objectGlobal, listEvent, listCollision);
  }
};
export default restartLoopExceptBossDied;
