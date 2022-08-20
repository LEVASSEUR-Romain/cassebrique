import deleteComposantCampFire from "../../../view/map/modal/deleteComposantCampFire.js";
import finishItemMap from "../../map/finishItemMap.js";
import drawAllMap from "../../../view/drawAllMap.js";
import { playerFullLife } from "../../objetGlobalchange/controleurPlayer.js";
const clickModalCampFireRegen = (objectGlobal) => {
  const { Player, Commons } = objectGlobal;
  if (Player.life === Commons.PlayerDefault.life) {
    alert("vous avez deja le maximum de point de vie");
  } else {
    playerFullLife(objectGlobal);
    //end chose
    finishItemMap(objectGlobal);
    drawAllMap(objectGlobal);
    deleteComposantCampFire();
  }
};
export default clickModalCampFireRegen;
