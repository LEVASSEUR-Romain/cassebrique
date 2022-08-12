import reziseBricks from "./reziseBricks.js";
import setPositionRezise from "../../controler/objetGlobalchange/setPositionRezise.js";
const resize = (objectGlobal) => {
  // destructiration
  const { navBar, canvasPlay, canvasMap, Commons, Briks } = objectGlobal;
  // constant tools
  const border = Math.ceil((Commons.borderMenu * window.innerHeight) / 100);
  //navBar menu
  navBar.style.height = border + "px";
  //change canvas play
  canvasPlay.width = window.innerWidth;
  canvasPlay.height = window.innerHeight - border;
  canvasPlay.style.bottom = "0px";
  // change canvas map
  canvasMap.width = window.innerWidth;
  canvasMap.height = window.innerHeight - border;
  canvasMap.style.bottom = "0px";
  // new position element player default and ball
  setPositionRezise(objectGlobal);
  // new position bricks
  if (Briks) {
    reziseBricks(Briks);
  }
};

export default resize;
