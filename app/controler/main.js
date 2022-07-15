// controler
import clickMenu from "./clickMenu.js";
import clickMap from "./clickMap.js";
import moveByIsStarting from "./moveByIsStarting.js";
import loopGaming from "./loopGaming.js";
// view
import drawAll from "../view/drawAll.js";
import resize from "../view/resize.js";
// collision
import borderBall from "../model/collision/borderBall.js";
import bricksBall from "../model/collision/bricksBall.js";
import playerBall from "../model/collision/playerBall.js";
//loopGamingModel
import moveBall from "../model/loopGamingModel/moveBall.js";
import restartLoseLife from "../model/loopGamingModel/restartLoseLife.js";
import winLvl from "../model/loopGamingModel/winLvl.js";
import loseLvl from "../model/loopGamingModel/loseLvl.js";

const main = (objectGlobal) => {
  // recuperation destructuration
  const {
    canvasMap,
    Commons,
    navBar,
    canvasPlay,
    Player,
    Ball,
    playImg,
    mapImg,
  } = objectGlobal;
  // collision gerer
  const listCollision = [borderBall, bricksBall, playerBall];
  const listEvent = [moveBall, restartLoseLife, winLvl, loseLvl];
  // gestion affichage
  const showAll = () => {
    //zone play no resize if i don't bricks
    if (objectGlobal.Briks) {
      resize(canvasPlay, navBar, Commons, Player, Ball, objectGlobal.Briks);
    }
    resize(canvasMap, navBar, Commons);
    drawAll(objectGlobal);
  };
  // init
  showAll();
  window.addEventListener("resize", () => {
    showAll();
  });

  // controleur click au menu
  playImg.addEventListener("click", (e) => {
    clickMenu(e, objectGlobal.start, canvasPlay, canvasMap, Player);
  });
  mapImg.addEventListener("click", (e) => {
    clickMenu(e, objectGlobal.start, canvasPlay, canvasMap, Player);
  });
  // controleur click map
  canvasMap.addEventListener("click", (e) => {
    clickMap(e, objectGlobal);
    showAll();
  });
  // controleur go play
  window.addEventListener("keydown", (e) => {
    if (moveByIsStarting(e, Player, Ball, objectGlobal.start)) {
      objectGlobal.start = true;
      objectGlobal.lifePlayer = Player.life;
      loopGaming(objectGlobal, listEvent, listCollision);
    }
    // else ici peu etre
    drawAll(objectGlobal);
  });
};

export default main;
