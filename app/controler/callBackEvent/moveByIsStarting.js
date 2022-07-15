const moveByIsStarting = (event, objectGlobal) => {
  //destruct
  const { Player, Ball, start } = objectGlobal;
  switch (event.keyCode) {
    // right
    case 37:
      const playerWidthCalcul = (Player.width * window.innerWidth) / 100;
      const moveMin =
        -playerWidthCalcul / 2 + (Ball.radius * window.innerWidth) / 100;
      const speed = (Player.speed * window.innerWidth) / 100;
      Player.x = Player.x - speed < moveMin ? moveMin : Player.x - speed;
      if (!start) Ball.x = Player.x + playerWidthCalcul / 2;
      return false;
    //left
    case 39:
      const playerWidthCalcul2 = (Player.width * window.innerWidth) / 100;
      const moveMax =
        window.innerWidth -
        playerWidthCalcul2 / 2 -
        (Ball.radius * window.innerWidth) / 100;
      const speed2 = (Player.speed * window.innerWidth) / 100;
      Player.x = Player.x + speed2 > moveMax ? moveMax : Player.x + speed2;
      if (!start) Ball.x = Player.x + playerWidthCalcul2 / 2;
      return false;
    // space
    case 32:
      if (!start) {
        return true;
      }
  }
};

export default moveByIsStarting;
