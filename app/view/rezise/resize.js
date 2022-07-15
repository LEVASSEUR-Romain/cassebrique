import reziseBricks from "./reziseBricks.js";
const resize = (objectGlobal) => {
  // destructiration
  const { navBar, canvasPlay, canvasMap, Player, Ball, Commons, Briks } =
    objectGlobal;
  // constant tools
  const ratio = window.innerWidth / window.innerHeight;
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
  // new position element player
  Player.y =
    window.innerHeight -
    (Player.height * (window.innerHeight - border)) / 100 -
    border;
  //new position ball
  Ball.y =
    Player.y - (Ball.radius * ratio * (window.innerHeight - border)) / 100;
  Ball.x = Player.x + (Player.width * window.innerWidth) / 100 / 2;
  // new position bricks
  if (Briks) {
    reziseBricks(Briks);
  }
};

export default resize;
