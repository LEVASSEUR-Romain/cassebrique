import clickModalBoss from "../../callBackEvent/modal/clickModalBoss.js";
const onModalBoss = () => {
  const boss = document.querySelector("#goBoss");
  boss.addEventListener("click", clickModalBoss);
};
export default onModalBoss;
