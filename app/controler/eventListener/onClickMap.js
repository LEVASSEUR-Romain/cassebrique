import clickMap from "../callBackEvent/clickMap.js";
const onClickMap = (objectGlobal) => {
  objectGlobal.canvasMap.addEventListener("click", (e) => {
    clickMap(e, objectGlobal);
  });
};
export default onClickMap;
