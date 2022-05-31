import Commons from "./app/commons.js";
// view
import backgroundCanvas from "./app/view/backgroundCanvas.js";
import drawPlayer from "./app/view/drawPlayer.js";
import drawBall from "./app/view/drawBall.js";
import drawBricks from "./app/view/drawBricks.js";
//model
import positionInLevelBrick from "./app/model/positionInLevelBrick.js";
// controller
import moveByIsStarting from "./app/controler/moveByIsStarting.js";
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
let start = false;
const levelPositionBrick = positionInLevelBrick(leveling, Commons);
const canvas = document.getElementById("canvas");
canvas.width = Commons.canvasWidth;
canvas.height = Commons.canvasHeight;
const ctx = canvas.getContext("2d");
const Player = { ...Commons.PlayerDefault };
const Ball = { ...Commons.BallDefault };
// model
const drawAll = () => {
  backgroundCanvas(ctx, Commons);
  drawPlayer(ctx, Player);
  drawBall(ctx, Ball);
  drawBricks(ctx, levelPositionBrick, Commons);
};

drawAll();
// lister les evenements

window.addEventListener("keydown", (e) => {
  if (moveByIsStarting(e, Player, Ball, start, Commons)) {
    console.log("start");
  }
  drawAll();
});
