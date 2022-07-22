import initDrawObjetGlobalForBoss from "./tools/initDrawObjetGlobalForBoss.js";
import { emptyBomb } from "../objetGlobalchange/controleurBomb.js";
const controlerBoss3 = (objectGlobal) => {
  // Boss des boules
  emptyBomb(objectGlobal);
  //init
  initDrawObjetGlobalForBoss(objectGlobal, 3);
};
export default controlerBoss3;
