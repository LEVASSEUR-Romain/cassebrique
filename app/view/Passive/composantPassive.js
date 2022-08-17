import commonsPassive from "../../model/commons/commonsPassive.js";
import getHtmlCollectionImg from "../../controler/objetGlobalchange/getHtmlCollectionImg.js";
import component from "../tools/component.js";
const composantPassive = (listRandom, objectGlobal) => {
  const { Commons } = objectGlobal;
  const height = "height:" + (100 - Commons.borderMenu) + "%";
  const newDiv = component(
    "div",
    { id: "passive", style: height },
    document.body
  );
  //ajouter les noeuds
  listRandom.forEach((element) => {
    const pB = commonsPassive[element];

    const addDiv = component("div", { class: "modulePassive" }, newDiv);
    const img = getHtmlCollectionImg(objectGlobal, pB.image);
    img.alt = "bonus " + pB.name;
    addDiv.appendChild(img);
    component("h2", {}, addDiv, pB.name);
    component("p", {}, addDiv, pB.description);
    component(
      "button",
      { class: "btnChoosePassif", "data-id": element },
      addDiv,
      "Choisir"
    );
  });
};
export default composantPassive;
