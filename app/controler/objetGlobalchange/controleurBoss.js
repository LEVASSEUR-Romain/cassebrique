import commonsBoss from "../../model/commons/commonsBoss.js";

export const setBoss = (objectGlobal, nbr) => {
  const add = commonsBoss["boss" + nbr];
  objectGlobal.Boss = add;
};

export const bossLoseLife = (Boss) => {
  Boss.life = Boss.life - 1;
};
