const clickMenu = (event, start, canvasPlay, canvasMap) => {
  if (start === false) {
    switch (event.target.id) {
      case "play":
        canvasPlay.style.zIndex = 2;
        canvasMap.style.zIndex = 1;
        break;
      case "map":
        canvasPlay.style.zIndex = 1;
        canvasMap.style.zIndex = 2;
        break;
    }
  }
};

export default clickMenu;
