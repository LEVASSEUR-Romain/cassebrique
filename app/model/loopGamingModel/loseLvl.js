import stopLoopGame from "./tools/stopLoopGame.js";
import loseAllGame from "../../controler/lose/loseAllGame.js";
import setStart from "../../controler/objetGlobalchange/setStart.js";
import rebootAllAndRouting from "./tools/rebootAllAndRouting.js";
const loseLvl = (objectGlobal) => {
  if (objectGlobal.Player.life === 0) {
    setStart(objectGlobal, false);
    stopLoopGame(objectGlobal);
    rebootAllAndRouting(objectGlobal);
    loseAllGame(objectGlobal);
  }
};
export default loseLvl;
