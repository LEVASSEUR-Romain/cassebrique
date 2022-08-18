import searchLvlById from "../../tools/searchLvlById.js";
import activateOnePassifAndSave from "../../controler/passive/activateOnePassifAndSave.js";
import rebootAllAndRouting from "./tools/rebootAllAndRouting.js";
import stopLoopGame from "./tools/stopLoopGame.js";
import playSound from "../../controler/sound/playSound.js";
import finishItemMap from "./../../controler/map/finishItemMap.js";
import { removeAllParticule } from "./../../controler/objetGlobalchange/controleurParticule.js";
// local
import addAllLocalStrorage from "../../controler/localStorage/addAllLocalStrorage.js";

const defaultWin = (objectGlobal) => {
  if (objectGlobal.Briks.length === 0) {
    //destructuring
    const { Player, itemMapPosition } = objectGlobal;
    stopLoopGame(objectGlobal);
    removeAllParticule(objectGlobal);
    const search = searchLvlById(itemMapPosition, Player.currentIdLvl);
    if (search && search.bonus) {
      activateOnePassifAndSave(objectGlobal);
    }
    finishItemMap(objectGlobal);
    playSound(objectGlobal, "victoire");
    rebootAllAndRouting(objectGlobal);
  }
};
export default defaultWin;
