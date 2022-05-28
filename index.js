import Commons from "./app/commons.js";
// view
import backgroundCanvas from "./app/view/backgroundCanvas.js";
import drawPlayer from "./app/view/drawPlayer.js";
import drawBall from "./app/view/drawBall.js";

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
};

drawAll();
