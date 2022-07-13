import reziseBricks from "./reziseBricks.js";
const resize = (canvas, navBar, Commons, Player = 0, Ball = 0, bricks = 0) => {
  navBar.style.height = (Commons.borderMenu * window.innerHeight) / 100 + "px";
  canvas.width = window.innerWidth;
  // mise a jour pour les bricks
  Commons.widthCanvas = window.innerWidth;
  Commons.heightCanvas = window.innerHeight;
  const ratio = window.innerWidth / window.innerHeight;
  const border = (Commons.borderMenu * window.innerHeight) / 100;
  if (canvas.id === "canvasPlay" || canvas.id === "canvasMap") {
    canvas.style.bottom = "0px";
    canvas.height = window.innerHeight - border;
  }
  // new position element
  if (canvas.id === "canvasPlay") {
    Player.y =
      window.innerHeight - (Player.height * window.innerHeight) / 100 - border;
    Ball.y =
      Player.y - (Ball.radius * ratio * (window.innerHeight - border)) / 100;
    Ball.x = Player.x + (Player.width * window.innerWidth) / 100 / 2;
    reziseBricks(bricks);
  }
};

export default resize;
