import eventPointerDown from "../callBackEvent/pointerEvent/eventPointerDown.js";
import eventPointerUp from "../callBackEvent/pointerEvent/eventPointerUp.js";
import eventKeySpace from "../callBackEvent/pointerEvent/eventKeySpace.js";
const onControleGameClick = (objectGlobal) => {
  /*   // key space
  objectGlobal.listEvent.push(function gameKeyUp(e) {
    eventKeySpace(e, objectGlobal);
  });
  //pointer up
  objectGlobal.listEvent.push(function gamePointerUp(e) {
    eventPointerUp(e, objectGlobal);
  });
  // pointer down
  objectGlobal.listEvent.push(function gamePointerDown(e) {
    eventPointerDown(e, objectGlobal);
  }); */
  // ecouteur
  /*   objectGlobal.canvasPlay.addEventListener(
    "pointerdown",
    objectGlobal.listEvent[objectGlobal.listEvent.length - 1]
  );
  objectGlobal.canvasPlay.addEventListener(
    "pointerup",
    objectGlobal.listEvent[objectGlobal.listEvent.length - 2]
  );
  document.addEventListener(
    "keyup",
    objectGlobal.listEvent[objectGlobal.listEvent.length - 3]
  ); */
  // ecouteur
  objectGlobal.canvasPlay.addEventListener("mousedown", (e) => {
    eventPointerDown(e, objectGlobal);
  });

  objectGlobal.canvasPlay.addEventListener("mouseup", (e) => {
    eventPointerUp(e, objectGlobal);
  });

  //tel
  objectGlobal.canvasPlay.addEventListener("touchstart", (e) => {
    eventPointerDown(e, objectGlobal);
  });

  objectGlobal.canvasPlay.addEventListener("touchend", (e) => {
    eventPointerUp(e, objectGlobal);
  });
  // press espace
  document.addEventListener("keyup", (e) => {
    eventKeySpace(e, objectGlobal);
  });
};
export default onControleGameClick;
