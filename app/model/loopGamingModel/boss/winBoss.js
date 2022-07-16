const winBoss = (objectGlobal) => {
  if (objectGlobal.Boss.life === 0) {
    clearTimeout(objectGlobal.setTimeOutGame);
    alert("You win");
  }
};
export default winBoss;
