const loaderImageIconeSvg = (dir, nameSvg) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.src = "./img/" + dir + "/" + nameSvg;
    img.onerror = () => {
      console.error("add image to list loadAllImg , or in /img");
    };
  });
};
export default loaderImageIconeSvg;
