import {
  addListDraw,
  removeAllDraw,
} from "./../../../../app/controler/objetGlobalchange/controleurListDraw.js";
import {
  listGameDefault,
  listBoss1,
} from "./../../../../app//model/listLoop/listDraw.js";

test("addListDraw", () => {
  const objDefault = { listDraw: [] };
  addListDraw(objDefault, "gameDefault");
  const objBoss = { listDraw: [] };
  addListDraw(objBoss, "boss1");
  // return
  const finalDefault = {
    listDraw: listGameDefault,
  };
  const finalBoss = {
    listDraw: listBoss1,
  };
  expect(objDefault).toEqual(finalDefault);
  expect(objBoss).toEqual(finalBoss);
});

test("removeAllDraw", () => {
  const obj = {
    listDraw: listGameDefault,
  };
  removeAllDraw(obj);
  // return
  const final = {
    listDraw: [],
  };
  expect(obj).toEqual(final);
});
