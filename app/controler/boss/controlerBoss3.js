import initDrawObjetGlobalForBoss from "./tools/initDrawObjetGlobalForBoss.js";
import { addBomb } from "../objetGlobalchange/controleurBomb.js";
import composantLifeBoss from "../../view/boss/modal/composantLifeBoss.js";
const controlerBoss3 = (objectGlobal) => {
  // initBomb
  //emptyBomb(objectGlobal);
  //init
  initDrawObjetGlobalForBoss(objectGlobal, 3);
  //add bomb
  addBomb(objectGlobal);
  composantLifeBoss(objectGlobal);
};
export default controlerBoss3;
