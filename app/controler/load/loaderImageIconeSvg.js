const loaderImageIconeSvg = (dir, imageWithExtend) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.src = "./img/" + dir + "/" + imageWithExtend;
    img.onerror = () => {
      console.error(
        "add image to list loadAllImg , or in /img , bug in : " +
          dir +
          " " +
          imageWithExtend
      );
    };
  });
};
export default loaderImageIconeSvg;
