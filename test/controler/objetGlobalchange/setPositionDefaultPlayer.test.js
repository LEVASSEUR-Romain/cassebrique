import setPositionDefaultPlayer from "../../../app/controler/objetGlobalchange/setPositionDefaultPlayer.js";

test("setStart", () => {
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
