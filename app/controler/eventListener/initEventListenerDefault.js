import onClickMenu from "./onClickMenu.js";
import onClickMap from "./onClickMap.js";
import onResize from "./onResize.js";
import onControleGameClick from "./onControleGameClick.js";

const initEventListenerDefault = (objectGlobal) => {
  onClickMenu(objectGlobal);
  onClickMap(objectGlobal);
  onResize(objectGlobal);
  onControleGameClick(objectGlobal);
};
export default initEventListenerDefault;
