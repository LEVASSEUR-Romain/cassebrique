import component from "./app/view/tools/component.js";
const divLoad = component("div", { class: "load" }, document.body);
component("div", { class: "loader" }, divLoad);
/* component("div", {}, divLoad, "Chargement"); */
window.addEventListener("load", () => {
  divLoad.remove();
});
