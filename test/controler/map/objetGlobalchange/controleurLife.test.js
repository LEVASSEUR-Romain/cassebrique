import { playerLoseLife } from "./../../../../app/controler/objetGlobalchange/controleurLife.js";

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
