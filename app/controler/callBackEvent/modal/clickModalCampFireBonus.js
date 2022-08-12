import setLastClickLvl from "../../objetGlobalchange/setLastClickLvl.js";
import deleteComposantCampFire from "../../../view/map/modal/deleteComposantCampFire.js";
import activateOnePassifAndSave from "../../passive/activateOnePassifAndSave.js";
import finishItemMap from "../../map/finishItemMap.js";
import drawAllMap from "./../../../view/drawAllMap.js";
const clickModalCampFireBonus = (objectGlobal) => {
  activateOnePassifAndSave(objectGlobal);
  //end chose
  setLastClickLvl(objectGlobal, false);
  finishItemMap(objectGlobal);
  drawAllMap(objectGlobal);
  deleteComposantCampFire();
};
export default clickModalCampFireBonus;
