const cHeight = 300;
const playerHeight = 10;
const playerWidth = 80;
const radiusBall = 10;

const Commons = {
  // canvas
  canvasWidth: 300,
  canvasHeight: cHeight,
  backgroundCanvas: "white",
  // joueur
  PlayerDefault: {
    height: playerHeight,
    width: playerWidth,
    x: 0,
    y: cHeight - playerHeight,
    color: "blue",
    life: 4,
    speed: 30,
  },
  // ball
  BallDefault: {
    x: playerWidth / 2,
    y: cHeight - playerHeight - radiusBall,
    radius: radiusBall,
    color: "black",
    //angleDirection: -Math.PI / 4 - Math.PI / 2,
    angleDirectionX: 0,
    angleDirectionY: -1,
    speed: 5,
  },
  //brick
  bordeBrick: 5,
  brick: [
    {
      width: 50,
      height: 20,
      color: ["red", "green"],
      life: 2,
    },
    {
      width: 30,
      height: 20,
      color: ["red"],
      life: 1,
    },
  ],
  // game
  gameSpeedMillisecond: 30,
  gameSpeedCollisionBorder: 0.6,
};

export default Commons;
