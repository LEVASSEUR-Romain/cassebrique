import setLastClickLvl from "../../objetGlobalchange/setLastClickLvl.js";
import deleteComposantCampFire from "../../../view/map/modal/deleteComposantCampFire.js";
import activateOnePassifAndSave from "../../passive/activateOnePassifAndSave.js";
const clickModalCampFireBonus = (objectGlobal) => {
  activateOnePassifAndSave(objectGlobal);
  //end chose
  setLastClickLvl(objectGlobal, false);
  deleteComposantCampFire();
};
export default clickModalCampFireBonus;
