const routing = (liens, canvasPlay, canvasMap) => {
  switch (liens) {
    case "play":
      canvasPlay.style.zIndex = 2;
      canvasMap.style.zIndex = 1;
      break;
    case "map":
      canvasPlay.style.zIndex = 1;
      canvasMap.style.zIndex = 2;
      break;
  }
};

export default routing;
