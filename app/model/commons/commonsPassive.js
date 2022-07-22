const commonsPassive = [
  {
    id: 1,
    name: "Bonus vie",
    description: "le joueur gange +1 vie maximum",
    image: "./img/passive/falcon-moon.svg",
    effect: (player, ball = 0, Commons = 0) => {
      Commons.PlayerDefault.life += 1;
      player.life += 1;
    },
  },
  {
    id: 2,
    name: "Bonus vitesse",
    description: "vous gagnez +5% vitesse",
    image: "./img/passive/food-chain.svg",
    effect: (player, ball = 0, Commons = 0) => {
      player.speed = player.speed * 1.05;
    },
  },
  {
    id: 3,
    name: "Taille largueur",
    description: "vous gagnez +5% largueur",
    image: "./img/passive/giant-squid.svg",
    effect: (player, ball = 0, Commons = 0) => {
      player.width = player.width * 1.05;
    },
  },
  {
    id: 4,
    name: "Taille hauteur joueur",
    description: "vous gagnez +5% hauteur",
    image: "./img/passive/heptagram.svg",
    effect: (player, ball = 0, Commons = 0) => {
      player.height = player.height * 1.05;
    },
  },
  {
    id: 5,
    name: "Rayon de la ball",
    description: "vous gagnez +5% rayon",
    image: "./img/passive/hydra.svg",
    effect: (player = 0, ball, Commons = 0) => {
      ball.radiusHeight = ball.radiusHeight * 1.05;
    },
  },
  {
    id: 6,
    name: "Vitesse de la ball",
    description: "vous gagnez -5% vitesse",
    image: "./img/passive/lion.svg",
    effect: (player = 0, ball, Commons = 0) => {
      ball.speed = ball.speed * 0.95;
    },
  },
  {
    id: 7,
    name: "Vitesse général",
    description: "la vitesse du jeu est ralenti de -2%",
    image: "./img/passive/rose.svg",
    effect: (player = 0, ball = 0, Commons) => {
      Commons.gameSpeedMillisecond = Commons.gameSpeedMillisecond * 0.98;
    },
  },
  {
    id: 8,
    name: "Bonus personnage vitesse, ball vitesse",
    description: "vous gagnez +10% vitesse ainsi que la balle",
    image: "./img/passive/stag-head.svg",
    effect: (player, ball, Commons = 0) => {
      player.speed = player.speed * 1.1;
      ball.speed = ball.speed * 1.1;
    },
  },
  {
    id: 9,
    name: "Bonus personnage taille, ball rayon",
    description: "vous gagnez +2.5% taille ainsi que votre ball",
    image: "./img/passive/sun-spear.svg",
    effect: (player, ball, Commons = 0) => {
      player.width = player.width * 1.025;
      ball.radiusHeight = ball.radiusHeight * 1.025;
    },
  },
];

export default commonsPassive;
