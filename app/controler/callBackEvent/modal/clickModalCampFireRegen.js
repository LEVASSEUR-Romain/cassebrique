import setLastClickLvl from "../../objetGlobalchange/setLastClickLvl.js";
import deleteComposantCampFire from "../../../view/map/modal/deleteComposantCampFire.js";

const clickModalCampFireRegen = (objectGlobal) => {
  const { Player, Commons } = objectGlobal;
  if (Player.life === Commons.PlayerDefault.life) {
    alert("vous avez deja le maximum de point de vie");
  } else {
    Player.life = Commons.PlayerDefault.life;
    //end chose
    setLastClickLvl(objectGlobal, false);
    deleteComposantCampFire();
  }
};
export default clickModalCampFireRegen;
