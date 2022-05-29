/* import level from "../../model/level.js";
import commons from "../../model/commons.js";

test("2 bricks creation", () => {
  const leveling = [
    {
      bricks: 1,
      numberBricks: 2,
    },
  ];
  const brick = commons.brick[0];
  const myresult = [
    [brick.canvasWidth / 2 - brick.width - brick.bordeBrick / 2, 0, 1][
      (brick.canvasWidth / 2 + brick.width + brick.bordeBrick / 2, 0, 1)
    ],
  ];
  expect(level(leveling, commons)).toEqual(myresult);
});
test("nombre de brick a 0", () => {
  const leveling = [
    {
      bricks: 1,
      numberBricks: 0,
    },
    {
      bricks: 2,
      numberBricks: 0,
    },
    {
      bricks: 3,
      numberBricks: 0,
    },
    {
      bricks: 4,
      numberBricks: 0,
    },
  ];
  expect(level(leveling, commons)).toEqual([]);
});
test("depacement du nombre de brique en x", () => {
  const leveling = [
    {
      bricks: 2,
      numberBricks: 8,
    },
  ];
  const commonsChange = {
    width: 294,
    bordeBrick: 2,
    brick: [
      {
        with: 40,
        height: 20,
        color: "green",
      },
      ,
      {
        with: 40,
        height: 20,
        color: "red",
      },
    ],
  };
  const myresult = [
    [0, 0, 2],
    [84, 0, 2],
    [126, 0, 2],
    [168, 0, 2],
    [210, 0, 2],
    [252, 0, 2],
    [126, 22, 2],
    [168, 22, 2],
  ];
  expect(level(leveling, commonsChange)).toEqual(myresult);
});

test("les briques le plus fort en premier", () => {
  const leveling = [
    {
      bricks: 1,
      numberBricks: 2,
    },
    {
      bricks: 2,
      numberBricks: 6,
    },
  ];
  const commonsChange = {
    canvasWidth: 108,
    bordeBrick: 2,
    brick: [
      {
        with: 40,
        height: 20,
        color: "green",
      },
      ,
      {
        with: 40,
        height: 20,
        color: "red",
      },
    ],
  };
  const myresult = [
    [0, 0, 2],
    [42, 0, 2],
    [64, 0, 2],
    [86, 0, 2],
    [108, 0, 2],
    [0, 22, 1],
    [42, 22, 1],
  ];
  expect(level(leveling, commonsChange)).toEqual(myresult);
});
 */
