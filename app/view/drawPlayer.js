const drawPlayer = (ctx, player) => {
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);
};

export default drawPlayer;
