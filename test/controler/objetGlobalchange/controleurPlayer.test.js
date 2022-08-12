import {
  setPositionDefaultPlayer,
  playerLoseLife,
  setPositioMapPlayer,
} from "./../../../app/controler/objetGlobalchange/controleurPlayer.js";

test("setPositionDefaultPlayer", () => {
  const obj = {
    Player: {
      x: 10,
      y: 10,
      height: 10,
    },
    canvasPlay: {
      height: 10,
    },
  };
  setPositionDefaultPlayer(obj);
  expect(obj.Player.x).toEqual(0);
  expect(obj.Player.y).toEqual(9);
});

test("playerLoseLife", () => {
  const obj = {
    Player: {
      life: 5,
      width: 20,
    },
    Commons: {
      playerLoseLifeWitdh: 5,
    },
  };
  playerLoseLife(obj);
  // return
  const final = {
    Player: {
      life: 4,
      width: 15,
    },
    Commons: {
      playerLoseLifeWitdh: 5,
    },
  };
  expect(obj).toEqual(final);
});

test("setPositioMapPlayer", () => {
  const obj = {
    Player: {
      pxMap: 10,
      pyMap: 10,
    },
    Commons: {
      radiusItemMap: 3,
    },
  };
  const elementCible = {
    px: 10,
    py: 10,
  };
  setPositioMapPlayer(obj, elementCible);
  expect(obj.Player.pxMap).toEqual(10 - 3 * obj.Commons.radiusItemMap);
  expect(obj.Player.pyMap).toEqual(10 - obj.Commons.radiusItemMap);
});
