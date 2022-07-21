import setPositionDefaultBall from "../objetGlobalchange/setPositionDefaultBall.js";
import { setPositionDefaultPlayer } from "../objetGlobalchange/controleurPlayer.js";
import { setBoss } from "../objetGlobalchange/controleurBoss.js";
import { removeAllDraw } from "../objetGlobalchange/controleurListDraw.js";
import { addListDraw } from "../objetGlobalchange/controleurListDraw.js";
import drawAll from "../../view/drawAll.js";
import { transformBallToArray } from "../objetGlobalchange/constroleurBall.js";
const controlerBoss2 = (objectGlobal) => {
  // Boss des boules
  // restart de la game position pret a tirer
  setPositionDefaultPlayer(objectGlobal);
  setPositionDefaultBall(objectGlobal);
  // update objetGlobal
  setBoss(objectGlobal, 2);
  transformBallToArray(objectGlobal);
  // regles nouveau draw
  removeAllDraw(objectGlobal);
  addListDraw(objectGlobal, "boss2");
  drawAll(objectGlobal);
};
export default controlerBoss2;
