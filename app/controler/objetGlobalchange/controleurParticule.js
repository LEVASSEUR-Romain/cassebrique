export const addParticule = (objectGlobal, add) => {
  if (!objectGlobal.hasOwnProperty("particule")) objectGlobal.particule = [];
  objectGlobal.particule.push(add);
};

export const loseLifeParticuleAndRemove = (objectGlobal) => {
  for (let i = 0; i < objectGlobal.particule.length; i++) {
    objectGlobal.particule[i].life -= 1;
    if (objectGlobal.particule[i].life <= 0) {
      objectGlobal.particule.splice(i, 1);
      i--;
    }
  }
};

export const removeAllParticule = (objectGlobal) => {
  delete objectGlobal.particule;
};
