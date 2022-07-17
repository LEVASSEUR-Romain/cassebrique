import intRandomOnListUnique from "../../tools/intRandomOnListUnique.js";
import commonsPassive from "../../model/commons/commonsPassive.js";
import composantPassive from "../../view/passive/composantPassive.js";
import deleteComposantPassive from "../../view/passive/deleteComposantPassive.js";
import iconePassiveOnMenu from "../../view/passive/iconePassiveOnMenu.js";
import clickOnPassifMenu from "./clickOnPassifMenu.js";
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
  composantPassive(tblRandom, Commons);
  // listen Click
  const clickPassive = (event) => {
    let target = "";
    if (event.target.className !== "modulePassive")
      target = event.target.parentElement;
    else target = event.target;
    const idOnPassiveBonus = parseInt(target.dataset.id);
    // warning idOnPassiveBonus can equal 0
    if (idOnPassiveBonus !== undefined) {
      commonsPassive[idOnPassiveBonus].effect(Player, Ball, Commons);
      // destruction ecouteur event
      const allBonusDiv = document.querySelectorAll(".modulePassive");
      allBonusDiv.forEach((elt) => {
        elt.removeEventListener("click", clickPassive);
      });
      // delete show
      deleteComposantPassive();
      // add To Player passive
      Player.passiveBonus.push(idOnPassiveBonus);
      // add on passive menu
      iconePassiveOnMenu(Player);
      //add lister on new icone Menu
      clickOnPassifMenu();
      //save LOCAL
      //addAllLocalStrorage(objectGlobal);
    }
  };

  //event listener
  const allBonusDiv = document.querySelectorAll(".modulePassive");
  allBonusDiv.forEach((elt) => {
    elt.addEventListener("click", clickPassive);
  });
};
export default activateOnePassifAndSave;
