import {
  deleteShoot,
  emptyShoot,
  addShoot,
} from "../../../app/controler/objetGlobalchange/controleurShoot.js";

test("deleteShoot delete one Shoot", () => {
  const Shoot = [
    { x: 2, y: 5 },
    { x: 3, y: 5 },
    { x: 2, y: 6 },
  ];
  const deleteshoot = {
    x: 3,
    y: 5,
  };
  // retrun
  deleteShoot(deleteshoot, Shoot);
  const Shootfinal = [
    { x: 2, y: 5 },
    { x: 2, y: 6 },
  ];
  expect(Shoot).toEqual(Shootfinal);
});

test("emptyShoot", () => {
  const obj = {
    Shoot: [
      { x: 2, y: 5 },
      { x: 3, y: 5 },
      { x: 2, y: 6 },
    ],
  };
  emptyShoot(obj);
  //return
  const final = {
    Shoot: [],
  };
  expect(obj).toEqual(final);
});

test("addShoot", () => {
  const obj = {
    Shoot: [],
    Boss: {
      x: 2,
      height: 7,
      shootWidth: 2,
      shootHeight: 3,
      width: 10,
      shootColor: "red",
      shootSpeed: 2,
    },
    canvasPlay: {
      width: 500,
      height: 400,
    },
  };
  addShoot(obj);
  //return
  const final = {
    Shoot: [
      {
        color: "red",
        height: 3,
        speed: 2,
        width: 2,
        x: 27,
        y: 28,
      },
    ],
    Boss: {
      x: 2,
      height: 7,
      width: 10,
      shootWidth: 2,
      shootHeight: 3,
      shootColor: "red",
      shootSpeed: 2,
    },
    canvasPlay: {
      width: 500,
      height: 400,
    },
  };
  expect(obj).toEqual(final);
});
