import component from "../../tools/component.js";
import drawMapItemBoss from "./../drawMapItemBoss.js";
import drawMapItemCampFire from "./../drawMapItemCampFire.js";
import drawMapItemNormal from "./../drawMapItemNormal.js";
import drawMapItemFinish from "../drawMapItemFinish.js";
import drawPlayerOnMap from "../drawPlayerOnMap.js";
import getHtmlCollectionImg from "../../../controler/objetGlobalchange/getHtmlCollectionImg.js";
const composantInterrogation = (objectGlobal) => {
  // const
  const heightCanvas = 60;
  const widthCanvas = 60;

  // div
  const newDiv = component("div", { id: "helper" }, document.body);
  component("header", {}, newDiv, "Legend");
  // info
  const info = component("div", {}, newDiv);
  const img = getHtmlCollectionImg(objectGlobal, "pointerclick");
  img.setAttribute("alt", "fermer page");
  img.setAttribute("height", "50px");
  img.setAttribute("width", "50px");
  info.appendChild(img);
  component("p", {}, info, "pour fermer");
  // ul
  const ul = component("ul", {}, newDiv);
  // Boss
  const liBoss = component("li", {}, ul);
  const canvasBoss = component(
    "canvas",
    { height: heightCanvas + "px", width: widthCanvas + "px" },
    liBoss
  );
  const ctxBoss = canvasBoss.getContext("2d");
  drawMapItemBoss(
    objectGlobal,
    { px: 50, py: 50 },
    { ctx: ctxBoss, canvas: canvasBoss, radius: widthCanvas / 2 }
  );
  component("p", {}, liBoss, "un combat de boss");
  // mob
  const liMob = component("li", {}, ul);
  const canvasMob = component(
    "canvas",
    { height: heightCanvas + "px", width: widthCanvas + "px" },
    liMob
  );
  const ctxMob = canvasMob.getContext("2d");
  drawMapItemNormal(
    objectGlobal,
    { px: 50, py: 50 },
    { ctx: ctxMob, canvas: canvasMob, radius: widthCanvas / 2 }
  );
  component("p", {}, liMob, "niveau casse brique");
  //campfire
  const liCamp = component("li", {}, ul);
  const canvasCamp = component(
    "canvas",
    { height: heightCanvas + "px", width: widthCanvas + "px" },
    liCamp
  );
  const ctxCamp = canvasCamp.getContext("2d");
  drawMapItemCampFire(
    objectGlobal,
    { px: 50, py: 50 },
    { ctx: ctxCamp, canvas: canvasCamp, radius: widthCanvas / 2 }
  );
  component(
    "p",
    {},
    liCamp,
    "niveau bonus : vous pouvez vous soigner (pas de combat)"
  );
  // finish
  const lifinish = component("li", {}, ul);
  const canvasfinish = component(
    "canvas",
    { height: heightCanvas + "px", width: widthCanvas + "px" },
    lifinish
  );
  const ctxfinish = canvasfinish.getContext("2d");
  drawMapItemFinish(
    objectGlobal,
    { px: 50, py: 50 },
    { ctx: ctxfinish, canvas: canvasfinish, radius: widthCanvas / 2 }
  );
  component("p", {}, lifinish, "Niveau terminé");
  // player on map
  const liPlayer = component("li", {}, ul);
  const canvasPlayer = component(
    "canvas",
    { height: heightCanvas + "px", width: widthCanvas + "px" },
    liPlayer
  );
  const ctxPlayer = canvasPlayer.getContext("2d");
  drawPlayerOnMap(objectGlobal, {
    px: 50,
    py: 50,
    ctx: ctxPlayer,
    canvas: canvasPlayer,
    radius: widthCanvas / 2,
  });
  component("p", {}, liPlayer, "Votre position sur la carte");
};
export default composantInterrogation;
