import positionInLevelBrick from "./../../../app/model/briksCreator/positionInLevelBrick.js";
test("2 bricks creation", () => {
  const leveling = [
    {
      bricks: 1,
      numberBricks: 2,
    },
  ];
  window.innerWidth = 500;
  window.innerHeight = 500;
  const commonsChange = {
    bordeBrick: 2,
    brick: [
      {
        width: 20,
        height: 10,
        life: 2,
        color: "green",
      },
    ],
  };
  const myresult = [
    { id: 1, x: 140, y: 0, life: 2, px: 28, py: 0 },
    { id: 1, x: 250, y: 0, life: 2, px: 50, py: 0 },
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
  window.innerWidth = 300;
  window.innerHeight = 500;
  const commonsChange = {
    bordeBrick: 1.667,
    brick: [
      {
        width: 16.667,
        height: 6.667,
        color: "green",
        life: 1,
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
  window.innerWidth = 300;
  window.innerHeight = 500;
  const commonsChange = {
    bordeBrick: 1.667,
    brick: [
      {
        width: 16.667,
        height: 6.667,
        color: "green",
      },
      {
        width: 16.667,
        height: 6.667,
        color: "red",
        life: 1,
      },
    ],
  };
  const myresult = [
    { x: 12.5, y: 0, id: 2, life: 1, px: 4, py: 0 },
    { x: 67.5, y: 0, id: 2, life: 1, px: 23, py: 0 },
    { x: 122.5, y: 0, id: 2, life: 1, px: 41, py: 0 },
    { x: 177.5, y: 0, id: 2, life: 1, px: 59, py: 0 },
    { x: 232.5, y: 0, id: 2, life: 1, px: 78, py: 0 },
    { x: 122.5, y: 42, id: 2, life: 1, px: 41, py: 8 },
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
  window.innerWidth = 300;
  window.innerHeight = 500;
  const commonsChange = {
    bordeBrick: 1.667,
    brick: [
      {
        width: 16.667,
        height: 6.667,
        color: "green",
        life: 1,
      },
      {
        width: 16.667,
        height: 6.667,
        color: "red",
        life: 2,
      },
    ],
  };
  const myresult = [
    { x: 12.5, y: 0, id: 2, life: 2, px: 4, py: 0 },
    { x: 67.5, y: 0, id: 2, life: 2, px: 23, py: 0 },
    { x: 122.5, y: 0, id: 2, life: 2, px: 41, py: 0 },
    { x: 177.5, y: 0, id: 2, life: 2, px: 59, py: 0 },
    { x: 232.5, y: 0, id: 2, life: 2, px: 78, py: 0 },
    { x: 67.5, y: 42, id: 2, life: 2, px: 23, py: 8 },
    { x: 122.5, y: 42, id: 1, life: 1, px: 41, py: 8 },
    { x: 177.5, y: 42, id: 1, life: 1, px: 59, py: 8 },
  ];
  expect(positionInLevelBrick(leveling, commonsChange)).toEqual(myresult);
});
