const routing = (liens, canvasPlay, canvasMap) => {
  const nav = document.querySelector("nav");
  switch (liens) {
    case "play":
      canvasPlay.style.zIndex = 2;
      canvasMap.style.zIndex = 1;
      nav.classList.add("navplay");
      break;
    case "map":
      canvasPlay.style.zIndex = 1;
      canvasMap.style.zIndex = 2;
      nav.classList.remove("navplay");
      break;
  }
};

export default routing;
