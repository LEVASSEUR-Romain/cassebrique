import objectUpBottomLeftRightBall from "../../model/collision/toolsCollision/objectUpBottomLeftRightBall.js";
const mainCollision = (objectGlobal, listCollision) => {
  // if collision 1 ball
  if (typeof objectGlobal.Ball === "object") {
    //destructuring
    const { Ball, canvasPlay } = objectGlobal;
    // tchek other borderBottomBall
    const { ballXLeft, ballXRight, ballYTop, ballYBottom } =
      objectUpBottomLeftRightBall(Ball, canvasPlay);
    // list collision
    listCollision.forEach((collision) => {
      collision(objectGlobal, ballXLeft, ballXRight, ballYTop, ballYBottom);
    });
  } else {
    listCollision.forEach((collision) => {
      collision(objectGlobal);
    });
  }
};
export default mainCollision;

//const ratio = canvasPlay.width / canvasPlay.height;
//const ballRadius = ((Ball.radius * canvasPlay.height) / 100) * ratio;
/*   
  goTo prévisualisation
  const goTox = ((Ball.speed * canvasPlay.height) / 100) * Ball.angleDirectionX;
  const goToy = ((Ball.speed * canvasPlay.height) / 100) * Ball.angleDirectionY;
  const ballXLeft = Ball.x - ballRadius + goTox;
  const ballXRight = Ball.x + ballRadius + goTox;
  const ballYTop = Ball.y - ballRadius + goToy;
  const ballYBottom = Ball.y + ballRadius + goToy; */
