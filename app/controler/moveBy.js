const moveBy = (event, player) => {
  switch (event.keyCode) {
    // right
    case 37:
      player.x -= player.speed;
      break;
    //left
    case 39:
      player.x += player.speed;
      break;
  }
};

export default moveBy;
