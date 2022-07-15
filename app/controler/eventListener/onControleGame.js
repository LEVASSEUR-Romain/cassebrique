import sendLoopingGaming from "../sendLoopingGaming.js";
import moveByIsStarting from "../callBackEvent/moveByIsStarting.js";
import setPlayerLife from "../objetGlobalchange/setLifePlayer.js";
import setStart from "../objetGlobalchange/setStart.js";
import drawAll from "../../view/drawAll.js";

const onControleGame = (objectGlobal) => {
  window.addEventListener("keydown", (e) => {
    if (moveByIsStarting(e, objectGlobal)) {
      // go start and up life actualy
      setStart(objectGlobal, true);
      setPlayerLife(objectGlobal);
      // default
      sendLoopingGaming(objectGlobal);
    }
    // redraw
    drawAll(objectGlobal);
  });
};
export default onControleGame;
