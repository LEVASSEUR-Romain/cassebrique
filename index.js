//model
import createMap from "./app/model/map/createMap.js";
import mapLinks from "./app/model/map/mapLinks.js";
import map1 from "./app/model/map/typeMap/map1.js";
import Commons from "./app/model/commons/commons.js";
// controller
import main from "./app/controler/main.js";
import { listMap } from "./app/model/listLoop/listDraw.js";

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
const mapImage = map1;
const itemMapPosition = createMap(mapImage, Commons);
const itemMapLinks = mapLinks(itemMapPosition);
// list draw default
const listDraw = listMap;
// global
const objectGlobal = {
  navBar: navBar,
  canvasPlay: canvasPlay,
  canvasMap: canvasMap,
  playImg: playImg,
  mapImg: mapImg,
  Ball: Ball,
  ctx: ctx,
  ctxMap: ctxMap,
  Briks: Briks,
  leveling: leveling,
  Player: Player,
  lifePlayer: lifePlayer,
  setTimeOutGame: setTimeOutGame,
  start: start,
  mapImage: mapImage,
  itemMapPosition: itemMapPosition,
  itemMapLinks: itemMapLinks,
  Commons: Commons,
  listDraw: listDraw,
};
main(objectGlobal);
//console.log(JSON.stringify(itemMapPosition));
//console.log(itemMapLinks);
