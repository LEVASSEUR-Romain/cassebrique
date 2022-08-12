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
        finish: false, // modification
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
    ],
  ];

  const finalMap = JSON.parse(JSON.stringify(itemMap));
  // change id 2
  finalMap[0][1].finish = true;
  const objectGlobal = {
    itemMapPosition: itemMap,
    Player: { currentIdLvl: 2 },
  };
  const thisTest = finishItemMap(objectGlobal);
  expect(objectGlobal.itemMapPosition).toEqual(finalMap);
});
