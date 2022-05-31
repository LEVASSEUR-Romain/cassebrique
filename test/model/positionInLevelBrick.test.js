import positionInLevelBrick from "./../../app/model/positionInLevelBrick.js";

test("2 bricks creation", () => {
  const leveling = [
    {
      bricks: 1,
      numberBricks: 2,
    },
  ];
  const commonsChange = {
    canvasWidth: 300,
    bordeBrick: 5,
    brick: [
      {
        width: 50,
        height: 20,
        color: "green",
      },
    ],
  };
  const myresult = [
    { id: 1, x: 95, y: 0 },
    { id: 1, x: 150, y: 0 },
  ];
  expect(positionInLevelBrick(leveling, commonsChange)).toEqual(myresult);
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
  const commonsChange = {
    canvasWidth: 300,
    bordeBrick: 5,
    brick: [
      {
        width: 50,
        height: 20,
        color: "green",
      },
    ],
  };
  expect(positionInLevelBrick(leveling, commonsChange)).toEqual([]);
});
test("depacement du nombre de brique en x", () => {
  const leveling = [
    {
      bricks: 2,
      numberBricks: 6,
    },
  ];
  const commonsChange = {
    canvasWidth: 300,
    bordeBrick: 5,
    brick: [
      {
        width: 50,
        height: 20,
        color: "green",
      },
      {
        width: 50,
        height: 20,
        color: "red",
      },
    ],
  };
  const myresult = [
    { x: 12.5, y: 0, id: 2 },
    { x: 67.5, y: 0, id: 2 },
    { x: 122.5, y: 0, id: 2 },
    { x: 177.5, y: 0, id: 2 },
    { x: 232.5, y: 0, id: 2 },
    { x: 122.5, y: 25, id: 2 },
  ];
  expect(positionInLevelBrick(leveling, commonsChange)).toEqual(myresult);
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
    canvasWidth: 300,
    bordeBrick: 5,
    brick: [
      {
        width: 50,
        height: 20,
        color: "green",
      },
      {
        width: 50,
        height: 20,
        color: "red",
      },
    ],
  };
  const myresult = [
    { x: 12.5, y: 0, id: 2 },
    { x: 67.5, y: 0, id: 2 },
    { x: 122.5, y: 0, id: 2 },
    { x: 177.5, y: 0, id: 2 },
    { x: 232.5, y: 0, id: 2 },
    { x: 67.5, y: 25, id: 2 },
    { x: 122.5, y: 25, id: 1 },
    { x: 177.5, y: 25, id: 1 },
  ];
  expect(positionInLevelBrick(leveling, commonsChange)).toEqual(myresult);
});
