import reziseBricks from "./reziseBricks.js";
import setPositionDefaultPlayer from "../../controler/objetGlobalchange/setPositionDefaultPlayer.js";
import setPositiondefaultBall from "../../controler/objetGlobalchange/setPositiondefaultPlayerBall.js";
const resize = (objectGlobal) => {
  // destructiration
  const { navBar, canvasPlay, canvasMap, Player, Ball, Commons, Briks } =
    objectGlobal;
  // constant tools
  const border = (Commons.borderMenu * window.innerHeight) / 100;
  //navBar menu
  navBar.style.height = (Commons.borderMenu * window.innerHeight) / 100 + "px";
  //change canvas play
  canvasPlay.width = window.innerWidth;
  canvasPlay.height = window.innerHeight - border;
  canvasPlay.style.bottom = "0px";
  // change canvas map
  canvasMap.width = window.innerWidth;
  canvasMap.height = window.innerHeight - border;
  canvasMap.style.bottom = "0px";
  // new position element player default and ball
  setPositionDefaultPlayer(objectGlobal);
  setPositiondefaultBall(objectGlobal);
  // new position bricks
  if (Briks) {
    reziseBricks(Briks);
  }
};

export default resize;