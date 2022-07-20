import drawAll from "../../../view/drawAll.js";
const eventPointerMove = (e, objectGlobal) => {
  // if event goes out of the map
  // removelister , deleteStart
  //destruct
  const { Player, Ball, start, canvasPlay } = objectGlobal;

  const playerWidthCalcul = (Player.width * canvasPlay.width) / 100;
  // <- move min
  const moveMin =
    -playerWidthCalcul / 2 + (Ball.radiusHeight * canvasPlay.height) / 100;
  // -> move max
  const moveMax =
    canvasPlay.width -
    playerWidthCalcul / 2 -
    (Ball.radiusHeight * canvasPlay.height) / 100;
  //speed
  const speed = (Player.speed * canvasPlay.width) / 100;
  // move Player
  const direction = e.clientX - playerWidthCalcul / 2; // pointer position corresponds to half of the bar
  // ->
  if (direction > Player.x) {
    Player.x =
      Player.x + speed > moveMax
        ? moveMax
        : Player.x + speed > direction
        ? direction
        : Player.x + speed;
  }
  // <-
  else if (direction < Player.x) {
    Player.x =
      Player.x - speed < moveMin
        ? moveMin
        : Player.x - speed < direction
        ? direction
        : Player.x - speed;
  } // else nothing

  // move ball
  if (!start) Ball.x = Player.x + playerWidthCalcul / 2;
  // draw
  if (!start) drawAll(objectGlobal);
};
export default eventPointerMove;
