import Commons from "./app/commons.js";
// view
import backgroundCanvas from "./app/view/backgroundCanvas.js";
import drawPlayer from "./app/view/drawPlayer.js";
import drawBall from "./app/view/drawBall.js";
import drawBricks from "./app/view/drawBricks.js";
import resize from "./app/view/resize.js";
import drawMapItem from "./app/view/map/drawMapItem.js";
import drawLinksItem from "./app/view/map/drawLinksItem.js";
import drawBackgroundMap from "./app/view/map/drawBackgroundMap.js";
import drawPlayerOnMap from "./app/view/map/drawPlayerOnMap.js";
//model
import positionInLevelBrick from "./app/model/positionInLevelBrick.js";
import loseLifeRestartPosition from "./app/model/loseLifeRestartPosition.js";
import createMap from "./app/model/map/createMap.js";
import mapLinks from "./app/model/map/mapLinks.js";
import map1 from "./app/model/map/typeMap/map1.js";
import generateMapByDiffucult from "./app/model/map/generateMapByDiffucult.js";
// controller
import moveByIsStarting from "./app/controler/moveByIsStarting.js";
import loopGaming from "./app/controler/loopGaming.js";
import clickMenu from "./app/controler/clickMenu.js";
import mapClickEventMount from "./app/controler/map/mapClickEventMount.js";
import winLvl from "./app/controler/winLose/winLvl.js";

// menu
const navBar = document.querySelector("nav");
const playImg = document.getElementById("play");
const mapImg = document.getElementById("map");
// canvas
const canvasPlay = document.getElementById("canvasPlay");
const canvasMap = document.getElementById("canvasMap");
const ctx = canvasPlay.getContext("2d");
const ctxMap = canvasMap.getContext("2d");
// variable
let Briks = "";
let leveling = "";
const Player = { ...Commons.PlayerDefault };
const Ball = { ...Commons.BallDefault };
let lifePlayer = Commons.PlayerDefault.life;
let setTimeOutGame = null;
let start = false;
// map
// creation de map
// copie ??
const mapImage = map1;

//debug
const itemMapPosition = createMap(mapImage, Commons);
const itemMapLinks = mapLinks(itemMapPosition);
//console.log(JSON.stringify(itemMapPosition));
//console.log(itemMapLinks);

// rezise
//resize(canvasPlay, Commons, Player, Ball, Briks);
resize(canvasMap, Commons);
navBar.style.height = (Commons.borderMenu * window.innerHeight) / 100 + "px";
// model
const drawAll = () => {
  // casse brique
  if (Briks) {
    backgroundCanvas(ctx, Commons);
    drawPlayer(ctx, Player, Commons);
    drawBall(ctx, Ball, Commons);
    drawBricks(ctx, Briks, Commons);
  }
  // map
  drawBackgroundMap(ctxMap, Commons);
  drawLinksItem(ctxMap, itemMapLinks, Commons);
  drawMapItem(ctxMap, itemMapPosition, Commons);
  drawPlayerOnMap(ctxMap, Player, Commons);
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
  // if dead
  if (Player.life === 0) {
    start = false;
    clearTimeout(setTimeOutGame);
    alert("Perdu recommencer");
  }
  // if Win lvl
  if (Briks.length === 0) {
    start = false;
    clearTimeout(setTimeOutGame);
    winLvl(
      Player,
      start,
      canvasPlay,
      canvasMap,
      itemMapPosition,
      Ball,
      Commons
    );
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
  //zone de jeu
  resize(canvasPlay, Commons, Player, Ball, Briks);
  resize(canvasMap, Commons);
  drawAll();
  // menu du jeu
  navBar.style.height = (Commons.borderMenu * window.innerHeight) / 100 + "px";
});
// menu
const clickMap = (e) => {
  const elementClickDifficulty = mapClickEventMount(
    e,
    itemMapPosition,
    Commons,
    Player
  );
  if (elementClickDifficulty != false) {
    clickMenu("play", start, canvasPlay, canvasMap, Player);
  }
  // create level
  leveling = [
    {
      bricks: 1,
      numberBricks: 1,
    },
  ];
  //leveling = generateMapByDiffucult(elementClickDifficulty);
  Briks = positionInLevelBrick(leveling, Commons);
  resize(canvasPlay, Commons, Player, Ball, Briks);
  drawAll();
};
canvasMap.addEventListener("click", clickMap);

playImg.addEventListener("click", (e) => {
  clickMenu(e, start, canvasPlay, canvasMap, Player);
});
mapImg.addEventListener("click", (e) => {
  clickMenu(e, start, canvasPlay, canvasMap, Player);
});
