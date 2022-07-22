import setStart from "../objetGlobalchange/setStart.js";
import sendLoopingGaming from "./sendLoopingGaming.js";
import setLoseBall from "../objetGlobalchange/setLoseBall.js";

const goControleGame = (objectGlobal) => {
  // go start and up life actualy
  setStart(objectGlobal, true);
  setLoseBall(objectGlobal, false);
  // default
  sendLoopingGaming(objectGlobal);
};
export default goControleGame;
