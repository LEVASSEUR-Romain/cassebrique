const loseLife = (player, Commons) => {
  player.life -= 1;
  player.width -= Commons.PlayerDefault.width / Commons.PlayerDefault.life;
};

export default loseLife;
