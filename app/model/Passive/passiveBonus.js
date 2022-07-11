const PassiveBonus = [
  {
    id: 1,
    name: "bonus vie joueur",
    description: "+1 vie",
    image: "ici",
    effect: (player, ball = 0, Commons = 0) => {
      player.life += 1;
    },
  },
  {
    id: 2,
    name: "bonus vitesse joueur",
    description: "+5% vitesse",
    image: "ici",
    effect: (player, ball = 0, Commons = 0) => {
      player.speed = player.speed * 1.05;
    },
  },
  {
    id: 3,
    name: "taille largueur joueur",
    description: "+5% largueur",
    image: "ici",
    effect: (player, ball = 0, Commons = 0) => {
      player.width = player.width * 1.05;
    },
  },
  {
    id: 4,
    name: "taille hauteur joueur",
    description: "+5% hauteur",
    image: "ici",
    effect: (player, ball = 0, Commons = 0) => {
      player.height = player.height * 1.05;
    },
  },
  {
    id: 5,
    name: "rayon de la ball",
    description: "+5% rayon",
    image: "ici",
    effect: (player = 0, ball, Commons = 0) => {
      ball.radius = ball.radius * 1.05;
    },
  },
  {
    id: 6,
    name: "vitesse de la ball",
    description: "-5% vitesse",
    image: "ici",
    effect: (player = 0, ball, Commons = 0) => {
      ball.speed = ball.speed * 0.95;
    },
  },
  {
    id: 7,
    name: "game vitesse général",
    description: "-2% game vitesse",
    image: "ici",
    effect: (player = 0, ball = 0, Commons) => {
      Commons.gameSpeedMillisecond = Commons.gameSpeedMillisecond * 0.98;
    },
  },
  {
    id: 8,
    name: "Bonus personnage vitesse, ball vitesse",
    description: "+10% vitesse",
    image: "ici",
    effect: (player, ball, Commons = 0) => {
      player.speed = player.speed * 1.1;
      ball.speed = ball.speed * 1.1;
    },
  },
  {
    id: 9,
    name: "Bonus personnage taille, ball rayon",
    description: "+2.5% taille",
    image: "ici",
    effect: (player, ball, Commons = 0) => {
      player.width = player.width * 1.025;
      ball.radius = ball.radius * 1.025;
    },
  },
];

export default PassiveBonus;
