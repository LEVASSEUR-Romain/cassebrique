export const deleteShoot = (shootToDelete, ListShoot) => {
  const index = ListShoot.findIndex(
    (element) =>
      element.px === shootToDelete.px && element.py === shootToDelete.py
  );
  ListShoot.splice(index, 1);
};

export const emptyShoot = (objectGlobal) => {
  objectGlobal.Shoot = [];
};
