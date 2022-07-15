import commonsBoss from "../../model/loopGamingModel/boss/commonsBoss.js";

export const setBoss = (objectGlobal, nbr) => {
  const add = commonsBoss["boss" + nbr];
  objectGlobal.Boss = add;
};
