import searchLvlById from "../../tools/searchLvlById.js";
import activateOnePassifAndSave from "../../controler/passive/activateOnePassifAndSave.js";
import rebootAllAndRouting from "./tools/rebootAllAndRouting.js";
import stopLoopGame from "./tools/stopLoopGame.js";
// local
import addAllLocalStrorage from "../../controler/localStorage/addAllLocalStrorage.js";
import finishItemMap from "./../../controler/map/finishItemMap.js";
const defaultWin = (objectGlobal) => {
  if (objectGlobal.Briks.length === 0) {
    //destructuring
    const { Player, itemMapPosition, itemMap } = objectGlobal;
    stopLoopGame(objectGlobal);
    const search = searchLvlById(itemMapPosition, Player.currentIdLvl);
    if (search && search.bonus) {
      activateOnePassifAndSave(objectGlobal);
    }
    finishItemMap(objectGlobal);
    rebootAllAndRouting(objectGlobal);
  }
};
export default defaultWin;
