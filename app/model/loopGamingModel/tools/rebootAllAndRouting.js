import setStart from "../../../controler/objetGlobalchange/setStart.js";
import setLastClickLvl from "../../../controler/objetGlobalchange/setLastClickLvl.js";
import {
  removeAllDraw,
  addListDraw,
} from "../../../controler/objetGlobalchange/controleurListDraw.js";
import routing from "../../../controler/main/routing.js";
import drawAll from "../../../view/drawAll.js";

const rebootAllAndRouting = (objectGlobal) => {
  //stop start
  setStart(objectGlobal, false);
  // Player choose lvl
  setLastClickLvl(objectGlobal, false);
  //add only map
  removeAllDraw(objectGlobal);
  addListDraw(objectGlobal, "map");
  // redraw
  drawAll(objectGlobal);
  //go map
  routing("map", canvasPlay, canvasMap);
};
export default rebootAllAndRouting;
