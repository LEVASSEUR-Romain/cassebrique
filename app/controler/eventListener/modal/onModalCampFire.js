import clickModalCampFireBonus from "../../callBackEvent/modal/clickModalCampFireBonus.js";
import clickModalCampFireRegen from "../../callBackEvent/modal/clickModalCampFireRegen.js";
const onModalCampFire = (objectGlobal) => {
  const heal = document.querySelector("#regen");
  const bonus = document.querySelector("#bonus");
  heal.addEventListener("click", () => {
    clickModalCampFireRegen(objectGlobal);
  });
  bonus.addEventListener("click", () => {
    clickModalCampFireBonus(objectGlobal);
  });
};
export default onModalCampFire;
