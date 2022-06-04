const collisionAngle = (player, briks, ball, Commons) => {
  // const
  const goTox = ball.speed * Math.cos(ball.angleDirection);
  const goToy = ball.speed * Math.sin(ball.angleDirection);
  const ballXLeft = ball.x - ball.radius + goTox;
  const ballXRight = ball.x + ball.radius + goTox;
  const ballYTop = ball.y - ball.radius + goToy;
  const ballYBottom = ball.y + ball.radius + goToy;
  // rebond sur les bords du canvas
  const conditionLeftBorder = ballXLeft < 0;
  const conditionRightBorder = ballXRight > Commons.canvasWidth;
  const conditionTopBorder = ballYTop < 0;
  const conditionBottomBorder = ballYBottom > Commons.canvasHeight;
  if (conditionLeftBorder || conditionRightBorder) {
    if (ball.angleDirection > 0) {
      if (conditionLeftBorder) ball.angleDirection -= Math.PI / 2;
      if (conditionRightBorder) ball.angleDirection += Math.PI / 2;
    } else {
      if (conditionLeftBorder) ball.angleDirection += Math.PI / 2;
      if (conditionRightBorder) ball.angleDirection -= Math.PI / 2;
    }
  }
  if (conditionBottomBorder || conditionTopBorder) {
    if (conditionBottomBorder) ball.angleDirection -= Math.PI / 2;
    if (conditionTopBorder) ball.angleDirection += Math.PI / 2;
  }
  // rebond sur le joueur
  if (
    ballXRight > player.x &&
    ballXLeft < player.x + player.width &&
    ballYBottom > player.y &&
    ballYTop < player.y + player.height
  ) {
    // ball vers le haut
    ball.angleDirectionY = -1;
    const centerPlayerX = player.x + player.width / 2;
    if (ball.x < centerPlayerX) {
      ball.angleDirectionX = -(ball.x - centerPlayerX) / centerPlayerX;
      //console.log(ball.angleDirectionX);
    } else if (ball.x > centerPlayerX) {
      ball.angleDirectionX = (centerPlayerX - ball.x) / centerPlayerX;
      //console.log(ball.angleDirectionX);
    } else {
      //ball.angleDirectionX = 0;
      ball.angleDirection = -Math.PI / 2;
    }
    //if (ball.x + ball.radius + goTox > player.x + player.width / 2) {
  }

  // rebond sur les briques
  /*   briks.forEach((brick) => {
    if (
      ball.x + ball.radius > brick.x &&
      ball.x - ball.radius < brick.x + brick.width &&
      ball.y + ball.radius > brick.y &&
      ball.y - ball.radius < brick.y + brick.height
    ) {
      ball.angleDirection = -ball.angleDirection;
      briks.splice(briks.indexOf(brick), 1);
    }
  }); */
};
export default collisionAngle;
