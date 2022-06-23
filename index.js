import Commons from "./app/commons.js";
// view
import backgroundCanvas from "./app/view/backgroundCanvas.js";
import drawPlayer from "./app/view/drawPlayer.js";
import drawBall from "./app/view/drawBall.js";
import drawBricks from "./app/view/drawBricks.js";
import resize from "./app/view/resize.js";
import drawMapItem from "./app/view/map/drawMapItem.js";
//model
import positionInLevelBrick from "./app/model/positionInLevelBrick.js";
import loseLifeRestartPosition from "./app/model/loseLifeRestartPosition.js";
import createMap from "./app/model/map/createMap.js";
import drawBackgroundMap from "./app/view/map/drawBackgroundMap.js";
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
const canvasPlay = document.getElementById("canvasPlay");
const canvasMap = document.getElementById("canvasMap");
const ctx = canvasPlay.getContext("2d");
const ctxMap = canvasMap.getContext("2d");
// variable
const Briks = positionInLevelBrick(leveling, Commons);
const Player = { ...Commons.PlayerDefault };
const Ball = { ...Commons.BallDefault };
let lifePlayer = Commons.PlayerDefault.life;
let setTimeOutGame = null;
let start = false;
// map
// creation de map
const mapImage = [
  [
    {
      id: 1,
      difficulty: 1,
      type: "mob",
    },
    {
      id: 2,
      difficulty: 1,
      type: "mob",
    },
    {
      id: 3,
      difficulty: 1,
      type: "mob",
    },
  ],
  [
    {
      id: 1,
      difficulty: 1,
      type: "mob",
    },
    {
      id: 2,
      difficulty: 1,
      type: "mob",
    },
    {
      id: 3,
      difficulty: 1,
      type: "mob",
    },
  ],
  [
    {
      id: 1,
      difficulty: 1,
      type: "mob",
    },
    {
      id: 2,
      difficulty: 1,
      type: "mob",
    },
  ],
];
const mapPosition = createMap(mapImage, Commons);
console.log(mapPosition);
// rezise
resize(canvasPlay, Commons, Player, Ball, Briks);
resize(canvasMap, Commons);
// model
const drawAll = () => {
  // casse brique
  backgroundCanvas(ctx, Commons);
  drawPlayer(ctx, Player, Commons);
  drawBall(ctx, Ball);
  drawBricks(ctx, Briks, Commons);
  // map
  drawBackgroundMap(ctxMap, Commons);
  drawMapItem(ctxMap, mapPosition, Commons);
};
drawAll();
// boucle game
const loop = () => {
  loopGaming(Player, Briks, Ball, Commons);

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
  // si plus de brick
  if (Briks.length === 0) {
    start = false;
    clearTimeout(setTimeOutGame);
    alert("win");
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
window.addEventListener("resize", () => {
  resize(canvasPlay, Commons, Player, Ball, Briks);
  resize(canvasMap, Commons);
  drawAll();
});
