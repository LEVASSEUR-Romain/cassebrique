export const deleteShoot = (shootToDelete, ListShoot) => {
  const index = ListShoot.findIndex(
    (element) => element.x === shootToDelete.x && element.y === shootToDelete.y
  );
  ListShoot.splice(index, 1);
};

export const emptyShoot = (objectGlobal) => {
  objectGlobal.Shoot = [];
};

export const addShoot = (objectGlobal) => {
  const { Boss, canvasPlay } = objectGlobal;
  objectGlobal.Shoot.push({
    x: Boss.x + (Boss.width * canvasPlay.width) / 100 / 2,
    y: (Boss.height * canvasPlay.height) / 100,
    width: Boss.shootWidth,
    height: Boss.shootHeight,
    color: Boss.shootColor,
    speed: Boss.shootSpeed,
    type: "shoot1",
  });
};
