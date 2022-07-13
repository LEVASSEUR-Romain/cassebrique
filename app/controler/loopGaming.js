//import collisionAngle from "./CollisionAngle.js";
import mainCollision from "./mainCollision.js";
import loseLifeRestartPosition from "./../model/loseLifeRestartPosition.js";
import winLvl from "./winLose/winLvl.js";
import drawAll from "./../view/drawAll.js";

const loopGaming = (objectGlobal) => {
  // destructiring
  const {
    Player,
    Briks,
    Ball,
    Commons,
    canvasPlay,
    canvasMap,
    itemMapPosition,
  } = objectGlobal;
  // collission avancement
  mainCollision(Player, Briks, Ball, Commons);
  Ball.x += ((Ball.speed * window.innerHeight) / 100) * Ball.angleDirectionX;
  Ball.y += ((Ball.speed * window.innerHeight) / 100) * Ball.angleDirectionY;
  // condition
  if (objectGlobal.lifePlayer !== Player.life) {
    objectGlobal.start = false;
    loseLifeRestartPosition(Player, Ball, Commons);
    clearTimeout(objectGlobal.setTimeOutGame);
  } else
    objectGlobal.setTimeOutGame = setTimeout(() => {
      loopGaming(objectGlobal);
    }, Commons.gameSpeedMillisecond);
  if (Player.life === 0) {
    start = false;
    clearTimeout(objectGlobal.setTimeOutGame);
    alert("Perdu recommencer");
  }
  // if Win lvl
  if (Briks.length === 0) {
    objectGlobal.start = false;
    clearTimeout(objectGlobal.setTimeOutGame);
    winLvl(
      Player,
      objectGlobal.start,
      canvasPlay,
      canvasMap,
      itemMapPosition,
      Ball,
      Commons
    );
  }
  drawAll(objectGlobal);
};
export default loopGaming;
