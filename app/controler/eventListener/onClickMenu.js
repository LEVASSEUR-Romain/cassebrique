import clickMenu from "../callBackEvent/clickMenu.js";
const onClickMenu = (objectGlobal) => {
  //destructuring
  const { canvasPlay, canvasMap, Player, playImg, mapImg } = objectGlobal;
  playImg.addEventListener("click", (e) => {
    clickMenu(e, objectGlobal.start, canvasPlay, canvasMap, Player);
  });
  mapImg.addEventListener("click", (e) => {
    clickMenu(e, objectGlobal.start, canvasPlay, canvasMap, Player);
  });
};
export default onClickMenu;
