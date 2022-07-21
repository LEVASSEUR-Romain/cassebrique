export const transformBallToArray = (objectGlobal) => {
  objectGlobal.Ball = [objectGlobal.Ball];
};

export const addBallOnarray = (
  objectGlobal,
  x,
  y,
  angleDirectionX,
  angleDirectionY
) => {
  const copy = { ...objectGlobal.Commons.BallDefault };
  copy.x = x;
  copy.y = y;
  copy.angleDirectionX = angleDirectionX;
  copy.angleDirectionY = angleDirectionY;
  objectGlobal.Ball.push(copy);
};

export const deleteBallOnarray = (objectGlobal, Ball) => {
  const index = objectGlobal.Ball.findIndex(
    (find) =>
      find.x === Ball.x &&
      find.y === Ball.y &&
      find.angleDirectionX === Ball.angleDirectionX &&
      find.angleDirectionY === Ball.angleDirectionY
  );
  objectGlobal.Ball.splice(index, 1);
};
