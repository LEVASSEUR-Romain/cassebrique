//loopGamingModel
import moveBall from "../loopGamingModel/moveBall.js";
import restartLoseLife from "../loopGamingModel/restartLoseLife.js";
import defaultWin from "../loopGamingModel/defaultWin.js";
import loseLvl from "../loopGamingModel/loseLvl.js";

//tools boss
import winBoss from "../loopGamingModel/boss/winBoss.js";
import restartLoseLifeBoss from "../loopGamingModel/boss/restartLoseLifeBoss.js";
export const listEventDefault = [
  moveBall,
  restartLoseLife,
  defaultWin,
  loseLvl,
];
//boss1
import boss1 from "../loopGamingModel/boss/boss1/boss1.js";
import moveshoot from "../loopGamingModel/boss/boss1/moveshoot.js";
export const listeEventBoss1 = [
  moveBall,
  moveshoot,
  boss1,
  loseLvl,
  winBoss,
  restartLoseLifeBoss,
];
// boss 2
import boss2 from "../loopGamingModel/boss/boss2/boss2.js";
import restartLoopExceptBossDied from "../loopGamingModel/boss/boss2/restartLoopExceptBossDied.js";
import moveAllBall from "../loopGamingModel/boss/boss2/moveAllBall.js";
export const listeEventBoss2 = [
  moveAllBall,
  boss2,
  loseLvl,
  winBoss,
  restartLoopExceptBossDied,
];
