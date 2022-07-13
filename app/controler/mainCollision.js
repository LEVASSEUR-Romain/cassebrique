import borderBall from "./collision/borderBall.js";
import playerBall from "./collision/playerBall.js";
import bricksBall from "./collision/bricksBall.js";
const mainCollision = (Player, Bricks, Ball, Commons) => {
  // const
  const border = (Commons.borderMenu * window.innerHeight) / 100;
  const goTox =
    ((Ball.speed * (window.innerHeight - border)) / 100) * Ball.angleDirectionX;
  const goToy =
    ((Ball.speed * (window.innerHeight - border)) / 100) * Ball.angleDirectionY;
  const playerWidth = (Player.width * window.innerWidth) / 100;
  const playerHeight = (Player.height * (window.innerHeight - border)) / 100;
  const ratio = window.innerWidth / window.innerHeight;
  const ballRadius = ((Ball.radius * window.innerWidth) / 100) * ratio;
  const ballXLeft = Ball.x - ballRadius + goTox;
  const ballXRight = Ball.x + ballRadius + goTox;
  const ballYTop = Ball.y - ballRadius + goToy;
  const ballYBottom = Ball.y + ballRadius + goToy;

  // rebond sur les bords du canvas
  borderBall(
    Ball,
    ballXLeft,
    ballXRight,
    ballYTop,
    ballYBottom,
    border,
    Player,
    Commons
  );
  // rebond sur le joueur
  playerBall(
    Ball,
    Player,
    ballXRight,
    ballXLeft,
    ballYBottom,
    ballYTop,
    playerWidth,
    playerHeight
  );

  // rebond sur les briques3
  bricksBall(
    Bricks,
    Ball,
    Commons,
    ballXRight,
    ballXLeft,
    ballYBottom,
    ballYTop
  );
};
export default mainCollision;
