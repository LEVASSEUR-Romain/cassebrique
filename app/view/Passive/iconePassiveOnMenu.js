import commonsPassive from "../../model/commons/commonsPassive.js";
import getHtmlCollectionImg from "../../controler/objetGlobalchange/getHtmlCollectionImg.js";
const iconePassiveOnMenu = (objectGlobal) => {
  const { Player } = objectGlobal;
  const passiveMenu = document.querySelector(".passiveMenu");
  // remove Child
  passiveMenu.innerHTML = "";
  Player.passiveBonus.forEach((passive) => {
    console.log(passive);
    const pB = commonsPassive[passive];
    const img = getHtmlCollectionImg(objectGlobal, pB.image);
    img.alt = "bonus " + pB.name;
    img.setAttribute("data-id", passive);
    passiveMenu.appendChild(img);
  });
};
export default iconePassiveOnMenu;
