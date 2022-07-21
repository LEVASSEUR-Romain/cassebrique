import drawMapItemFinish from "../../view/map/drawMapItemFinish.js";
import drawMapItemNormal from "../../view/map/drawMapItemNormal.js";
import drawMapItemBonus from "./../../view/map/drawMapItemBonus.js";
import drawMapItemBoss from "../../view/map/drawMapItemBoss.js";
import drawMapItemCampFire from "../../view/map/drawMapItemCampFire.js";
const drawAllMapItem = (objectGlobal) => {
  objectGlobal.itemMapPosition.forEach((level) => {
    for (let i = 0; i < level.length; i++) {
      // if map finish
      if (level[i].finish) {
        drawMapItemFinish(objectGlobal, level[i]);
      }
      // easy
      else if (level[i].type === "mob" && !level[i].bonus) {
        drawMapItemNormal(objectGlobal, level[i]);
      }
      //bonus
      else if (level[i].type === "mob" && level[i].bonus) {
        drawMapItemBonus(objectGlobal, level[i]);
      }
      //boss
      else if (level[i].type === "boss") {
        drawMapItemBoss(objectGlobal, level[i]);
      }
      // campFire
      else if (level[i].type === "camp") {
        drawMapItemCampFire(objectGlobal, level[i]);
      }
    }
  });
};
export default drawAllMapItem;
