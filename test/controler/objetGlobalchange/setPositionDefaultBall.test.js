import setPositionDefaultBall from "../../../app/controler/objetGlobalchange/setPositionDefaultBall.js";
test("setStart", () => {
  const obj = {
    Player: {
      x: 10,
      y: 200,
      width: 10,
    },
    canvasPlay: {
      height: 500,
      width: 500,
    },
    Ball: {
      radius: 5,
    },
  };
  setPositionDefaultBall(obj);
  expect(obj.Ball.x).toEqual(35);
  expect(obj.Ball.y).toEqual(175);
});
