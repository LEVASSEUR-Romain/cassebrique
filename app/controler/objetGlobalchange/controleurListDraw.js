import { listMap, listGameDefault } from "../../model/listLoop/listDraw.js";

export const addListDraw = (objectGlobal, type) => {
  switch (type) {
    case "gameDefault":
      listGameDefault.forEach((draw) => objectGlobal.listDraw.push(draw));
      break;
  }
};

export const removeListDraw = (objectGlobal) => {};
