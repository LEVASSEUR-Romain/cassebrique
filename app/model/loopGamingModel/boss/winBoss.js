import activateOnePassifAndSave from "../../../controler/passive/activateOnePassifAndSave.js";
import rebootAllAndRouting from "../tools/rebootAllAndRouting.js";
import { deleteAllUpdateBoss } from "./../../../controler/objetGlobalchange/controleurBoss.js";
import stopLoopGame from "../tools/stopLoopGame.js";
import finishItemMap from "../../../controler/map/finishItemMap.js";
import playSound from "../../../controler/sound/playSound.js";
import { removeAllParticule } from "../../../controler/objetGlobalchange/controleurParticule.js";
const winBoss = (objectGlobal) => {
  if (objectGlobal.Boss.life === 0) {
    stopLoopGame(objectGlobal);
    removeAllParticule(objectGlobal);
    deleteAllUpdateBoss(objectGlobal);
    activateOnePassifAndSave(objectGlobal);
    finishItemMap(objectGlobal);
    playSound(objectGlobal, "victoire");
    rebootAllAndRouting(objectGlobal);
  }
};
export default winBoss;
