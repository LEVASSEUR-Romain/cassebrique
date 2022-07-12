import PassiveBonus from "../../model/Passive/PassiveBonus.js";
const iconePassiveOnMenu = (Player) => {
  const passiveMenu = document.querySelector(".passiveMenu");
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
};
export default iconePassiveOnMenu;
