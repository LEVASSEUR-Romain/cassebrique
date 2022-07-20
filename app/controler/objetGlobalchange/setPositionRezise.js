const setPositionRezise = ({ Ball, Player }) => {
  Player.y = canvasPlay.height - (Player.height * canvasPlay.height) / 100;
  Ball.y = Player.y - (Ball.radiusHeight * canvasPlay.height) / 100;
  Ball.x = Player.x + (Player.width * canvasPlay.width) / 100 / 2;
};
export default setPositionRezise;
