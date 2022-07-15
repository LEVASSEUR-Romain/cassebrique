import { setBoss } from "../objetGlobalchange/controleurBoss.js";
import { addListDraw } from "../objetGlobalchange/controleurListDraw.js";
import { listCollisionBoss1 } from "../../model/listLoop/listCollision.js";
import { listeEventBoss1 } from "../../model/listLoop/listEvent.js";
import setPositionDefaultPlayer from "../objetGlobalchange/setPositionDefaultPlayer.js";
import setPositiondefaultBall from "../objetGlobalchange/setPositiondefaultPlayerBall.js";
import loopGaming from "./../loopGaming";
const controlerBoss1 = (objectGlobal) => {
  // restart de la game position pret a tirer
  setPositionDefaultPlayer(objectGlobal);
  setPositiondefaultBall(objectGlobal);
  // add boss ton objetGlobal
  setBoss(objectGlobal);
  // regles nouveau draw
  addListDraw(objectGlobal, "boss1");
  // on relance la boucle de jeu
  loopGaming(objectGlobal, listeEventBoss1, listCollisionBoss1);
};
export default controlerBoss1;
