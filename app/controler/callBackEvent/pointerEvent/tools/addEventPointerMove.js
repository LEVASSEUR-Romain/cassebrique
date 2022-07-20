import eventPointerMove from "../eventPointerMove.js";
const addEventPointerMove = (objectGlobal) => {
  //pointer move
  objectGlobal.listEvent.push(function gamePointerMove(e) {
    eventPointerMove(e, objectGlobal);
  });
  objectGlobal.canvasPlay.addEventListener(
    "pointermove",
    objectGlobal.listEvent[objectGlobal.listEvent.length - 1]
  );
};
export default addEventPointerMove;
