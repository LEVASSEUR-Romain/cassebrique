import getHtmlCollectionImg from "../../../controler/objetGlobalchange/getHtmlCollectionImg.js";

const composantCampFire = (objectGlobal) => {
  const { Commons } = objectGlobal;
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "campFire");
  const height = "height:" + (100 - Commons.borderMenu) + "%";
  newDiv.setAttribute("style", height);
  //                    modal regen
  const regenDiv = document.createElement("div");
  regenDiv.setAttribute("id", "regen");
  // header
  const headerRegen = document.createElement("header");
  const headerContent = document.createTextNode(
    "Cliquer pour recuperer votre récompense"
  );
  headerRegen.append(headerContent);
  regenDiv.append(headerRegen);
  // img
  const img = getHtmlCollectionImg(objectGlobal, "campfiresleep");
  img.setAttribute("alt", "recuperer la vie");
  regenDiv.appendChild(img);
  //paragraph
  const pRegen = document.createElement("header");
  const pContent = document.createTextNode(
    "Vous recuperez tous vos points de vie"
  );
  pRegen.append(pContent);
  regenDiv.append(pRegen);
  //add regen to newDiv
  newDiv.append(regenDiv);

  //                         Modal bonus
  const BonusDiv = document.createElement("div");
  BonusDiv.setAttribute("id", "bonus");
  // header
  const headerBonus = document.createElement("header");
  const headerBonusContent = document.createTextNode(
    "Cliquer pour recuperer votre récompense"
  );
  headerBonus.append(headerBonusContent);
  BonusDiv.append(headerBonus);
  // img
  const imgBonus = getHtmlCollectionImg(objectGlobal, "open-chest");
  imgBonus.setAttribute("alt", "recuperer un bonus");
  BonusDiv.appendChild(imgBonus);
  //paragraph
  const pBonus = document.createElement("header");
  const pBonusContent = document.createTextNode("Vous recuperez un bonus");
  pBonus.append(pBonusContent);
  BonusDiv.append(pBonus);
  //add Bonus to newDiv
  newDiv.append(BonusDiv);
  //add to body
  document.body.append(newDiv);
};
export default composantCampFire;
