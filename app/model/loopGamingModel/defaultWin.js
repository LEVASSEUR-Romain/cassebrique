import routing from "../../controler/routing.js";
import searchBrickById from "../../tools/searchBrickById.js";
import activateOnePassifAndSave from "../../controler/passive/activateOnePassifAndSave.js";
import controlerBoss from "../../controler/boss/controlerBoss.js";
// set getter global object
import setStart from "../../controler/objetGlobalchange/setStart.js";
import setLastClickLvl from "../../controler/objetGlobalchange/setLastClickLvl.js";
import {
  removeAllDraw,
  addListDraw,
} from "../../controler/objetGlobalchange/controleurListDraw.js";
// local
import addAllLocalStrorage from "../../controler/localStorage/addAllLocalStrorage.js";
const defaultWin = (objectGlobal) => {
  if (objectGlobal.Briks.length === 0) {
    //destructuring
    const { Player, canvasPlay, canvasMap, itemMapPosition, Ball, Commons } =
      objectGlobal;

    // end strating
    setStart(objectGlobal, false);
    clearTimeout(objectGlobal.setTimeOutGame);
    // Player choose lvl
    setLastClickLvl(objectGlobal, false);
    // search if bonus lvl
    const itemMap = searchBrickById(itemMapPosition, Player.currentIdLvl);
    //go bonus
    if (itemMap && itemMap.bonus) {
      activateOnePassifAndSave(objectGlobal);
      // close and redraw
      removeAllDraw(objectGlobal);
      addListDraw(objectGlobal, "map");
      routing("map", canvasPlay, canvasMap);
    }
    //go boss
    else if (itemMap && itemMap.type === "boss") {
      controlerBoss(objectGlobal);
    }
    // retour a la map
    else {
      // close and redraw
      removeAllDraw(objectGlobal);
      addListDraw(objectGlobal, "map");
      //save LOCAL
      //addAllLocalStrorage(objectGlobal);
      routing("map", canvasPlay, canvasMap);
    }
  }
};
export default defaultWin;
