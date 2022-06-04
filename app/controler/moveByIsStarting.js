const moveByIsStarting = (event, player, ball, start, Commons) => {
  switch (event.keyCode) {
    // attention pas sortir du jeu
    // right
    case 37:
      player.x = player.x - player.speed < 0 ? 0 : player.x - player.speed;
      if (!start) ball.x = Math.round(player.x + player.width / 2);
      return false;
    //left
    case 39:
      player.x =
        player.x + player.speed > Commons.canvasWidth - player.width
          ? Commons.canvasWidth - player.width
          : player.x + player.speed;
      if (!start) ball.x = Math.round(player.x + player.width / 2);
      return false;
    // space
    case 32:
      if (!start) {
        return true;
      }
  }
};

export default moveByIsStarting;
