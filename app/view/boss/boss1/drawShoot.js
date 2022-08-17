import getHtmlCollectionImg from "../../../controler/objetGlobalchange/getHtmlCollectionImg.js";
const drawShoot = (objectGlobal, other = null) => {
  const { ctx, Shoot, canvasPlay } = other === null ? objectGlobal : other;
  const imgShoot = getHtmlCollectionImg(objectGlobal, "shoot");
  const deltaBall = (1 * canvasPlay.height) / 100;
  Shoot.forEach((shoot) => {
    const shootHeight = (shoot.height * canvasPlay.height) / 100;
    const shootWidth = (shoot.width * canvasPlay.width) / 100;
    ctx.drawImage(
      imgShoot,
      shoot.x,
      shoot.y,
      shootWidth,
      shootHeight + deltaBall
    );
  });
};
export default drawShoot;
