import clickMapCheck from "../callBackEvent/clickMapCheck.js";
const onClickMap = (objectGlobal) => {
  objectGlobal.canvasMap.addEventListener("click", (e) => {
    clickMapCheck(e, objectGlobal);
  });
};
export default onClickMap;
