import component from "../tools/component.js";

const componantWinFinal = () => {
  const addDiv = component("div", { id: "win" }, document.body);

  const header = component("header", {}, addDiv, "Vous avez gagner");
  const logo = component("h2", {}, addDiv, "😁");
  const describe = component(
    "p",
    {},
    addDiv,
    "Pour recommencer rafraichir la page (F5)"
  );
};
export default componantWinFinal;
