import deleteComposantCampFire from "../../../view/map/modal/deleteComposantCampFire.js";
import activateOnePassifAndSave from "../../passive/activateOnePassifAndSave.js";
import finishItemMap from "../../map/finishItemMap.js";
import drawAllMap from "./../../../view/drawAllMap.js";
const clickModalCampFireBonus = (objectGlobal) => {
  activateOnePassifAndSave(objectGlobal);
  //end chose
  finishItemMap(objectGlobal);
  drawAllMap(objectGlobal);
  deleteComposantCampFire();
};
export default clickModalCampFireBonus;
