import isFinishMap from "../../../app/controler/map/isFinishMap.js";

test("isFinishMap true", () => {
  const obj = {
    itemMapPosition: [
      [
        {
          id: 1,
          difficulty: 1,
          type: "mob",
          lvlX: 1,
          lvlY: 1,
          px: 17,
          py: 70,
          finish: true,
          parent: [0],
        },
      ],
      [
        {
          id: 2,
          difficulty: 1,
          type: "mob",
          lvlX: 1,
          lvlY: 2,
          px: 17,
          py: 50,
          finish: true,
          parent: [1],
        },
      ],
    ],
  };
  expect(isFinishMap(obj)).toEqual(true);
});

test("isFinishMap false", () => {
  const obj = {
    itemMapPosition: [
      [
        {
          id: 1,
          difficulty: 1,
          type: "mob",
          lvlX: 1,
          lvlY: 1,
          px: 17,
          py: 70,
          finish: true,
          parent: [0],
        },
      ],
      [
        {
          id: 2,
          difficulty: 1,
          type: "mob",
          lvlX: 1,
          lvlY: 2,
          px: 17,
          py: 50,
          finish: false,
          parent: [1],
        },
      ],
    ],
  };
  expect(isFinishMap(obj)).toEqual(false);
});
