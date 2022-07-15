import resize from "./rezise/resize.js";

import drawAll from "./drawAll.js";
const drawAllRezise = (objectGlobal) => {
  resize(objectGlobal);
  //draw
  drawAll(objectGlobal);
};

export default drawAllRezise;
