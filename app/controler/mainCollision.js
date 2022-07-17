const mainCollision = (objectGlobal, listCollision) => {
  //destructuring
  const { Ball, canvasPlay, Player } = objectGlobal;
  const ratio = canvasPlay.width / canvasPlay.height;
  const ballRadius = ((Ball.radius * canvasPlay.height) / 100) * ratio;
  /*   
  goTo prévisualisation
  const goTox = ((Ball.speed * canvasPlay.height) / 100) * Ball.angleDirectionX;
  const goToy = ((Ball.speed * canvasPlay.height) / 100) * Ball.angleDirectionY;
  const ballXLeft = Ball.x - ballRadius + goTox;
  const ballXRight = Ball.x + ballRadius + goTox;
  const ballYTop = Ball.y - ballRadius + goToy;
  const ballYBottom = Ball.y + ballRadius + goToy; */
  const ballXLeft = Ball.x - ballRadius;
  const ballXRight = Ball.x + ballRadius;
  const ballYTop = Ball.y - ballRadius;
  const ballYBottom = Ball.y + ballRadius;
  // list collision
  listCollision.forEach((collision) => {
    collision(objectGlobal, ballXLeft, ballXRight, ballYTop, ballYBottom);
  });
};
export default mainCollision;
