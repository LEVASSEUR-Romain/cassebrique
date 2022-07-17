import setStart from "../../../../app/controler/objetGlobalchange/setStart.js";

test("setStart", () => {
  const obj = {
    start: true,
  };
  setStart(obj, true);
  expect(obj.start).toEqual(true);
  setStart(obj, false);
  expect(obj.start).toEqual(false);
});
