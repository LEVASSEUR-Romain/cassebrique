const Commons = {
  // canvas
  backgroundCanvas: "white",
  borderMenu: 5, // %
  // joueur
  PlayerDefault: {
    height: 4, // %
    width: 20, // %
    color: "blue",
    life: 4,
    speed: 7, // %
    //defaut recalculer dans rezise
    x: 0,
    y: 0,
  },
  // ball
  BallDefault: {
    radius: 2, // %
    color: "black",
    angleDirectionX: 0,
    angleDirectionY: -1,
    speed: 5, // %
    // defaut recalculer dans rezise
    x: 0,
    y: 0,
  },
  //brick
  bordeBrick: 2, // %
  brick: [
    {
      width: 10, //%
      height: 10, //%
      color: ["red", "green"],
      life: 2,
    },
    {
      width: 10, //%
      height: 10, //%
      color: ["red"],
      life: 1,
    },
  ],
  // game
  gameSpeedMillisecond: 30,
  gameSpeedCollisionBorder: 0.6,
  // map
  map: {
    numberBoss: 2,
    numberLevel: 6,
    possibility: 3,
    border: 10,
  },
};

export default Commons;
