import commonsPassive from "../../model/commons/commonsPassive.js";
import component from "../tools/component.js";
const modalPassive = (id) => {
  const pB = commonsPassive[id];
  const modal = component("div", { id: "modalPassive" }, document.body);
  const header = component(
    "header",
    {},
    modal,
    "Description , click pour fermer"
  );
  const img = component(
    "img",
    { src: pB.image, alt: "bonus " + pB.name },
    modal
  );
  const name = component("h2", {}, modal, pB.name);
  const describe = component("p", {}, modal, pB.description);
};
export default modalPassive;
