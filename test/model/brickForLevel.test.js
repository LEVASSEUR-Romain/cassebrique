import brickForLevel from "../../app/model/brickForLevel";

test("brickforOne LEVEL", () => {
  const leveling = [
    {
      bricks: 1,
      numberBricks: 10,
    },
  ];
  const commons = {
    canvasWidth: 500,
    bordeBrick: 2,
    brick: [
      {
        with: 40,
        height: 20,
      },
      {
        with: 40,
        height: 20,
      },
    ],
  };

  const out = [
    {
      id: [1],
      level: 0,
      nbBrick: [10],
    },
  ];
  expect(brickForLevel(leveling, commons)).toEqual(out);
});

test("brick 1 for multi LEVEL", () => {
  const leveling = [
    {
      bricks: 1,
      numberBricks: 70,
    },
  ];
  const commons = {
    canvasWidth: 500,
    bordeBrick: 2,
    brick: [
      {
        with: 40,
        height: 20,
      },
      {
        with: 40,
        height: 20,
      },
    ],
  };

  const out = [
    {
      id: [1],
      level: 0,
      nbBrick: [11],
    },
    {
      id: [1],
      level: 1,
      nbBrick: [11],
    },
    {
      id: [1],
      level: 2,
      nbBrick: [11],
    },
    {
      id: [1],
      level: 3,
      nbBrick: [11],
    },
    {
      id: [1],
      level: 4,
      nbBrick: [11],
    },
    {
      id: [1],
      level: 5,
      nbBrick: [11],
    },
    {
      id: [1],
      level: 6,
      nbBrick: [4],
    },
  ];
  expect(brickForLevel(leveling, commons)).toEqual(out);
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
  const commons = {
    canvasWidth: 300,
    bordeBrick: 2,
    brick: [
      {
        with: 50,
        height: 20,
      },
      {
        with: 30,
        height: 20,
      },
    ],
  };

  const out = [
    { id: [1], level: 0, nbBrick: [5] },
    {
      id: [1],
      level: 1,
      nbBrick: [5],
    },
    {
      id: [1, 2],
      level: 2,
      nbBrick: [3, 4],
    },
    {
      id: [2],
      level: 3,
      nbBrick: [6],
    },
  ];
  expect(brickForLevel(leveling, commons)).toEqual(out);
});
