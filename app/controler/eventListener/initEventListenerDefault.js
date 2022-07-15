import onClickMenu from "./onClickMenu.js";
import onClickMap from "./onClickMap.js";
import onControleGame from "./onControleGame.js";
import onResize from "./onResize.js";

const initEventListenerDefault = (objectGlobal) => {
  onClickMenu(objectGlobal);
  onClickMap(objectGlobal);
  onControleGame(objectGlobal);
  onResize(objectGlobal);
};
export default initEventListenerDefault;
