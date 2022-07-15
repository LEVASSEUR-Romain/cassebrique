import intRandomOnListUnique from "../../app/tools/intRandomOnListUnique.js";
const tcheckList = (list, min, max) => {
  for (let i = 0; i < list.length; i++) {
    // il est dans la range
    if (!(min <= list[i] && list[i] <= max)) {
      // il ne se repete pas
      for (let j = i; j < list.length; j++) {
        if (list[i] === list[j]) {
          return false;
        }
      }
    }
  }
  return true;
};
test("intRandomOnListUnique search unique random", () => {
  const min = 0;
  const max = 10;
  const nb = 3;
  const listRandom = intRandomOnListUnique(min, max, nb);

  expect(listRandom.length).toEqual(nb);
  expect(tcheckList(listRandom, min, max)).toEqual(true);
  // si pas assez de nombre dans la range
  expect(intRandomOnListUnique(0, 3, 4)).toEqual([]);
});
