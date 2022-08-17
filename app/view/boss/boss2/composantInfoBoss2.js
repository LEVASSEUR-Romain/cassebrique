import component from "../../tools/component.js";
import drawPlayerBoss from "../drawPlayerBoss.js";
import getHtmlCollectionImg from "../../../controler/objetGlobalchange/getHtmlCollectionImg.js";
import drawPlayerLoseBall from "../drawPlayerLoseBall.js";

const composantInfoBoss2 = (objectGlobal) => {
  const newDiv = component("div", { id: "boss" }, document.body);
  component("h1", {}, newDiv, "Boss Shooter");
  // boss lose life
  component("h2", {}, newDiv, "Boss perd 💗");
  const bossLoseLife = component("div", { class: "describeBoss" }, newDiv);
  const canvasLose = component("canvas", {}, bossLoseLife);
  drawPlayerBoss(objectGlobal, canvasLose, 2);
  // canvas lose life
  const imglife = getHtmlCollectionImg(objectGlobal, "playerlife");
  const h2 = component("h2", {}, newDiv, "Vous perdez ");
  h2.appendChild(imglife);
  const playerLoseLife = component("div", { class: "describeBoss" }, newDiv);
  const playerLoseBall = component("canvas", {}, playerLoseLife);
  drawPlayerLoseBall(objectGlobal, playerLoseBall);
  // go
  component("button", { id: "goBoss" }, newDiv, "Let's go");
};
export default composantInfoBoss2;
