//default
import borderBall from "../collision/borderBall.js";
import bricksBall from "../collision/bricksBall.js";
import playerBall from "../collision/playerBall.js";
export const listCollisionDefault = [borderBall, bricksBall, playerBall];
// boss 1
import bossBall from "../collision/bossBall.js";
import shootPlayer from "../collision/shootPlayer.js";
export const listCollisionBoss1 = [
  borderBall,
  playerBall,
  bossBall,
  shootPlayer,
];
//boss 2
import bossAllBall from "../collision/allCollision/bossAllBall.js";
import boderAllBallAndDelete from "../collision/allCollision/boderAllBallAndDelete.js";
import playerAllBall from "../collision/allCollision/playerAllBall.js";
export const listCollisionBoss2 = [
  boderAllBallAndDelete,
  playerAllBall,
  bossAllBall,
];
//boss 3
import bombPlayer from "../collision/bombPlayer.js";
import bossBallType2 from "../collision/bossBallType2.js";
export const listCollisionBoss3 = [
  borderBall,
  playerBall,
  bossBallType2,
  bombPlayer,
];
