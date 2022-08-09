const loaderImageIconeSvg = (nameSvg, callBack) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.src = "./img/iconesvg/" + nameSvg + ".svg";
  });
};
export default loaderImageIconeSvg;
