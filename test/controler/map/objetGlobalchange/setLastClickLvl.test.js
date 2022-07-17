import setLastClickLvl from "../../../../app/controler/objetGlobalchange/setLastClickLvl.js";

test("setLastClickLvl", () => {
  const obj = {
    Player: {
      lastClickLvl: true,
    },
  };
  setLastClickLvl(obj, true);
  expect(obj.Player.lastClickLvl).toEqual(true);
  setLastClickLvl(obj, false);
  expect(obj.Player.lastClickLvl).toEqual(false);
});
