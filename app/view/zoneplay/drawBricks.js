import getHtmlCollectionImg from "../../controler/objetGlobalchange/getHtmlCollectionImg.js";
const drawBricks = (objectGlobal) => {
  const { ctx, Briks, Commons, canvasPlay } = objectGlobal;
  const imgLego = getHtmlCollectionImg(objectGlobal, "playlego");
  Briks.forEach((element) => {
    const widhtElement =
      (Commons.brick[element.id - 1].width * canvasPlay.width) / 100;
    const heightElement =
      (Commons.brick[element.id - 1].height * canvasPlay.height) / 100;
    ctx.fillStyle = Commons.brick[element.id - 1].color[element.life - 1];
    ctx.fillRect(element.x, element.y, widhtElement, heightElement);
    // life lego
    const brickLife = element.life;
    const widthLife = widhtElement / brickLife;
    for (let i = 0; i < brickLife; i++) {
      const positionX = element.x + i * widthLife;
      ctx.drawImage(imgLego, positionX, element.y, widthLife, heightElement);
    }
  });
};

export default drawBricks;
