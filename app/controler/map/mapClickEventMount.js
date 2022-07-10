import mapControleAcces from "./mapControleAcces.js";
const mapClickEventMount = (event, itemMap, Commons, Player) => {
  if (!Player.lastClickLvlY) {
    const clickX = event.layerX;
    const clickY = event.layerY;
    const ratio = window.innerWidth / window.innerHeight;
    const radiusElmt =
      (Commons.radiusItemMap * window.innerHeight * ratio) / 100;
    const border = (Commons.borderMenu * window.innerHeight) / 100;
    itemMap.forEach((ligne) => {
      ligne.forEach((elmt) => {
        const elmtRight = (window.innerWidth * elmt.px) / 100 - radiusElmt;
        const elmtLeft = (window.innerWidth * elmt.px) / 100 + radiusElmt;
        const elemTop = (window.innerHeight * elmt.py) / 100 - radiusElmt;
        const elemBottom = (window.innerHeight * elmt.py) / 100 + radiusElmt;
        if (
          clickX > elmtRight &&
          clickX < elmtLeft &&
          clickY > elemTop &&
          clickY < elemBottom
        ) {
          mapControleAcces(elmt, Player);
        }
      });
    });
  }
};

export default mapClickEventMount;
