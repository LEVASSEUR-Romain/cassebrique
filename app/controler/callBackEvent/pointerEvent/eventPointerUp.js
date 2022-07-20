import removeEventPointerMove from "./tools/removeEventPointerMove.js";
import deletePositionStart from "./tools/deletePositionStart.js";
import drawCurseurUp from "../../../view/zoneplay/drawCurseurUp.js";
import goControleGame from "../goControleGame.js";
const eventPointerUp = (e, objectGlobal) => {
  // start looping not go
  if (!objectGlobal.start) {
    const heightCanvasPlay = canvasPlay.height;
    const midleMoveUp = heightCanvasPlay / 3;
    const deltaY = Math.abs(objectGlobal.positionInitY - e.clientY);
    // start looping not go
    if (deltaY >= midleMoveUp) {
      goControleGame(objectGlobal);
    } else {
      //remove event move
      removeEventPointerMove(objectGlobal);
      //delete la position start
      deletePositionStart(objectGlobal);
      //view go tuto
      drawCurseurUp();
    }
  }
};
export default eventPointerUp;
