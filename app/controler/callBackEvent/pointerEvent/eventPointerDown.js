import addEventPointerMove from "./tools/addEventPointerMove.js";
const eventPointerDown = (e, objectGlobal) => {
  // add Event move
  addEventPointerMove(objectGlobal);
  //add start in global
  if (e.type === "mousedown") {
    objectGlobal.postionInitX = e.clientX;
    objectGlobal.positionInitY = e.clientY;
  } else {
    objectGlobal.postionInitX = e.touches[0].clientX;
    objectGlobal.positionInitY = e.touches[0].clientY;
  }
};
export default eventPointerDown;
