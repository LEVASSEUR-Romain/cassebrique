import getHtmlCollectionImg from "../../controler/objetGlobalchange/getHtmlCollectionImg.js";
const drawBricks = (objectGlobal) => {
  const { ctx, Briks, Commons, canvasPlay } = objectGlobal;
  Briks.forEach((element) => {
    ctx.fillStyle = Commons.brick[element.id - 1].color[element.life - 1];
    ctx.fillRect(
      element.x,
      element.y,
      (Commons.brick[element.id - 1].width * canvasPlay.width) / 100,
      (Commons.brick[element.id - 1].height * canvasPlay.height) / 100
    );
    /*  // partern
    const partern = ctx.createPattern(
      getHtmlCollectionImg(objectGlobal, "playlego"),
      "repeat"
    );
    ctx.fillStyle = partern;
    ctx.fillRect(
      element.x,
      element.y,
      (Commons.brick[element.id - 1].width * canvasPlay.width) / 100,
      (Commons.brick[element.id - 1].height * canvasPlay.height) / 100
    ); */
  });
};

export default drawBricks;
