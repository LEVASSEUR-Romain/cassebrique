import searchBrickById from "../../tools/searchLvlById.js";
import activateOnePassifAndSave from "../../controler/passive/activateOnePassifAndSave.js";
import rebootAllAndRouting from "./tools/rebootAllAndRouting.js";
import stopLoopGame from "./tools/stopLoopGame.js";
// local
import addAllLocalStrorage from "../../controler/localStorage/addAllLocalStrorage.js";
const defaultWin = (objectGlobal) => {
  if (objectGlobal.Briks.length === 0) {
    //destructuring
    const { Player, itemMapPosition } = objectGlobal;
    stopLoopGame(objectGlobal);
    // search if bonus lvl
    const itemMap = searchLvlById(itemMapPosition, Player.currentIdLvl);
    if (itemMap && itemMap.bonus) {
      activateOnePassifAndSave(objectGlobal);
    }
    rebootAllAndRouting(objectGlobal);
  }
};
export default defaultWin;
