import intRandomOnListUnique from "../../tools/intRandomOnListUnique.js";
import commonsPassive from "../../model/commons/commonsPassive.js";
import composantPassive from "../../view/passive/composantPassive.js";
import deleteComposantPassive from "../../view/passive/deleteComposantPassive.js";
import iconePassiveOnMenu from "../../view/passive/iconePassiveOnMenu.js";
import clickOnPassifMenu from "./clickOnPassifMenu.js";
import { pushPassiveBonus } from "../objetGlobalchange/controleurPlayer.js";
import addAllLocalStrorage from "../localStorage/addAllLocalStrorage.js";
const activateOnePassifAndSave = (objectGlobal) => {
  const { Commons, Player, Ball } = objectGlobal;
  const startTbl = 0;
  const tblRandom = intRandomOnListUnique(
    startTbl,
    commonsPassive.length,
    Commons.choiceOfPassive
  );
  //show
  composantPassive(tblRandom, objectGlobal);
  // listen Click
  const clickPassive = (event) => {
    const idOnPassiveBonus = parseInt(event.target.dataset.id);
    // warning idOnPassiveBonus can equal 0
    if (idOnPassiveBonus !== undefined) {
      commonsPassive[idOnPassiveBonus].effect(Player, Ball, Commons);
      const allBonusDiv = document.querySelectorAll(".modulePassive");
      allBonusDiv.forEach((elt) => {
        elt.removeEventListener("click", clickPassive);
      });
      deleteComposantPassive();
      pushPassiveBonus(objectGlobal, idOnPassiveBonus);
      iconePassiveOnMenu(objectGlobal);
      clickOnPassifMenu(objectGlobal);
      //save LOCAL
      //addAllLocalStrorage(objectGlobal);
    }
  };

  //event listener
  const allBonusDiv = document.querySelectorAll(".btnChoosePassif");
  allBonusDiv.forEach((elt) => {
    elt.addEventListener("click", clickPassive);
  });
};
export default activateOnePassifAndSave;
