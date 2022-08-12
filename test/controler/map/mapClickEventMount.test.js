import mapClickEventMount from "../../../app/controler/map/mapClickEventMount.js";
// change pxMap pyMap check controleurPlayerTest
const map = [
  [
    {
      id: 1,
      difficulty: 1,
      type: "mob",
      lvlX: 1,
      lvlY: 1,
      px: 17,
      py: 70,
      finish: false,
      parent: [0],
    },
    {
      id: 2,
      difficulty: 1,
      type: "mob",
      lvlX: 2,
      lvlY: 1,
      px: 50,
      py: 70,
      finish: false,
      parent: [0],
    },
    {
      id: 3,
      difficulty: 1,
      type: "mob",
      lvlX: 3,
      lvlY: 1,
      px: 83,
      py: 70,
      finish: false,
      parent: [0],
    },
  ],
  [
    {
      id: 4,
      difficulty: 1,
      type: "mob",
      lvlX: 1,
      lvlY: 2,
      px: 17,
      py: 50,
      finish: false,
      parent: [1],
    },
    {
      id: 5,
      difficulty: 1,
      type: "mob",
      lvlX: 2,
      lvlY: 2,
      px: 50,
      py: 50,
      finish: false,
      parent: [2],
    },
    {
      id: 6,
      difficulty: 1,
      type: "mob",
      lvlX: 3,
      lvlY: 2,
      px: 83,
      py: 50,
      finish: false,
      parent: [3],
    },
  ],
];

test("mapClickEventMount good click", () => {
  const event = {
    layerX: 256,
    layerY: 489,
  };
  const itemMap = JSON.parse(JSON.stringify(map));
  const Commons = {
    radiusItemMap: 3,
  };
  const Player = {
    height: 2,
    width: 20,
    color: "blue",
    life: 4,
    speed: 8,
    x: 0,
    y: 815.76,
    lvlY: 1,
    currentIdLvl: 1,
    lastClickLvl: false,
  };
  const canvasmap = {
    height: 927,
    width: 1454,
  };
  // add on objectGlobal
  const objectGlobal = {
    itemMapPosition: itemMap,
    Commons: Commons,
    Player: Player,
    canvasMap: canvasmap,
  };
  // return
  // id 4 difficulty 1
  const difficulty = 1;
  expect(mapClickEventMount(event, objectGlobal)).toEqual(itemMap[1][0]);
  // modification for player
  expect(Player.lastClickLvl).toEqual(true);
  expect(Player.currentIdLvl).toEqual(4);
  // modification for map for id : 1
  expect(itemMap[0][0].finish).toEqual(true);
});

test("mapClickEventMount bad click", () => {
  const event = {
    layerX: 256,
    layerY: 256,
  };
  const itemMap = JSON.parse(JSON.stringify(map));
  const Commons = {
    radiusItemMap: 3,
  };
  const Player = {
    height: 2,
    width: 20,
    color: "blue",
    life: 4,
    speed: 8,
    x: 0,
    y: 815.76,
    lvlY: 1,
    currentIdLvl: 1,
    lastClickLvl: false,
  };
  const canvasmap = {
    height: 927,
    width: 1454,
  };
  // add on objectGlobal
  const objectGlobal = {
    itemMapPosition: itemMap,
    Commons: Commons,
    Player: Player,
    canvasMap: canvasmap,
  };
  // return
  expect(mapClickEventMount(event, objectGlobal)).toEqual(false);
  // no modification for player
  expect(Player.lastClickLvl).toEqual(false);
  expect(Player.currentIdLvl).toEqual(1);
  expect(Player.pxMap).toEqual(undefined);
  expect(Player.pyMap).toEqual(undefined);
  // modification for map for id : 1
  expect(itemMap[0][0].finish).toEqual(false);
});

test("mapClickEventMount lastClickLvl true", () => {
  const event = {
    layerX: 256,
    layerY: 256,
  };
  const itemMap = JSON.parse(JSON.stringify(map));
  const Commons = {
    radiusItemMap: 3,
  };
  const Player = {
    height: 2,
    width: 20,
    color: "blue",
    life: 4,
    speed: 8,
    x: 0,
    y: 815.76,
    lvlY: 1,
    currentIdLvl: 1,
    lastClickLvl: true,
  };
  const canvasmap = {
    height: 927,
    width: 1454,
  };
  // add on objectGlobal
  const objectGlobal = {
    itemMapPosition: itemMap,
    Commons: Commons,
    Player: Player,
    canvasMap: canvasmap,
  };
  // return
  expect(mapClickEventMount(event, objectGlobal)).toEqual(false);
  // no modification for player
  expect(Player.lastClickLvl).toEqual(true);
  expect(Player.currentIdLvl).toEqual(1);
  expect(Player.pxMap).toEqual(undefined);
  expect(Player.pyMap).toEqual(undefined);
  // modification for map for id : 1
  expect(itemMap[0][0].finish).toEqual(false);
});
