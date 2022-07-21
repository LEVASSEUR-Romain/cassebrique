import searchBrickById from "../../tools/searchBrickById.js";
import activateOnePassifAndSave from "../../controler/passive/activateOnePassifAndSave.js";
import rebootAllAndRouting from "./tools/rebootAllAndRouting.js";
// local
import addAllLocalStrorage from "../../controler/localStorage/addAllLocalStrorage.js";
const defaultWin = (objectGlobal) => {
  if (objectGlobal.Briks.length === 0) {
    //destructuring
    const { Player, canvasPlay, canvasMap, itemMapPosition, Ball, Commons } =
      objectGlobal;

    clearTimeout(objectGlobal.setTimeOutGame);
    // search if bonus lvl
    const itemMap = searchBrickById(itemMapPosition, Player.currentIdLvl);
    //go bonus
    if (itemMap && itemMap.bonus) {
      activateOnePassifAndSave(objectGlobal);
    }
    // close and redraw
    rebootAllAndRouting(objectGlobal);
  }
};
export default defaultWin;
