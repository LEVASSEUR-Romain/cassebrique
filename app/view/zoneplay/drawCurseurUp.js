import component from "../tools/component.js";
const drawCurseurUp = () => {
  let element = document.querySelector(".finger");
  if (element === null) {
    const newDiv = component("div", { class: "finger" }, document.body, "👆");
    element = newDiv;
    element.addEventListener("animationend", () => {
      element.remove();
    });
  }
};
export default drawCurseurUp;
