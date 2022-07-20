import moveByIsStarting from "../callBackEvent/moveByIsStarting.js";
import drawAll from "../../view/drawAll.js";
import goControleGame from "../callBackEvent/goControleGame.js";
const onControleGame = (objectGlobal) => {
  document.addEventListener("keydown", (e) => {
    if (moveByIsStarting(e, objectGlobal)) {
      goControleGame(objectGlobal);
    }
    // redraw
    drawAll(objectGlobal);
  });
};
export default onControleGame;
