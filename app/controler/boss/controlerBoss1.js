import initDrawObjetGlobalForBoss from "./tools/initDrawObjetGlobalForBoss.js";
import { emptyShoot } from "../objetGlobalchange/controleurShoot.js";

const controlerBoss1 = (objectGlobal) => {
  // BOSS SHOOTER
  // only for this boss
  emptyShoot(objectGlobal);
  //init
  initDrawObjetGlobalForBoss(objectGlobal, 1);
};
export default controlerBoss1;
