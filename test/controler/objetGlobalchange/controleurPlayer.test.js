import {
  setPositionDefaultPlayer,
  playerLoseLife,
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
