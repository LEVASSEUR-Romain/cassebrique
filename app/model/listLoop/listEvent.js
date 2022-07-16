//loopGamingModel
import moveBall from "../loopGamingModel/moveBall.js";
import restartLoseLife from "../loopGamingModel/restartLoseLife.js";
import defaultWin from "../loopGamingModel/defaultWin.js";
import loseLvl from "../loopGamingModel/loseLvl.js";
import boss1 from "../loopGamingModel/boss/boss1.js";
import moveshoot from "../loopGamingModel/boss/moveshoot.js";
import winBoss from "../loopGamingModel/boss/winBoss.js";
import restartLoseLifeBoss from "../loopGamingModel/boss/restartLoseLifeBoss.js";
export const listEventDefault = [
  moveBall,
  restartLoseLife,
  defaultWin,
  loseLvl,
];

export const listeEventBoss1 = [
  moveBall,
  moveshoot,
  boss1,
  loseLvl,
  winBoss,
  restartLoseLifeBoss,
];
