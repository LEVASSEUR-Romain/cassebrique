//loopGamingModel
import moveBall from "../loopGamingModel/moveBall.js";
import restartLoseLife from "../loopGamingModel/restartLoseLife.js";
import defaultWin from "../loopGamingModel/defaultWin.js";
import loseLvl from "../loopGamingModel/loseLvl.js";

export const listEventDefault = [
  moveBall,
  restartLoseLife,
  defaultWin,
  loseLvl,
];
//tools boss
import winBoss from "../loopGamingModel/boss/winBoss.js";
//boss1
import boss1 from "../loopGamingModel/boss/boss1/boss1.js";
import moveshoot from "../loopGamingModel/boss/boss1/moveshoot.js";
import restartBoss1 from "./../loopGamingModel/boss/boss1/restartBoss1.js";
export const listeEventBoss1 = [
  moveBall,
  moveshoot,
  boss1,
  loseLvl,
  winBoss,
  restartBoss1,
];
// boss 2
import boss2 from "../loopGamingModel/boss/boss2/boss2.js";
import moveAllBall from "../loopGamingModel/boss/boss2/moveAllBall.js";
import restartBoss2 from "../loopGamingModel/boss/boss2/restartBoss2.js";
export const listeEventBoss2 = [
  moveAllBall,
  boss2,
  loseLvl,
  winBoss,
  restartBoss2,
];

//boss 3
import boss3 from "../loopGamingModel/boss/boss3/boss3.js";
import restartBoss3 from "../loopGamingModel/boss/boss3/restartBoss3.js";
export const listeEventBoss3 = [
  moveBall,
  boss3,
  loseLvl,
  winBoss,
  restartBoss3,
];
