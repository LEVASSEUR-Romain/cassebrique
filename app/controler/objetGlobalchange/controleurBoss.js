import commonsBoss from "../../model/commons/commonsBoss.js";

export const setBoss = (objectGlobal, nbr) => {
  const add = commonsBoss["boss" + nbr];
  objectGlobal.Boss = add;
};

export const bossLoseLife = (Boss) => {
  Boss.life -= 1;
};

import { ballOnArrayDefault } from "./constroleurBall.js";
import { deleteAllShoot } from "./controleurShoot.js";
export const deleteAllUpdateBoss = (objectGlobal) => {
  //boss 1 you draw Shoot
  deleteAllShoot(objectGlobal);
  //boss 2 you draw multiBall
  ballOnArrayDefault(objectGlobal);
  //delete boss
  delete objectGlobal.Boss;
};
