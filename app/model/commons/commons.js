const Commons = {
  // canvas
  backgroundCanvas: "white",
  borderMenu: 10, // %
  // joueur
  playerLoseLifeWitdh: 2,
  PlayerDefault: {
    height: 2, // %
    width: 20, // %
    color: "black",
    life: 4,
    speed: 5, // %
    //defaut recalculer dans rezise
    x: 0,
    y: 0,
    // position on map default
    pxMap: 47.5,
    pyMap: 90,
    passiveBonus: [],
    //map controleur
    // level du boss lvly=4 currentId =10
    lvlY: 0,
    currentIdLvl: 0,
    lastClickLvl: false,
  },
  // ball
  BallDefault: {
    radiusHeight: 3, // %
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
  // warning order
  brick: [
    {
      width: 10, //%
      height: 10, //%
      color: ["red"],
      life: 1,
    },

    {
      width: 10, //%
      height: 10, //%
      color: ["red", "green"],
      life: 2,
    },
    {
      width: 20, //%
      height: 10, //%
      color: ["red", "green", "yellow"],
      life: 3,
    },
  ],
  // game
  gameSpeedMillisecond: 30,
  gameSpeedCollisionBorder: 0.5,
  // map
  backgroundMap: "white",
  borderMapTopBottom: 5, //%
  radiusItemMap: 3, //%
  widthPlayerMap: 5, //%
  heightPlayerMap: 5, //%
  colorPlayerMap: "black",
  // links
  colorLinksMap: "#9b9b9b",
  colorLinksMapBorder: "#2e1009",
  widthLinksMap: 3,
  //passive
  choiceOfPassive: 3,
  // healper
  interrogationBorder: 2, // %
  interrogationRadius: 5, //%
  // you can change color on view map
};

export default Commons;
