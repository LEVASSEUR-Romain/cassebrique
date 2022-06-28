const drawPlayer = (ctx, player, Commons) => {
  ctx.fillStyle = player.color;
  const border = (Commons.borderMenu * window.innerHeight) / 100;
  const ratio = window.innerWidth / window.innerHeight;
  ctx.fillRect(
    player.x,
    player.y,
    (player.width * window.innerWidth) / 100,
    (player.height * (window.innerHeight - border)) / 100
  );
};

export default drawPlayer;
