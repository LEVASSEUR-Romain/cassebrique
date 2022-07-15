const drawPlayer = ({ ctx, Player, canvasPlay }) => {
  ctx.fillStyle = Player.color;
  ctx.fillRect(
    Player.x,
    Player.y,
    (Player.width * canvasPlay.width) / 100,
    (Player.height * canvasPlay.height) / 100
  );
};

export default drawPlayer;
