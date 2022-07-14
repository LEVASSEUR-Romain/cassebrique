import clickMenu from "../clickMenu.js";
import searchBrickById from "../../tools/searchBrickById.js";
import activateOnePassif from "../passive/activateOnePassif.js";
import controlerBoss from "./../boss/controlerBoss.js";
const winLvl = (objectGlobal) => {
  //destructuring
  const {
    Player,
    start,
    canvasPlay,
    canvasMap,
    itemMapPosition,
    ball,
    Commons,
  } = objectGlobal;
  // Player choose lvl
  Player.lastClickLvl = false;
  // search if bonus lvl
  const itemMap = searchBrickById(itemMapPosition, Player.currentIdLvl);
  //go bonus
  if (itemMap && itemMap.bonus) {
    activateOnePassif(Player, Commons, ball);
    clearTimeout(objectGlobal.setTimeOutGame);
    clickMenu("map", start, canvasPlay, canvasMap, Player);
  }
  //go boss
  else if (itemMap && itemMap.type === "boss") {
    clearTimeout(objectGlobal.setTimeOutGame);
    controlerBoss(objectGlobal);
  }
  // retour a la map
  else {
    clearTimeout(objectGlobal.setTimeOutGame);
    // routing map
    clickMenu("map", start, canvasPlay, canvasMap, Player);
  }
};
export default winLvl;
