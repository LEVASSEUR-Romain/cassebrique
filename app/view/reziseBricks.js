const reziseBricks = (bricks, Commons) => {
  bricks.forEach((brick) => {
    brick.x = (window.innerWidth * brick.px) / 100;
    brick.y = (window.innerHeight * brick.py) / 100;
  });
};
export default reziseBricks;
