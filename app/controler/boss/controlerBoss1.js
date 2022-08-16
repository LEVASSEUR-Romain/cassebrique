import initDrawObjetGlobalForBoss from "./tools/initDrawObjetGlobalForBoss.js";
import { emptyShoot } from "../objetGlobalchange/controleurShoot.js";
import composantLifeBoss from "../../view/boss/modal/composantLifeBoss.js";
const controlerBoss1 = (objectGlobal) => {
  // BOSS SHOOTER
  // only for this boss
  emptyShoot(objectGlobal);
  //init
  initDrawObjetGlobalForBoss(objectGlobal, 1);
  composantLifeBoss(objectGlobal);
};
export default controlerBoss1;
