import commonsPassive from "../../model/commons/commonsPassive.js";
import component from "../tools/component.js";
const composantPassive = (listRandom, Commons) => {
  const height = "height:" + (90 - Commons.borderMenu) + "%";
  const newDiv = component(
    "div",
    { id: "passive", style: height },
    document.body
  );
  //ajouter les noeuds
  listRandom.forEach((element) => {
    const pB = commonsPassive[element];

    const addDiv = component(
      "div",
      { class: "modulePassive", "data-id": element },
      newDiv
    );
    const header = component(
      "header",
      { class: "modulePassive", "data-id": element },
      addDiv,
      "Clicker pour choisir ce passif"
    );
    const img = component(
      "img",
      { src: pB.image, alt: "bonus " + pB.name },
      addDiv
    );
    const name = component("h2", {}, addDiv, pB.name);
    const describe = component("p", {}, addDiv, pB.description);
  });
};
export default composantPassive;
