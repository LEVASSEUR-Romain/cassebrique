import borderBall from "../collision/borderBall.js";
import bricksBall from "../collision/bricksBall.js";
import playerBall from "../collision/playerBall.js";
import bossBall from "../collision/bossBall.js";
import shootBall from "../collision/shootBall.js";

export const listCollisionDefault = [borderBall, bricksBall, playerBall];
export const listCollisionBoss1 = [borderBall, playerBall, bossBall, shootBall];
