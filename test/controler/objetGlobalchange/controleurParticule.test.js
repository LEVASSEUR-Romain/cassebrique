import {
  addParticule,
  removeAllParticule,
  loseLifeParticuleAndRemove,
} from "./../../../app/controler/objetGlobalchange/controleurParticule.js";

test("addParticule", () => {
  const obj = {};
  const result = {
    particule: [{ x: 0, y: 0, life: 10 }],
  };
  addParticule(obj, { x: 0, y: 0, life: 10 });
  expect(obj).toEqual(result);
});

test("removeAllParticule", () => {
  const obj = { particule: [{ x: 0, y: 0, life: 10 }] };
  const result = {};
  removeAllParticule(obj);
  expect(obj).toEqual(result);
});

test("loseLifeParticuleAndRemove", () => {
  const obj = {
    particule: [{ life: 10 }, { life: 0 }, { life: 8 }, { life: 1 }],
  };
  const result = { particule: [{ life: 9 }, { life: 7 }] };
  loseLifeParticuleAndRemove(obj);
  expect(obj).toEqual(result);
});
