const setPositionDefaultPlayer = ({ Player, Commons, canvasPlay }) => {
  Player.x = 0;
  Player.y = canvasPlay.height - (Player.height * canvasPlay.height) / 100;
};
export default setPositionDefaultPlayer;
