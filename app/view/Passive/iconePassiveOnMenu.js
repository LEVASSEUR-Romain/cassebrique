import PassiveBonus from "../../model/Passive/PassiveBonus.js";
const iconePassiveOnMenu = (Player) => {
  console.log(Player.passiveBonus);
  const passiveMenu = document.querySelector(".passiveMenu");
  // remove Child
  for (let i = 0; i < passiveMenu.children.length; i++) {
    passiveMenu.removeChild(passiveMenu.children[i]);
  }

  //passiveMenu.removeChild();
  Player.passiveBonus.forEach((passive) => {
    const pB = PassiveBonus[passive];
    // image
    const img = document.createElement("img");
    img.setAttribute("src", pB.image);
    img.setAttribute("alt", "bonus " + pB.name);
    img.setAttribute("title", pB.description);
    img.setAttribute("data-id", passive);
    passiveMenu.appendChild(img);
  });
  console.log(passiveMenu);
};
export default iconePassiveOnMenu;
