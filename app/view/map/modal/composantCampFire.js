import getHtmlCollectionImg from "../../../controler/objetGlobalchange/getHtmlCollectionImg.js";
import component from "../../tools/component.js";
const composantCampFire = (objectGlobal) => {
  const { Commons, Player } = objectGlobal;
  const height = "height:" + (100 - Commons.borderMenu) + "%";
  const newDiv = component(
    "div",
    { id: "campFire", style: height },
    document.body
  );
  //                    modal regen
  const regenDiv = component("div", { id: "regen" }, newDiv);
  component("header", {}, regenDiv, "Cliquer pour récupérer votre récompense");
  // img
  const img = getHtmlCollectionImg(objectGlobal, "campfiresleep");
  img.setAttribute("alt", "récupérez la vie");
  regenDiv.appendChild(img);
  component("p", {}, regenDiv, "Vous récupérez tous vos points de vie");
  component(
    "p",
    {},
    regenDiv,
    "Vous avez " +
      Player.life +
      " " +
      " / " +
      Commons.PlayerDefault.life +
      " vie"
  );

  //                         Modal bonus
  const BonusDiv = component("div", { id: "bonus" }, newDiv);
  component("header", {}, BonusDiv, "Cliquer pour récupérer votre récompense");
  // img
  const imgBonus = getHtmlCollectionImg(objectGlobal, "chest");
  imgBonus.setAttribute("alt", "récupérer un bonus");
  BonusDiv.appendChild(imgBonus);
  //paragraph
  component("p", {}, BonusDiv, "Vous récupérez un bonus");
};
export default composantCampFire;
