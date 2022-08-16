const map1 = [
  [
    {
      id: 1,
      difficulty: 3,
      type: "boss",
      bonus: false,
      parent: [0],
    },
  ],
  [
    {
      id: 2,
      difficulty: 2,
      type: "mob",
      bonus: false,
      parent: [1],
    },
  ],
  [
    {
      id: 3,
      difficulty: 2,
      type: "camp",
      bonus: false,
      parent: [2],
    },
  ],
  [
    {
      id: 4,
      difficulty: 3,
      type: "boss",
      bonus: false,
      parent: [3],
    },
    {
      id: 5,
      difficulty: 4,
      type: "mob",
      bonus: false,
      parent: [3],
    },
  ],
  [
    {
      id: 6,
      difficulty: 2,
      type: "camp",
      bonus: false,
      parent: [4],
    },
    {
      id: 7,
      difficulty: 5,
      type: "mob",
      bonus: false,
      parent: [5],
    },
  ],
  [{ id: 8, difficulty: 1, type: "boss", bonus: false, parent: [6, 7] }],
];

/* const map1 = [
  [
    {
      id: 1,
      difficulty: 2,
      type: "camp",
      bonus: false,
      parent: [0],
    },
    {
      id: 2,
      difficulty: 3,
      type: "boss",
      bonus: true,
      parent: [0],
    },
    {
      id: 3,
      difficulty: 1,
      type: "mob",
      bonus: false,
      parent: [0],
    },
  ],
  [
    {
      id: 4,
      difficulty: 2,
      type: "mob",
      bonus: false,
      parent: [1],
    },
    {
      id: 5,
      difficulty: 2,
      type: "mob",
      bonus: false,
      parent: [2],
    },
    {
      id: 6,
      difficulty: 3,
      type: "mob",
      bonus: false,
      parent: [3],
    },
  ],
  [
    {
      id: 7,
      difficulty: 6,
      type: "mob",
      bonus: true,
      parent: [4, 5],
    },
    {
      id: 8,
      difficulty: 3,
      type: "mob",
      bonus: true,
      parent: [5, 6],
    },
  ],
  [
    {
      id: 9,
      difficulty: 3,
      type: "mob",
      bonus: false,
      parent: [7],
    },
    {
      id: 10,
      difficulty: 3,
      type: "mob",
      bonus: false,
      parent: [7, 8],
    },
    {
      id: 11,
      difficulty: 3,
      type: "mob",
      bonus: false,
      parent: [8],
    },
  ],
  [{ id: 12, difficulty: 1, type: "boss", bonus: false, parent: [9, 10, 11] }],
]; */

export default map1;
