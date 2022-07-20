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
    speed: 2, // %
    //defaut recalculer dans rezise
    x: 0,
    y: 0,
    pxMap: 0,
    pyMap: 0,
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
  radiusPlayer: 1.5, //%
  colorPlayerMap: "black",
  colorLinksMap: "black",
  colorFinishRound: "blue",
  widthLinksMap: 2,
  mapColorDifficulty: [
    {
      type: "easy",
      color: "#ffc9c9",
    },
    {
      type: "bonus",
      color: "#fa5252",
      emoji: "\ud83c\udf81",
      //raidushalo: 1, //%,
    },
    {
      type: "boss",
      color: "#c92a2a",
    },
  ],
  // affichage passif choix
  choiceOfPassive: 3,
};

export default Commons;
