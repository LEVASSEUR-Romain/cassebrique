const commonsPassive = [
  {
    id: 1,
    name: "Bonus vie",
    description: "le joueur gange +1 vie maximum",
    image: "playerlife",
    effect: (player, ball = 0, Commons = 0) => {
      Commons.PlayerDefault.life += 1;
      player.life += 1;
    },
  },
  {
    id: 2,
    name: "Raquette largueur augmenter",
    description: "vous gagnez +5% largueur",
    image: "passiflargeur",
    effect: (player, ball = 0, Commons = 0) => {
      player.width = player.width * 1.05;
      Commons.PlayerDefault.width *= 1.05;
    },
  },
  {
    id: 3,
    name: "Raquette hauteur augmenter",
    description: "vous gagnez +5% hauteur",
    image: "passifhauteur",
    effect: (player, ball = 0, Commons = 0) => {
      player.height = player.height * 1.05;
      Commons.PlayerDefault.height *= 1.05;
    },
  },
  {
    id: 4,
    name: "Rayon de la ball",
    description: "vous gagnez +5% rayon",
    image: "passifradius",
    effect: (player = 0, ball, Commons = 0) => {
      ball.radiusHeight = ball.radiusHeight * 1.05;
      Commons.BallDefault.radiusHeight *= 1.05;
    },
  },
  {
    id: 5,
    name: "Vitesse de la ball",
    description: "vous gagnez -5% vitesse",
    image: "passifballslow",
    effect: (player = 0, ball, Commons = 0) => {
      ball.speed = ball.speed * 0.95;
      Commons.BallDefault.speed *= 0.95;
    },
  },
  {
    id: 6,
    name: "Vitesse général",
    description: "la vitesse du jeu est ralenti de -2%",
    image: "passifslow",
    effect: (player = 0, ball = 0, Commons) => {
      Commons.gameSpeedMillisecond = Commons.gameSpeedMillisecond * 0.98;
    },
  },
  {
    id: 7,
    name: "Bonus personnage taille, ball rayon",
    description: "vous gagnez +2.5% taille ainsi que votre ball",
    image: "passifupall",
    effect: (player, ball, Commons = 0) => {
      player.width = player.width * 1.025;
      ball.radiusHeight = ball.radiusHeight * 1.025;
      Commons.PlayerDefault.width *= 1.025;
      Commons.BallDefault.radiusHeight *= 1.025;
    },
  },
];

export default commonsPassive;
