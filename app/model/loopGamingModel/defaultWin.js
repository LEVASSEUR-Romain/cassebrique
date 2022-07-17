import routing from "../../controler/routing.js";
import searchBrickById from "../../tools/searchBrickById.js";
import activateOnePassif from "../../controler/passive/activateOnePassif.js";
import controlerBoss from "../../controler/boss/controlerBoss.js";
// set getter global object
import setStart from "../../controler/objetGlobalchange/setStart.js";
import setLastClickLvl from "../../controler/objetGlobalchange/setLastClickLvl.js";
import { removeAllDraw } from "../../controler/objetGlobalchange/controleurListDraw.js";

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
      activateOnePassif(Player, Commons, Ball);
      removeAllDraw(objectGlobal);
      routing("map", canvasPlay, canvasMap);
    }
    //go boss
    else if (itemMap && itemMap.type === "boss") {
      controlerBoss(objectGlobal);
    }
    // retour a la map
    else {
      removeAllDraw(objectGlobal);
      routing("map", canvasPlay, canvasMap);
    }
  }
};
export default defaultWin;
