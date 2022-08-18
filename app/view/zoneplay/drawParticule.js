const drawParticule = (objectGlobal) => {
  if (objectGlobal.particule && objectGlobal.particule.length !== 0) {
    const { particule, ctx, canvasPlay } = objectGlobal;
    particule.forEach((element) => {
      const width = (element.width * canvasPlay.width) / 100;
      const height = (element.height * canvasPlay.height) / 100;
      ctx.fillStyle = element.color;
      ctx.fillRect(element.x, element.y, width, height);
    });
  }
};
export default drawParticule;
