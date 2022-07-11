const mapControleAccesChangePlayer = (element, Player) => {
  const lvlPlayer = Player.lvlY;
  // up lvl
  if (element.lvlY === lvlPlayer + 1) {
    const findParent = element.parent.includes(Player.currentIdLvl);
    if (findParent) {
      // update map Players
      Player.lvlY = lvlPlayer + 1;
      Player.currentIdLvl = element.id;
      Player.lastClickLvl = true;
      return true;
    }
    return false;
  }
};
export default mapControleAccesChangePlayer;
