import {
  transformBallToArray,
  addBallOnarray,
  deleteBallOnarray,
} from "./../../../app/controler/objetGlobalchange/constroleurBall.js";

test("transformBallToArray", () => {
  const obj = {
    Ball: {
      radiusHeight: 3, // %
      color: "black",
      angleDirectionX: 0,
      angleDirectionY: -1,
      speed: 2,
      x: 0,
      y: 0,
    },
  };
  transformBallToArray(obj);
  // return
  const finish = [
    {
      radiusHeight: 3, // %
      color: "black",
      angleDirectionX: 0,
      angleDirectionY: -1,
      speed: 2,
      x: 0,
      y: 0,
    },
  ];
  expect(obj.Ball).toEqual(finish);
});

test("addBallOnarray", () => {
  const obj = {
    Commons: {
      BallDefault: {
        radiusHeight: 3,
        color: "black",
        angleDirectionX: 0,
        angleDirectionY: -1,
        speed: 2,
        x: 0,
        y: 0,
      },
    },
    Ball: [],
  };
  const x = 10;
  const y = 20;
  addBallOnarray(obj, x, y, 0, 1);
  // return
  const finish = [
    {
      radiusHeight: 3,
      color: "black",
      angleDirectionX: 0,
      angleDirectionY: 1,
      speed: 2,
      x: 10,
      y: 20,
    },
  ];
  expect(obj.Ball).toEqual(finish);
});

test("deleteBallOnarray", () => {
  const obj = {
    Ball: [
      {
        radiusHeight: 3, // %
        color: "black",
        angleDirectionX: 0,
        angleDirectionY: -1,
        speed: 2,
        x: 0,
        y: 0,
      },
      {
        radiusHeight: 3, // %
        color: "black",
        angleDirectionX: 1,
        angleDirectionY: -1,
        speed: 2,
        x: 10,
        y: 20,
      },
    ],
  };
  //delete 1
  deleteBallOnarray(obj, obj.Ball[1]);
  // return
  const finish = {
    Ball: [
      {
        radiusHeight: 3, // %
        color: "black",
        angleDirectionX: 0,
        angleDirectionY: -1,
        speed: 2,
        x: 0,
        y: 0,
      },
    ],
  };
  expect(obj).toEqual(finish);
});
