import commonsPassive from "../../model/commons/commonsPassive.js";
const iconePassiveOnMenu = (Player) => {
  const passiveMenu = document.querySelector(".passiveMenu");
  // remove Child
  for (let i = 0; i < passiveMenu.children.length; i++) {
    passiveMenu.removeChild(passiveMenu.children[i]);
  }

  //passiveMenu.removeChild();
  Player.passiveBonus.forEach((passive) => {
    const pB = commonsPassive[passive];
    // image
    const img = document.createElement("img");
    img.setAttribute("src", pB.image);
    img.setAttribute("alt", "bonus " + pB.name);
    img.setAttribute("title", pB.description);
    img.setAttribute("data-id", passive);
    passiveMenu.appendChild(img);
  });
};
export default iconePassiveOnMenu;
