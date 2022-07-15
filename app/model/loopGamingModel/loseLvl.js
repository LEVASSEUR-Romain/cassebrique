const loseLvl = (objectGlobal) => {
  if (objectGlobal.Player.life === 0) {
    objectGlobal.start = false;
    clearTimeout(objectGlobal.setTimeOutGame);
    alert("Perdu recommencer");
  }
};
export default loseLvl;
