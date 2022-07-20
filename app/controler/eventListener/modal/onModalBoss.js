import clickModalBoss from "../../callBackEvent/modal/clickModalBoss.js";
const onModalBoss = () => {
  const boss = document.querySelector("#boss");
  boss.addEventListener("click", clickModalBoss);
};
export default onModalBoss;
