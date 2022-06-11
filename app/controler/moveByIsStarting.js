const moveByIsStarting = (event, player, ball, start, Commons) => {
  switch (event.keyCode) {
    // attention pas sortir du jeu
    // right
    case 37:
      const playerWidthCalcul = (player.width * window.innerWidth) / 100;
      const moveMin = -(Commons.placementMore * playerWidthCalcul) / 100;
      const speed = (player.speed * window.innerWidth) / 100;
      player.x = player.x - speed < moveMin ? moveMin : player.x - speed;
      if (!start) ball.x = Math.round(player.x + playerWidthCalcul / 2);
      return false;
    //left
    case 39:
      const playerWidthCalcul2 = (player.width * window.innerWidth) / 100;
      const moveMax =
        window.innerWidth -
        playerWidthCalcul2 +
        (Commons.placementMore * playerWidthCalcul2) / 100;
      const speed2 = (player.speed * window.innerWidth) / 100;
      player.x = player.x + speed2 > moveMax ? moveMax : player.x + speed2;
      if (!start) ball.x = Math.round(player.x + playerWidthCalcul2 / 2);
      return false;
    // space
    case 32:
      if (!start) {
        return true;
      }
  }
};

export default moveByIsStarting;
