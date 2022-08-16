import commonsBoss from "../../model/commons/commonsBoss.js";

export const setBoss = (objectGlobal, nbr) => {
  const add = commonsBoss["boss" + nbr];
  objectGlobal.Boss = add;
};

import controlerBossLife from "../boss/controlerBossLife.js";
export const bossLoseLife = (Boss) => {
  Boss.life -= 1;
  controlerBossLife(Boss);
};

import { ballOnArrayDefault } from "./constroleurBall.js";
import { deleteAllShoot } from "./controleurShoot.js";
import { deleteBomb } from "./controleurBomb.js";
export const deleteAllUpdateBoss = (objectGlobal) => {
  //boss 1 you draw Shoot
  deleteAllShoot(objectGlobal);
  //boss 2 you draw multiBall
  ballOnArrayDefault(objectGlobal);
  // boss 3 you draw Bomb
  deleteBomb(objectGlobal);
  //delete boss
  delete objectGlobal.Boss;
};

//add Tier map Bomb
export const updateMapTierBomb = (objectGlobal) => {
  objectGlobal.Boss.mapTierTarget += 1;
  const tierMax = 3;
  if (objectGlobal.Boss.mapTierTarget > tierMax)
    objectGlobal.Boss.mapTierTarget = 1;
};
