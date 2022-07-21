import {
  transformBallToArray,
  addBallOnArray,
  deleteBallOnArray,
  ballOnArrayDefault,
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

test("addBallOnArray", () => {
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
  addBallOnArray(obj, x, y, 0, 1);
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

test("deleteBallOnArray", () => {
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
  deleteBallOnArray(obj, obj.Ball[1]);
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
// delete All and remake default
test("ballOnArrayDefault", () => {
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
    Ball: [
      {
        radiusHeight: 3, // %
        color: "black",
        angleDirectionX: 0,
        angleDirectionY: -1,
        speed: 2,
        x: 10,
        y: 20,
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
  ballOnArrayDefault(obj);
  // return
  const finish = {
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
  expect(obj.Ball).toEqual(finish.Ball);
  // if not array no change
  const finish2 = {
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
  ballOnArrayDefault(finish);
  expect(finish).toEqual(finish2);
});
