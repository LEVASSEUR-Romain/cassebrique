import component from "../tools/component.js";
import getHtmlCollectionImg from "../../controler/objetGlobalchange/getHtmlCollectionImg.js";
const drawCurseurUp = (objectGlobal) => {
  let element = document.querySelector(".finger");
  if (element === null) {
    const divHelper = component("div", {}, document.body);
    component("div", { class: "finger" }, divHelper, "👆");
    const space = component("div", { class: "spaceBar" }, divHelper, "ou");
    const imgSpaceBar = getHtmlCollectionImg(objectGlobal, "spaceBar");
    space.appendChild(imgSpaceBar);
    divHelper.addEventListener("animationend", () => {
      divHelper.remove();
    });
  }
};
export default drawCurseurUp;
