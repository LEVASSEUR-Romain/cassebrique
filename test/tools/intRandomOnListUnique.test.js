import intRandomOnListUnique from "../../app/tools/intRandomOnListUnique.js";

test("intRandomOnListUnique search unique random", () => {
  const min = 0;
  const max = 10;
  const nb = 3;
  const listRandom = intRandomOnListUnique(min, max, nb);
  const tcheckList = (list, min, max) => {
    for (let i = 0; i < list.length; i++) {
      if (min >= list[i] && list[i] >= max) {
        return false;
      }
    }
    return true;
  };
  expect(listRandom.length).toEqual(nb);
  expect(tcheckList(listRandom)).toEqual(true);
  // si pas assez de nombre
  expect(intRandomOnListUnique(0, 3, 4)).toEqual([]);
});
