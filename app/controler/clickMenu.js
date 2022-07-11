const clickMenu = (event, start, canvasPlay, canvasMap, Player) => {
  if (start === false) {
    const target = typeof event === "string" ? event : event.target.id;
    switch (target) {
      case "play":
        if (Player.lastClickLvl) {
          canvasPlay.style.zIndex = 2;
          canvasMap.style.zIndex = 1;
        }
        break;
      case "map":
        canvasPlay.style.zIndex = 1;
        canvasMap.style.zIndex = 2;
        break;
    }
  }
};

export default clickMenu;
