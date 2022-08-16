const commonsBoss = {
  boss1: {
    //tire man
    id: "boss1",
    x: 0,
    y: 0,
    width: 20, //%
    height: 5, //%
    life: 20,
    color: "#2F8802", //%
    colorShooter: "black",
    widthShooter: 2, //%
    heightShooter: 2, //%
    speed: 1, // par rapport au jouer
    frameShoot: 60, // modulo
    //shoot
    shootWidth: 1, //%
    shootHeight: 3, //%
    shootSpeed: 1, //%
    shootColor: "black",
  },
  boss2: {
    // boule man
    id: "boss2",
    x: 0,
    y: 0,
    width: 15, //%
    height: 3, //%
    life: 1, // default 8
    color: "#2F8802", //%
    speed: 0.8, // %
    move: "left",
    // add ball
    frameAddBall: 125, // modulo
    borderHeightSpamBall: 5, //%
  },
  boss3: {
    // bomb man
    id: "boss3",
    x: 0,
    y: 0, // defaut start
    width: 3, //%
    height: 20, //%
    life: 1, // 5 par default
    color: "#2F8802", //%
    borderMaxBottom: 30, //%
    speed: 0.5, // %
    move: "downRight",
    // add ball
    previewBomb: 50, //frame view
    colorAnimation: "red",
    frameBomb: 125, // modulo
    colorAnimationFire: "yellow",
    mapTierTarget: 1,
  },
};
export default commonsBoss;
