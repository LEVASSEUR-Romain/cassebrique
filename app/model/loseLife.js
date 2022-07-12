const loseLife = (player, Commons) => {
  player.life -= 1;
  player.width -= Commons.playerLoseLifeWitdh;
};

export default loseLife;
