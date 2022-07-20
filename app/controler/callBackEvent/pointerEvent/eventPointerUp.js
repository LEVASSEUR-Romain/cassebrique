import removeEventPointerMove from "./tools/removeEventPointerMove.js";
import deletePositionStart from "./tools/deletePositionStart.js";
import goControleGame from "../goControleGame.js";
const eventPointerUp = (e, objectGlobal) => {
  //remove event move
  removeEventPointerMove(objectGlobal);
  // start looping not go
  if (!objectGlobal.start) {
    const heightCanvasPlay = canvasPlay.height;
    const midleMoveUp = heightCanvasPlay / 3;
    const deltaY = Math.abs(objectGlobal.positionInitY - e.clientY);
    // start looping not go
    if (deltaY >= midleMoveUp) {
      goControleGame(objectGlobal);
    }
  }
  //delete la position start
  deletePositionStart(objectGlobal);
};
export default eventPointerUp;
