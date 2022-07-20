import addEventPointerMove from "./tools/addEventPointerMove.js";
const eventPointerDown = (e, objectGlobal) => {
  // add Event move
  addEventPointerMove(objectGlobal);
  //add start in global
  objectGlobal.postionInitX = e.clientX;
  objectGlobal.positionInitY = e.clientY;
};
export default eventPointerDown;
