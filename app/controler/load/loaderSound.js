const loaderSound = (soundWithExtend) => {
  return new Promise((resolve) => {
    const audio = new Audio("./son/" + soundWithExtend);
    audio.oncanplaythrough = () => {
      resolve(audio);
    };
    audio.onerror = () => {
      console.error(
        "add son to list loadAllSound , or in /son , bug in : " +
          soundWithExtend
      );
    };
  });
};
export default loaderSound;
