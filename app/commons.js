const cHeight = 300;
const playerHeight = 20;
const radiusBall = 10;

const Commons = {
  canvasWidth: 500,
  canvasHeight: cHeight,
  backgroundCanvas: "red",
  // joueur
  PlayerDefault: {
    height: playerHeight,
    width: 40,
    x: 0,
    y: cHeight - playerHeight,
    color: "blue",
    vie: 4,
  },
  // ball
  BallDefault: {
    x: playerHeight,
    y: cHeight - playerHeight - radiusBall,
    radius: radiusBall,
    color: "white",
  },
  //brick
  bordeBrick: 2,
  brick: [
    {
      with: 40,
      height: 20,
      color: "green",
    },
  ],
};

export default Commons;
