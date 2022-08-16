import component from "../../tools/component.js";
import updateComposantLifeBoss from "./updateComposantLifeBoss.js";
const composantLifeBoss = (objectGlobal) => {
  const life = objectGlobal.Boss.life;
  const borderMenu = objectGlobal.Commons.borderMenu;
  const heightMenu = 3;
  const divLife = component(
    "div",
    { id: "bossLife", style: "top:" + (borderMenu - heightMenu) + "%" },
    document.body
  );

  //(objectGlobal.Commons.borderMenu * window.innerHeight) / 100;
  component("div", { id: "bossLifeText" }, divLife);
  updateComposantLifeBoss(life);
};
export default composantLifeBoss;
