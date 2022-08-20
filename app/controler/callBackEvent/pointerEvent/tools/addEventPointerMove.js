import eventPointerMove from "../eventPointerMove.js";
const addEventPointerMove = (objectGlobal) => {
  //pointer move
  /*   objectGlobal.listEvent.push(function gamePointerMove(e) {
    eventPointerMove(e, objectGlobal);
  });
  objectGlobal.canvasPlay.addEventListener(
    "pointermove",
    objectGlobal.listEvent[objectGlobal.listEvent.length - 1]
  ); */
  // pc
  objectGlobal.canvasPlay.addEventListener("mousemove", (e) => {
    eventPointerMove(e, objectGlobal);
  });
  //tel
  objectGlobal.canvasPlay.addEventListener("touchmove", (e) => {
    eventPointerMove(e, objectGlobal);
  });
};
export default addEventPointerMove;
