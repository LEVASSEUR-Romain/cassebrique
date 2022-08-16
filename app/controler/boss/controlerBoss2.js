import initDrawObjetGlobalForBoss from "./tools/initDrawObjetGlobalForBoss.js";
import { transformBallToArray } from "../objetGlobalchange/constroleurBall.js";
import composantLifeBoss from "../../view/boss/modal/composantLifeBoss.js";
const controlerBoss2 = (objectGlobal) => {
  // Boss des boules
  // only for this boss
  transformBallToArray(objectGlobal);
  //init
  initDrawObjetGlobalForBoss(objectGlobal, 2);
  composantLifeBoss(objectGlobal);
};
export default controlerBoss2;
