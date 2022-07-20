const drawPlayer = ({ ctx, Player, canvasPlay }) => {
  ctx.fillStyle = Player.color;
  const playerWidth = (Player.width * canvasPlay.width) / 100;
  const playerHeight = (Player.height * canvasPlay.height) / 100;
  //player
  ctx.fillRect(Player.x, Player.y, playerWidth, playerHeight);
  // life
  ctx.font = playerHeight + "px Calibri,Geneva,Arial";
  ctx.strokeStyle = "#7A232B";
  ctx.strokeText(
    "\u2661".repeat(Player.life),
    Player.x,
    Player.y + playerHeight
  );
};

export default drawPlayer;
