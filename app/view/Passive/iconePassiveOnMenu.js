import commonsPassive from "../../model/commons/commonsPassive.js";
import getHtmlCollectionImg from "../../controler/objetGlobalchange/getHtmlCollectionImg.js";
const iconePassiveOnMenu = (objectGlobal) => {
  const { Player } = objectGlobal;
  const passiveMenu = document.querySelector(".passiveMenu");
  // remove Child
  for (let i = 0; i < passiveMenu.children.length; i++) {
    passiveMenu.removeChild(passiveMenu.children[i]);
  }
  Player.passiveBonus.forEach((passive) => {
    const pB = commonsPassive[passive];
    const img = getHtmlCollectionImg(objectGlobal, pB.image);
    img.alt = "bonus " + pB.name;
    img.setAttribute("data-id", passive);
    passiveMenu.appendChild(img);
  });
};
export default iconePassiveOnMenu;
