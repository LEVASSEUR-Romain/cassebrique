const moveshoot = ({ Shoot, canvasPlay }) => {
  Shoot.forEach((element) => {
    element.y += (element.speed * canvasPlay.height) / 100;
  });
};
export default moveshoot;
