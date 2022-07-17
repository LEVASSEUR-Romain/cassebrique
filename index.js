//model
import createMap from "./app/model/map/createMap.js";
import mapLinks from "./app/model/map/mapLinks.js";
import map1 from "./app/model/map/typeMap/map1.js";
import Commons from "./app/model/commons/commons.js";
// controller
import main from "./app/controler/main.js";
import { listMap } from "./app/model/listLoop/listDraw.js";
import isLocalStorage from "./app/controler/localStorage/isLocalStorage.js";
import addLocalStrorage from "./app/controler/localStorage/addLocalStrorage.js";
import getLocalStrorage from "./app/controler/localStorage/getLocalStrorage.js";
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
let setTimeOutGame = null;
let start = false;
// list draw default
const listDraw = listMap;
// localStorage
let Player,
  Ball,
  lifePlayer,
  map,
  commons,
  itemMapPosition = null;
// debug
Player = { ...Commons.PlayerDefault };
Ball = { ...Commons.BallDefault };
lifePlayer = Commons.PlayerDefault.life;
// default because 1 map for the moment
map = map1;
commons = Commons;
itemMapPosition = createMap(map, commons);
/* if (!isLocalStorage()) {
  console.log("ici");
  Player = getLocalStrorage("player");
  Ball = getLocalStrorage("ball");
  lifePlayer = Player.life;
  map = getLocalStrorage("map");
  commons = getLocalStrorage("commons");
  itemMapPosition = getLocalStrorage("mapItem");
} else {
  Player = { ...Commons.PlayerDefault };
  Ball = { ...Commons.BallDefault };
  lifePlayer = Commons.PlayerDefault.life;
  // default because 1 map for the moment
  map = map1;
  commons = Commons;
  itemMapPosition = createMap(map, commons);
  addLocalStrorage(Player, "player");
  addLocalStrorage(Ball, "ball");
  addLocalStrorage(commons, "communs");
  addLocalStrorage(map, "map");
  addLocalStrorage(itemMapPosition, "mapItem");
} */
const itemMapLinks = mapLinks(itemMapPosition);
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
  map: map,
  itemMapPosition: itemMapPosition,
  itemMapLinks: itemMapLinks,
  Commons: commons,
  listDraw: listDraw,
};
main(objectGlobal);
//console.log(JSON.stringify(itemMapPosition));
//console.log(itemMapLinks);
