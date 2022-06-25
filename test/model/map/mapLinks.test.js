import mapLinks from "../../../app/model/map/mapLinks.js";
test("test vide", () => {
  const map = [
    [
      { id: 1, difficulty: 1, type: "mob", px: 17, py: 70, parent: [0] },
      { id: 2, difficulty: 1, type: "mob", px: 50, py: 70, parent: [0] },
      { id: 3, difficulty: 1, type: "mob", px: 83, py: 70, parent: [0] },
    ],
  ];
  const result = [];
  expect(mapLinks(map)).toEqual(result);
});
test("simple exemple", () => {
  const map = [
    [
      { id: 1, difficulty: 1, type: "mob", px: 17, py: 70, parent: [0] },
      { id: 2, difficulty: 1, type: "mob", px: 50, py: 70, parent: [0] },
      { id: 3, difficulty: 1, type: "mob", px: 83, py: 70, parent: [0] },
    ],
    [
      { id: 4, difficulty: 1, type: "mob", px: 17, py: 41, parent: [1] },
      { id: 5, difficulty: 1, type: "mob", px: 50, py: 41, parent: [2] },
      { id: 6, difficulty: 1, type: "mob", px: 83, py: 41, parent: [3] },
    ],
  ];
  const result = [
    { pix: 17, piy: 41, pfx: 17, pfy: 70 },
    { pix: 50, piy: 41, pfx: 50, pfy: 70 },
    { pix: 83, piy: 41, pfx: 83, pfy: 70 },
  ];
  expect(mapLinks(map)).toEqual(result);
});

test("double links", () => {
  const map = [
    [
      { id: 0, difficulty: 1, type: "mob", px: 17, py: 70, parent: [0] },
      { id: 1, difficulty: 1, type: "mob", px: 50, py: 70, parent: [0] },
      { id: 2, difficulty: 1, type: "mob", px: 83, py: 70, parent: [0] },
    ],
    [
      { id: 3, difficulty: 1, type: "mob", px: 17, py: 41, parent: [0] },
      { id: 4, difficulty: 1, type: "mob", px: 50, py: 41, parent: [1] },
      { id: 5, difficulty: 1, type: "mob", px: 83, py: 41, parent: [2] },
    ],
    [
      { id: 6, difficulty: 1, type: "mob", px: 25, py: 11, parent: [3, 4] },
      { id: 7, difficulty: 1, type: "mob", px: 75, py: 11, parent: [4, 5] },
    ],
  ];
  const result = [
    { pix: 25, piy: 11, pfx: 17, pfy: 41 },
    { pix: 25, piy: 11, pfx: 50, pfy: 41 },
    { pix: 75, piy: 11, pfx: 50, pfy: 41 },
    { pix: 75, piy: 11, pfx: 83, pfy: 41 },
    { pix: 50, piy: 41, pfx: 50, pfy: 70 },
    { pix: 83, piy: 41, pfx: 83, pfy: 70 },
  ];
  expect(mapLinks(map)).toEqual(result);
});
