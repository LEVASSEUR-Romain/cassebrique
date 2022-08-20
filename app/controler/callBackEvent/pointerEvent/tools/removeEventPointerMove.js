const removeEventPointerMove = (objectGlobal) => {
  const index = objectGlobal.listEvent.findIndex(
    (find) => find.name === "gamePointerMove"
  );
  objectGlobal.canvasPlay.removeEventListener(
    "pointermove",
    objectGlobal.listEvent[index]
  );
  objectGlobal.listEvent.splice(index, 1);
};
export default removeEventPointerMove;
