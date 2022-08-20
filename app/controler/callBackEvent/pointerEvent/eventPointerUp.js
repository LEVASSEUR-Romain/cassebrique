//import removeEventPointerMove from "./tools/removeEventPointerMove.js";
import deletePositionStart from "./tools/deletePositionStart.js";
import drawCurseurUp from "../../../view/zoneplay/drawCurseurUp.js";
import goControleGame from "../goControleGame.js";
const eventPointerUp = (e, objectGlobal) => {
  // start looping not go
  if (!objectGlobal.start) {
    let eventY;
    if (e.type === "mouseup") {
      eventY = e.clientY;
    } else {
      eventY = e.changedTouches[0].clientY;
    }
    const heightCanvasPlay = canvasPlay.height;
    const midleMoveUp = heightCanvasPlay / 4;
    const deltaY = Math.abs(objectGlobal.positionInitY - eventY);
    // start looping not go
    if (deltaY >= midleMoveUp) {
      goControleGame(objectGlobal);
    } else {
      //removeEventPointerMove(objectGlobal);
      deletePositionStart(objectGlobal);
      //view go tuto
      drawCurseurUp(objectGlobal);
    }
  }
};
export default eventPointerUp;
