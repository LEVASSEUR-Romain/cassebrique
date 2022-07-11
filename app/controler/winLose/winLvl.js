import clickMenu from "../clickMenu.js";
import searchBrickById from "../../tools/searchBrickById.js";
const winLvl = (
  Player,
  start,
  canvasPlay,
  canvasMap,
  itemMapPosition,
  ball,
  Commons
) => {
  // Player choose lvl
  Player.lastClickLvl = false;
  // search if bonus lvl
  const itemMap = searchBrickById(itemMapPosition, Player.currentIdLvl);
  if (itemMap && itemMap.bonus) {
    activateOnePassif(Player, Commons, ball);
  }
  // routing map
  clickMenu("map", start, canvasPlay, canvasMap, Player);
};
export default winLvl;
