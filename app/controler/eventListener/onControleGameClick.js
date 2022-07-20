import eventPointerDown from "../callBackEvent/pointerEvent/eventPointerDown.js";
import eventPointerUp from "../callBackEvent/pointerEvent/eventPointerUp.js";
const onControleGameClick = (objectGlobal) => {
  //pointer up
  objectGlobal.listEvent.push(function gamePointerUp(e) {
    eventPointerUp(e, objectGlobal);
  });
  // pointer down
  objectGlobal.listEvent.push(function gamePointerDown(e) {
    eventPointerDown(e, objectGlobal);
  });
  // ecouteur
  objectGlobal.canvasPlay.addEventListener(
    "pointerdown",
    objectGlobal.listEvent[objectGlobal.listEvent.length - 1]
  );
  objectGlobal.canvasPlay.addEventListener(
    "pointerup",
    objectGlobal.listEvent[objectGlobal.listEvent.length - 2]
  );
};
export default onControleGameClick;
