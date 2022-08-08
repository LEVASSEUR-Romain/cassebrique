import {
  listMap,
  listGameDefault,
  listBoss1,
  listBoss2,
  listBoss3,
} from "../../model/listLoop/listDraw.js";
/**
 *
 * @param {Object} objectGlobal
 * @param {string} type
 * @type: map, gameDefault, boss1 , boss2
 */
export const addListDraw = (objectGlobal, type) => {
  switch (type) {
    case "map":
      listMap.forEach((draw) => objectGlobal.listDraw.push(draw));
    case "gameDefault":
      listGameDefault.forEach((draw) => objectGlobal.listDraw.push(draw));
      break;
    case "boss1":
      listBoss1.forEach((draw) => objectGlobal.listDraw.push(draw));
      break;
    case "boss2":
      listBoss2.forEach((draw) => objectGlobal.listDraw.push(draw));
      break;
    case "boss3":
      listBoss3.forEach((draw) => objectGlobal.listDraw.push(draw));
      break;
  }
};

/* export const removeListDraw = (objectGlobal, type) => {
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
}; */

export const removeAllDraw = (objectGlobal) => {
  objectGlobal.listDraw = [];
};

export const isEmptyDraw = (objectGlobal) => {
  return objectGlobal.listDraw.length === 0;
};
