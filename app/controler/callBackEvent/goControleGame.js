import setStart from "../objetGlobalchange/setStart.js";
import sendLoopingGaming from "./sendLoopingGaming.js";
import setLifePlayer from "./../objetGlobalchange/setLifePlayer.js";

const goControleGame = (objectGlobal) => {
  // go start and up life actualy
  setStart(objectGlobal, true);
  setLifePlayer(objectGlobal);
  // default
  sendLoopingGaming(objectGlobal);
};
export default goControleGame;
