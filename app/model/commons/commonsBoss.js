const commonsBoss = {
  boss1: {
    //tire man
    id: "boss1",
    x: 0,
    y: 0,
    width: 15, //%
    height: 5, //%
    life: 15,
    color: "#2F8802", //%
    colorShooter: "black",
    widthShooter: 2, //%
    heightShooter: 2, //%
    speed: 1, // par rapport au jouer
    frameShoot: 60, // modulo
    //shoot
    shootWidth: 2, //%
    shootHeight: 3, //%
    shootSpeed: 1, //%
  },
  boss2: {
    // boule man
    id: "boss2",
    x: 0,
    y: 0,
    width: 15, //%
    height: 5, //%
    life: 1, // default 5
    color: "#ae8781",
    speed: 0.8, // %
    move: "left",
    // add ball
    frameAddBall: 200, // modulo
    maxBall: 3, // max ball
    borderHeightSpamBall: 5, //%
  },
  boss3: {
    // bomb man
    id: "boss3",
    x: 0,
    y: 0, // defaut start
    width: 3, //%
    height: 20, //%
    life: 3, // 5 par default
    color: "#FFD300",
    borderMaxBottom: 30, //%
    speed: 0.5, // %
    move: "downRight",
    // add ball
    previewBomb: 50, //frame view
    colorAnimation: "rgba(244, 198, 0, 0.5)",
    frameBomb: 125, // modulo
    colorAnimationFire: "red",
    mapTierTarget: 1,
  },
};
export default commonsBoss;
