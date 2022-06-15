import describeBrickForLevel from "./../../app/model/describeBrickForLevel.js";

test("brickforOne LEVEL", () => {
  const leveling = [
    {
      bricks: 1,
      numberBricks: 10,
    },
  ];
  window.innerWidth = 500;
  const commons = {
    bordeBrick: 0.4,
    brick: [
      {
        width: 8,
        height: 4,
      },
      {
        width: 8,
        height: 4,
      },
    ],
  };

  const out = [
    {
      id: [1],
      finish: false,
      level: 0,
      sumWidth: 420,
      nbBrick: [10],
    },
  ];
  expect(describeBrickForLevel(leveling, commons)).toEqual(out);
});

test("brick 1 for multi LEVEL", () => {
  const leveling = [
    {
      bricks: 1,
      numberBricks: 70,
    },
  ];
  window.innerWidth = 500;
  const commons = {
    bordeBrick: 0.4,
    brick: [
      {
        width: 8,
        height: 4,
      },
      {
        width: 8,
        height: 4,
      },
    ],
  };

  const out = [
    {
      id: [1],
      level: 0,
      sumWidth: 462,
      finish: true,
      nbBrick: [11],
    },
    {
      id: [1],
      level: 1,
      finish: true,
      sumWidth: 462,
      nbBrick: [11],
    },
    {
      id: [1],
      level: 2,
      finish: true,
      sumWidth: 462,
      nbBrick: [11],
    },
    {
      id: [1],
      level: 3,
      finish: true,
      sumWidth: 462,
      nbBrick: [11],
    },
    {
      id: [1],
      level: 4,
      finish: true,
      sumWidth: 462,
      nbBrick: [11],
    },
    {
      id: [1],
      level: 5,
      finish: true,
      sumWidth: 462,
      nbBrick: [11],
    },
    {
      id: [1],
      level: 6,
      finish: false,
      sumWidth: 168,
      nbBrick: [4],
    },
  ];
  expect(describeBrickForLevel(leveling, commons)).toEqual(out);
});

test("brick 1 and 2 other LEVEL", () => {
  const leveling = [
    {
      bricks: 1,
      numberBricks: 13,
    },
    {
      bricks: 2,
      numberBricks: 10,
    },
  ];
  window.innerWidth = 300;
  const commons = {
    bordeBrick: 0.667,
    brick: [
      {
        width: 16.667,
        height: 6.667,
      },
      {
        width: 10,
        height: 6.667,
      },
    ],
  };

  const out = [
    { id: [1], level: 0, finish: true, nbBrick: [5], sumWidth: 260 },
    { id: [1], level: 1, finish: true, sumWidth: 260, nbBrick: [5] },
    { id: [1, 2], level: 2, finish: true, sumWidth: 284, nbBrick: [3, 4] },
    { id: [2], level: 3, finish: false, sumWidth: 192, nbBrick: [6] },
  ];
  expect(describeBrickForLevel(leveling, commons)).toEqual(out);
});
