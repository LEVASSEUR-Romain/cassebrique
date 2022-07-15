import borderBall from "../model/collision/borderBall.js";
import playerBall from "../model/collision/playerBall.js";
import bricksBall from "../model/collision/bricksBall.js";
const mainCollision = (objectGlobal, listCollision) => {
  //destructuring
  const { Ball, Commons } = objectGlobal;
  // const
  const border = (Commons.borderMenu * window.innerHeight) / 100;
  const goTox =
    ((Ball.speed * (window.innerHeight - border)) / 100) * Ball.angleDirectionX;
  const goToy =
    ((Ball.speed * (window.innerHeight - border)) / 100) * Ball.angleDirectionY;
  const ratio = window.innerWidth / window.innerHeight;
  const ballRadius = ((Ball.radius * window.innerWidth) / 100) * ratio;
  const ballXLeft = Ball.x - ballRadius + goTox;
  const ballXRight = Ball.x + ballRadius + goTox;
  const ballYTop = Ball.y - ballRadius + goToy;
  const ballYBottom = Ball.y + ballRadius + goToy;

  // list collision
  listCollision.forEach((collision) => {
    window[collision](
      objectGlobal,
      ballXLeft,
      ballXRight,
      ballYTop,
      ballYBottom
    );
  });
};
export default mainCollision;
