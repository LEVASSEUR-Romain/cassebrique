import commonsDescribeBoss from "../../../model/commons/commonsDescribeBoss.js";
import component from "../../tools/component.js";
const composantBossShow = (Commons, nbrBoss) => {
  const paramsBoss = commonsDescribeBoss["boss" + nbrBoss];
  const height = "height:" + (100 - Commons.borderMenu) + "%";

  const newDiv = component("div", { id: "boss", style: height }, document.body);
  const h1 = component("h1", {}, newDiv, paramsBoss.title);
  const p = component("p", {}, newDiv, paramsBoss.describe);
  const pInfo = component("p", {}, newDiv, commonsDescribeBoss.info);
};

export default composantBossShow;
