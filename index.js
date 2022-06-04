import Commons from "./app/commons.js";
// view
import backgroundCanvas from "./app/view/backgroundCanvas.js";
import drawPlayer from "./app/view/drawPlayer.js";
import drawBall from "./app/view/drawBall.js";
import drawBricks from "./app/view/drawBricks.js";
//model
import positionInLevelBrick from "./app/model/positionInLevelBrick.js";
import loseLifeRestartPosition from "./app/model/loseLifeRestartPosition.js";
// controller
import moveByIsStarting from "./app/controler/moveByIsStarting.js";
import loopGaming from "./app/controler/loopGaming.js";
// level
const leveling = [
  {
    bricks: 1,
    numberBricks: 12,
  },
  {
    bricks: 2,
    numberBricks: 8,
  },
];

// canvas
const canvas = document.getElementById("canvas");
canvas.width = Commons.canvasWidth;
canvas.height = Commons.canvasHeight;
const ctx = canvas.getContext("2d");
// variable
const levelPositionBrick = positionInLevelBrick(leveling, Commons);
const Player = { ...Commons.PlayerDefault };
const Ball = { ...Commons.BallDefault };
let lifePlayer = Commons.PlayerDefault.life;
let setTimeOutGame = null;
let start = false;
// model
const drawAll = () => {
  backgroundCanvas(ctx, Commons);
  drawPlayer(ctx, Player);
  drawBall(ctx, Ball);
  drawBricks(ctx, levelPositionBrick, Commons);
};
drawAll();
// boucle game
const loop = () => {
  loopGaming(Player, levelPositionBrick, Ball, Commons);

  if (lifePlayer !== Player.life) {
    start = false;
    loseLifeRestartPosition(Player, Ball, Commons);
    clearTimeout(setTimeOutGame);
  } else setTimeOutGame = setTimeout(loop, Commons.gameSpeedMillisecond);
  // si dead
  if (Player.life === 0) {
    start = false;
    clearTimeout(setTimeOutGame);
    alert("lose");
  }
  drawAll();
};

// lister les evenements
window.addEventListener("keydown", (e) => {
  if (moveByIsStarting(e, Player, Ball, start, Commons)) {
    start = true;
    lifePlayer = Player.life;
    loop();
  }
  drawAll();
});
