const cHeight = 300;
const playerHeight = 20;
const radiusBall = 10;

const Commons = {
  canvasWidth: 300,
  canvasHeight: cHeight,
  backgroundCanvas: "white",
  // joueur
  PlayerDefault: {
    height: playerHeight,
    width: 40,
    x: 0,
    y: cHeight - playerHeight,
    color: "blue",
    vie: 4,
    speed: 15,
  },
  // ball
  BallDefault: {
    x: playerHeight,
    y: cHeight - playerHeight - radiusBall,
    radius: radiusBall,
    color: "black",
  },
  //brick
  bordeBrick: 5,
  brick: [
    {
      width: 50,
      height: 20,
      color: "green",
    },
    {
      width: 30,
      height: 20,
      color: "red",
    },
  ],
};

export default Commons;
