import setPositionDefaultBall from "../../objetGlobalchange/setPositionDefaultBall.js";
import { setPositionDefaultPlayer } from "../../objetGlobalchange/controleurPlayer.js";
import { setBoss } from "../../objetGlobalchange/controleurBoss.js";
import { removeAllDraw } from "../../objetGlobalchange/controleurListDraw.js";
import { addListDraw } from "../../objetGlobalchange/controleurListDraw.js";
import drawAll from "../../../view/drawAll.js";

const initDrawObjetGlobalForBoss = (objectGlobal, numberOfBoss) => {
  // restart de la game position pret a tirer
  setPositionDefaultPlayer(objectGlobal);
  setPositionDefaultBall(objectGlobal);
  // update objetGlobal
  setBoss(objectGlobal, numberOfBoss);
  // regles nouveau draw
  removeAllDraw(objectGlobal);
  addListDraw(objectGlobal, "boss" + numberOfBoss);
  drawAll(objectGlobal);
};
export default initDrawObjetGlobalForBoss;
