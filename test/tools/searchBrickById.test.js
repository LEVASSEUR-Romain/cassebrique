import searchLvlById from "../../app/tools/searchLvlById.js";
const listLvl = [
  [
    {
      id: 1,
      difficulty: 1,
      type: "mob",
      lvlX: 1,
      lvlY: 1,
      px: 17,
      py: 74,
      finish: false,
      bonus: false,
      parent: [0],
    },
    {
      id: 2,
      difficulty: 3,
      type: "mob",
      lvlX: 2,
      lvlY: 1,
      px: 50,
      py: 74,
      finish: false,
      bonus: true,
      parent: [0],
    },
    {
      id: 3,
      difficulty: 1,
      type: "mob",
      lvlX: 3,
      lvlY: 1,
      px: 83,
      py: 74,
      finish: false,
      bonus: false,
      parent: [0],
    },
  ],
  [
    {
      id: 4,
      difficulty: 2,
      type: "mob",
      lvlX: 1,
      lvlY: 2,
      px: 17,
      py: 58,
      finish: false,
      bonus: false,
      parent: [1],
    },
    {
      id: 5,
      difficulty: 2,
      type: "mob",
      lvlX: 2,
      lvlY: 2,
      px: 50,
      py: 58,
      finish: false,
      bonus: false,
      parent: [2],
    },
    {
      id: 6,
      difficulty: 3,
      type: "mob",
      lvlX: 3,
      lvlY: 2,
      px: 83,
      py: 58,
      finish: false,
      bonus: false,
      parent: [3],
    },
  ],
  [
    {
      id: 7,
      difficulty: 6,
      type: "mob",
      lvlX: 1,
      lvlY: 3,
      px: 25,
      py: 42,
      finish: false,
      bonus: true,
      parent: [4, 5],
    },
    {
      id: 8,
      difficulty: 3,
      type: "mob",
      lvlX: 2,
      lvlY: 3,
      px: 75,
      py: 42,
      finish: false,
      bonus: true,
      parent: [5, 6],
    },
  ],
  [
    {
      id: 9,
      difficulty: 3,
      type: "mob",
      lvlX: 1,
      lvlY: 4,
      px: 17,
      py: 26,
      finish: false,
      bonus: false,
      parent: [7],
    },
    {
      id: 10,
      difficulty: 3,
      type: "mob",
      lvlX: 2,
      lvlY: 4,
      px: 50,
      py: 26,
      finish: false,
      bonus: false,
      parent: [7, 8],
    },
    {
      id: 11,
      difficulty: 3,
      type: "mob",
      lvlX: 3,
      lvlY: 4,
      px: 83,
      py: 26,
      finish: false,
      bonus: false,
      parent: [8],
    },
  ],
  [
    {
      id: 12,
      difficulty: 4,
      type: "boss",
      lvlX: 1,
      lvlY: 5,
      px: 50,
      py: 10,
      finish: false,
      bonus: false,
      parent: [9, 10, 11],
    },
  ],
];

test("searchBrickById search id good", () => {
  // test 1 => id = 1 in listLvl [0][0]
  expect(searchLvlById(listLvl, 1)).toEqual(listLvl[0][0]);
  // test 2 => id = 8 in listLvl [2][1]
  expect(searchLvlById(listLvl, 8)).toEqual(listLvl[2][1]);
});

test("searchBrickById search id not good", () => {
  // test 1 => id = 15 not exist
  expect(searchLvlById(listLvl, 15)).toEqual(false);
});
