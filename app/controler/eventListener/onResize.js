import drawAllRezise from "../../view/drawAllRezise.js";
const onResize = (objectGlobal) => {
  window.addEventListener("resize", () => {
    drawAllRezise(objectGlobal);
  });
};
export default onResize;
