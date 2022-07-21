const commonsBoss = {
  boss1: {
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
    id: "boss2",
    x: 0,
    y: 0,
    width: 15, //%
    height: 3, //%
    life: 10,
    color: "#2F8802", //%
    speed: 0.8, // %
    move: "left",
    // add ball
    frameAddBall: 125, // modulo
    borderHeightSpamBall: 5, //%
  },
};
export default commonsBoss;
