import clickMap from "../callBackEvent/clickMap.js";
import drawAll from "../../view/drawAll.js";
const onClickMap = (objectGlobal) => {
  objectGlobal.canvasMap.addEventListener("click", (e) => {
    clickMap(e, objectGlobal);
    drawAll(objectGlobal);
  });
};
export default onClickMap;
