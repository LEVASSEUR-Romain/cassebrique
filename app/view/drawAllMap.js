import { listMap } from "../model/listLoop/listDraw.js";
const drawAllMap = (objectGlobal) => {
  listMap.forEach((drawFunction) => {
    drawFunction(objectGlobal);
  });
};
export default drawAllMap;
