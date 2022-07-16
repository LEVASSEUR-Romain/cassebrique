import { setBoss } from "../objetGlobalchange/controleurBoss.js";
import { emptyShoot } from "../objetGlobalchange/controleurShoot.js";
import {
  addListDraw,
  removeAllDraw,
} from "../objetGlobalchange/controleurListDraw.js";
import setPositionDefaultPlayer from "../objetGlobalchange/setPositionDefaultPlayer.js";
import setPositiondefaultBall from "../objetGlobalchange/setPositiondefaultPlayerBall.js";
import drawAll from "./../../view/drawAll.js";
const controlerBoss1 = (objectGlobal) => {
  // restart de la game position pret a tirer
  setPositionDefaultPlayer(objectGlobal);
  setPositiondefaultBall(objectGlobal);
  // update objetGlobal
  setBoss(objectGlobal, 1);
  emptyShoot(objectGlobal);
  // regles nouveau draw
  removeAllDraw(objectGlobal);
  addListDraw(objectGlobal, "boss1");
  drawAll(objectGlobal);
};
export default controlerBoss1;
