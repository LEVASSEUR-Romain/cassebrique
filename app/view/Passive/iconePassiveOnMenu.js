import commonsPassive from "../../model/commons/commonsPassive.js";
import component from "../tools/component.js";
const iconePassiveOnMenu = (Player) => {
  const passiveMenu = document.querySelector(".passiveMenu");
  // remove Child
  for (let i = 0; i < passiveMenu.children.length; i++) {
    passiveMenu.removeChild(passiveMenu.children[i]);
  }

  //passiveMenu.removeChild();
  Player.passiveBonus.forEach((passive) => {
    const pB = commonsPassive[passive];
    const img = component(
      "img",
      {
        src: pB.image,
        alt: "bonus " + pB.name,
        title: pB.description,
        "data-id": passive,
      },
      passiveMenu
    );
  });
};
export default iconePassiveOnMenu;
