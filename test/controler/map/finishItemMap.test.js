import finishItemMap from "../../../app/controler/map/finishItemMap.js";

test("finishItemMap change id 2", () => {
  const itemMap = [
    [
      {
        id: 1,
        difficulty: 1,
        type: "mob",
        lvlX: 1,
        lvlY: 1,
        px: 17,
        py: 70,
        finish: false,
        parent: [0],
      },
      {
        id: 2,
        difficulty: 1,
        type: "mob",
        lvlX: 2,
        lvlY: 1,
        px: 50,
        py: 70,
        finish: false,
        parent: [0],
      },
      {
        id: 3,
        difficulty: 1,
        type: "mob",
        lvlX: 3,
        lvlY: 1,
        px: 83,
        py: 70,
        finish: false,
        parent: [0],
      },
    ],
    [
      {
        id: 4,
        difficulty: 1,
        type: "mob",
        lvlX: 1,
        lvlY: 2,
        px: 17,
        py: 50,
        finish: false,
        parent: [1],
      },
      {
        id: 5,
        difficulty: 1,
        type: "mob",
        lvlX: 2,
        lvlY: 2,
        px: 50,
        py: 50,
        finish: false,
        parent: [2],
      },
      {
        id: 6,
        difficulty: 1,
        type: "mob",
        lvlX: 3,
        lvlY: 2,
        px: 83,
        py: 50,
        finish: false,
        parent: [3],
      },
    ],
  ];
  const id = 2;
  const final = [
    [
      {
        id: 1,
        difficulty: 1,
        type: "mob",
        lvlX: 1,
        lvlY: 1,
        px: 17,
        py: 70,
        finish: false,
        parent: [0],
      },
      {
        id: 2,
        difficulty: 1,
        type: "mob",
        lvlX: 2,
        lvlY: 1,
        px: 50,
        py: 70,
        finish: true, // modification
        parent: [0],
      },
      {
        id: 3,
        difficulty: 1,
        type: "mob",
        lvlX: 3,
        lvlY: 1,
        px: 83,
        py: 70,
        finish: false,
        parent: [0],
      },
    ],
    [
      {
        id: 4,
        difficulty: 1,
        type: "mob",
        lvlX: 1,
        lvlY: 2,
        px: 17,
        py: 50,
        finish: false,
        parent: [1],
      },
      {
        id: 5,
        difficulty: 1,
        type: "mob",
        lvlX: 2,
        lvlY: 2,
        px: 50,
        py: 50,
        finish: false,
        parent: [2],
      },
      {
        id: 6,
        difficulty: 1,
        type: "mob",
        lvlX: 3,
        lvlY: 2,
        px: 83,
        py: 50,
        finish: false,
        parent: [3],
      },
    ],
  ];
  finishItemMap(id, itemMap);
  expect(itemMap).toEqual(final);
});

test("finishItemMap no changement", () => {
  const itemMap = [
    [
      {
        id: 1,
        difficulty: 1,
        type: "mob",
        lvlX: 1,
        lvlY: 1,
        px: 17,
        py: 70,
        finish: false,
        parent: [0],
      },
    ],
  ];
  const id = 0;
  const final = [
    [
      {
        id: 1,
        difficulty: 1,
        type: "mob",
        lvlX: 1,
        lvlY: 1,
        px: 17,
        py: 70,
        finish: false,
        parent: [0],
      },
    ],
  ];
  finishItemMap(id, itemMap);
  expect(itemMap).toEqual(final);
});
