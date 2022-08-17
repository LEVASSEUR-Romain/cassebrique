import component from "../tools/component.js";

const composantLose = () => {
  const addDiv = component("div", { id: "lose" }, document.body);

  const header = component("header", {}, addDiv, "Vous avez perdu");
  const logo = component("h2", {}, addDiv, "😒");
  const describe = component(
    "p",
    {},
    addDiv,
    "Pour recommencer rafraichir la page (F5)"
  );
};
export default composantLose;
