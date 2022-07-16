import {
  listMap,
  listGameDefault,
  listBoss1,
} from "../../model/listLoop/listDraw.js";

export const addListDraw = (objectGlobal, type) => {
  switch (type) {
    case "gameDefault":
      listGameDefault.forEach((draw) => objectGlobal.listDraw.push(draw));
      break;
    case "boss1":
      listBoss1.forEach((draw) => objectGlobal.listDraw.push(draw));
      break;
  }
};

export const removeListDraw = (objectGlobal, type) => {
  switch (type) {
    case "gameDefault":
      const filtreGame = objectGlobal.listDraw.filter((func) => {
        const validate = !listGameDefault.includes(func);
        return validate;
      });
      objectGlobal.listDraw = filtreGame;
      break;
    case "boss1":
      const filtreBoss1 = objectGlobal.listDraw.filter((func) => {
        const validate = !listBoss1.includes(func);
        return validate;
      });
      objectGlobal.listDraw = filtreBoss1;
      break;
  }
};

export const removeAllDraw = (objectGlobal) => {
  objectGlobal.listDraw = [];
};
