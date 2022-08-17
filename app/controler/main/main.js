import initEventListenerDefault from "../eventListener/initEventListenerDefault.js";
// view
import drawAllRezise from "../../view/drawAllRezise.js";

const main = (objectGlobal) => {
  initEventListenerDefault(objectGlobal);
  drawAllRezise(objectGlobal);
};

export default main;
