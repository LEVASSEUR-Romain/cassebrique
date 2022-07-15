import routing from "../../controler/routing.js";
import searchBrickById from "../../tools/searchBrickById.js";
import activateOnePassif from "../../controler/passive/activateOnePassif.js";
import controlerBoss from "../../controler/boss/controlerBoss.js";
const winLvl = (objectGlobal) => {
  if (objectGlobal.Briks.length === 0) {
    //destructuring
    const { Player, canvasPlay, canvasMap, itemMapPosition, Ball, Commons } =
      objectGlobal;
    // fin de boucle
    objectGlobal.start = false;
    clearTimeout(objectGlobal.setTimeOutGame);
    // Player choose lvl
    Player.lastClickLvl = false;
    // search if bonus lvl
    const itemMap = searchBrickById(itemMapPosition, Player.currentIdLvl);
    //go bonus
    if (itemMap && itemMap.bonus) {
      activateOnePassif(Player, Commons, Ball);
      routing("map", canvasPlay, canvasMap);
    }
    //go boss
    else if (itemMap && itemMap.type === "boss") {
      controlerBoss(objectGlobal);
    }
    // retour a la map
    else {
      // routing map
      routing("map", canvasPlay, canvasMap);
    }
  }
};
export default winLvl;
