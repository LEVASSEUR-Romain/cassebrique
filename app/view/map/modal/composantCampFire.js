import getHtmlCollectionImg from "../../../controler/objetGlobalchange/getHtmlCollectionImg.js";
import component from "../../tools/component.js";
const composantCampFire = (objectGlobal) => {
  const { Commons } = objectGlobal;
  const height = "height:" + (100 - Commons.borderMenu) + "%";
  const newDiv = component(
    "div",
    { id: "campFire", style: height },
    document.body
  );
  //                    modal regen
  const regenDiv = component("div", { id: "regen" }, newDiv);
  component("header", {}, regenDiv, "Cliquer pour recuperer votre récompense");
  // img
  const img = getHtmlCollectionImg(objectGlobal, "campfiresleep");
  img.setAttribute("alt", "recuperer la vie");
  regenDiv.appendChild(img);
  component("p", {}, regenDiv, "Vous recuperez tous vos points de vie");

  //                         Modal bonus
  const BonusDiv = component("div", { id: "bonus" }, newDiv);
  component("header", {}, BonusDiv, "Cliquer pour recuperer votre récompense");
  // img
  const imgBonus = getHtmlCollectionImg(objectGlobal, "open-chest");
  imgBonus.setAttribute("alt", "recuperer un bonus");
  BonusDiv.appendChild(imgBonus);
  //paragraph
  component("p", {}, BonusDiv, "Vous recuperez un bonus");
};
export default composantCampFire;
