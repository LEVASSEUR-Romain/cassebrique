const drawAll = (objectGlobal) => {
  objectGlobal.listDraw.forEach((drawFunction) => {
    drawFunction(objectGlobal);
  });
};
export default drawAll;
