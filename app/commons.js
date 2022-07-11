const Commons = {
  // canvas
  backgroundCanvas: "white",
  borderMenu: 10, // %
  // joueur
  PlayerDefault: {
    height: 2, // %
    width: 20, // %
    color: "blue",
    life: 4,
    speed: 8, // %
    //defaut recalculer dans rezise
    x: 0,
    y: 0,
    //map controleur
    lvlY: 1,
    currentIdLvl: 1,
    lastClickLvl: false,
  },
  // ball
  BallDefault: {
    radius: 2, // %
    color: "black",
    angleDirectionX: 0,
    angleDirectionY: -1,
    speed: 2, // %
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
  gameSpeedCollisionBorder: 0.5,
  // map
  backgroundMap: "white",
  borderMapTopBottom: 5, //%
  radiusItemMap: 3, //%
  colorLinksMap: "black",
  widthLinksMap: 2,
  mapColorDifficulty: ["red", "green"],
};

export default Commons;
