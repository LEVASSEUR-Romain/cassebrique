import reziseBricks from "./reziseBricks.js";
const resize = (canvas, Commons, Player = 0, Ball = 0, bricks = 0) => {
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
      window.innerHeight -
      ((Player.height * (window.innerHeight - border)) / 100) * ratio -
      border;
    Ball.y = Player.y - (Ball.radius * window.innerHeight * ratio) / 100;
    Ball.x = Player.x + ((Player.width * window.innerWidth) / 100 / 2) * ratio;
    reziseBricks(bricks, Commons);
  }
};

export default resize;
