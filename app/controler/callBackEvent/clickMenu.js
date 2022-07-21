import routing from "../main/routing.js";
const clickMenu = (event, start, canvasPlay, canvasMap, Player) => {
  if (start === false) {
    const target = event.target.id;
    switch (target) {
      case "play":
        if (Player.lastClickLvl) {
          routing("play", canvasPlay, canvasMap);
        }
        break;
      case "map":
        routing("map", canvasPlay, canvasMap);
        break;
    }
  }
};

export default clickMenu;
