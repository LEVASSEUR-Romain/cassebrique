import initEventListenerDefault from "../eventListener/initEventListenerDefault.js";
// view
import drawAllRezise from "../../view/drawAllRezise.js";
const main = (objectGlobal) => {
  // ecouteur event default
  initEventListenerDefault(objectGlobal);
  // gestion affichage
  drawAllRezise(objectGlobal);
};

export default main;
