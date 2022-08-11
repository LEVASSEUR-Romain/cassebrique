import component from "../../tools/component.js";

const composantInterrogation = (objectGlobal) => {
  const newDiv = component("div", { id: "helper" }, document.body);
  component("header", {}, newDiv, "Legend");
  const ul = component("ul", {}, newDiv);
  // Boss
  const liBoss = component("li", {}, ul);
  const canvasBoss = component("canvas", {}, liBoss);
  component("p", {}, liBoss, "un combat de boss");
  // mob
  const liMob = component("li", {}, ul);
  const canvasMob = component("canvas", {}, liMob);
  component("p", {}, liMob, "niveau casse brique");
  //campfire
  const liCamp = component("li", {}, ul);
  const canvasCamp = component("canvas", {}, liCamp);
  component("p", {}, liCamp, "niveau bonus pas de combat");
  // dessin dans canvas
};
export default composantInterrogation;
