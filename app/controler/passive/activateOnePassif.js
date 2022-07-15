import intRandomOnListUnique from "../../tools/intRandomOnListUnique.js";
import PassiveBonus from "../../model/Passive/PassiveBonus.js";
import composantPassive from "../../view/Passive/composantPassive.js";
import deleteComposantPassive from "../../view/Passive/deleteComposantPassive.js";
import iconePassiveOnMenu from "../../view/Passive/iconePassiveOnMenu.js";
import clickOnPassifMenu from "./clickOnPassifMenu.js";

const activateOnePassif = (Player, Commons, Ball) => {
  const startTbl = 0;
  const tblRandom = intRandomOnListUnique(
    startTbl,
    PassiveBonus.length,
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
      PassiveBonus[idOnPassiveBonus].effect(Player, Ball, Commons);
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
    }
  };

  //event listener
  const allBonusDiv = document.querySelectorAll(".modulePassive");
  allBonusDiv.forEach((elt) => {
    elt.addEventListener("click", clickPassive);
  });
};
export default activateOnePassif;