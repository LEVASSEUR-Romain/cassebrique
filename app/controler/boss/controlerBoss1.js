import { setBoss } from "../objetGlobalchange/controleurBoss.js";
import { emptyShoot } from "../objetGlobalchange/controleurShoot.js";
import {
  addListDraw,
  removeAllDraw,
} from "../objetGlobalchange/controleurListDraw.js";
import setPositionDefaultPlayer from "../objetGlobalchange/setPositionDefaultPlayer.js";
import setPositiondefaultBall from "../objetGlobalchange/setPositiondefaultPlayerBall.js";
import loopGaming from "./../loopGaming.js";
import drawAll from "./../../view/drawAll.js";
const controlerBoss1 = (objectGlobal) => {
  // restart de la game position pret a tirer
  setPositionDefaultPlayer(objectGlobal);
  setPositiondefaultBall(objectGlobal);
  // add boss ton objetGlobal
  setBoss(objectGlobal, 1);
  // push tableau vide pour le boss
  emptyShoot(objectGlobal);
  // regles nouveau draw
  removeAllDraw(objectGlobal);
  addListDraw(objectGlobal, "boss1");
  drawAll(objectGlobal);
  // on relance la boucle de jeu
  //loopGaming(objectGlobal, listeEventBoss1, listCollisionBoss1);
};
export default controlerBoss1;
