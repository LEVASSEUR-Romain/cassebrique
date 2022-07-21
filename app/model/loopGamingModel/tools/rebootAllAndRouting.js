import setStart from "../../../controler/objetGlobalchange/setStart.js";
import setLastClickLvl from "../../../controler/objetGlobalchange/setLastClickLvl.js";
import {
  removeAllDraw,
  addListDraw,
} from "../../../controler/objetGlobalchange/controleurListDraw.js";
import routing from "../../../controler/main/routing.js";

const rebootAllAndRouting = (objectGlobal) => {
  //stop start
  setStart(objectGlobal, false);
  // Player choose lvl
  setLastClickLvl(objectGlobal, false);
  //redraw only map
  removeAllDraw(objectGlobal);
  addListDraw(objectGlobal, "map");
  //go map
  routing("map", canvasPlay, canvasMap);
};
export default rebootAllAndRouting;
