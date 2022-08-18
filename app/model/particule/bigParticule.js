import { addParticule } from "../../controler/objetGlobalchange/controleurParticule.js";
import intRandom from "../../tools/intRandom.js";
import floatRandom from "../../tools/floatRandom.js";
const bigParticule = (objectGlobal, objectCollision, type) => {
  //const
  const minimumParticule = 30;
  const maxParticule = 50;
  const widthParticule = objectGlobal.Commons.widthParticule;
  const heightParticule = objectGlobal.Commons.heightParticule;
  const minLifeParticule = 5; // lifetime
  const maxlifeParticule = 10;
  const minDirection = -3;
  const maxDirection = 3;
  const speed = 8; //%
  let color = "";
  let widhtCollision = 0;
  let heightCollision = 0;
  if (type === "brik") {
    // after lose life briks
    const lifeBrik = objectCollision.life - 1;
    const infoBrik = objectGlobal.Commons.brick[objectCollision.id - 1];
    color = infoBrik.color[lifeBrik];
    widhtCollision = infoBrik.width;
    heightCollision = infoBrik.height;
  } else {
    color = objectCollision.color;
    widhtCollision = objectCollision.width;
    heightCollision = objectCollision.height;
  }
  const canvas = objectGlobal.canvasPlay;
  const minX = Math.round(objectCollision.x);
  const maxX = Math.round(
    objectCollision.x + (widhtCollision * canvas.width) / 100
  );
  const minY = Math.round(objectCollision.y);
  const maxY = Math.round(
    objectCollision.y + (heightCollision * canvas.height) / 100
  );
  const numberOfParticule = intRandom(minimumParticule, maxParticule);

  for (let i = 0; i < numberOfParticule; i++) {
    addParticule(objectGlobal, {
      x: intRandom(minX, maxX),
      y: intRandom(minY, maxY),
      width: widthParticule,
      height: heightParticule,
      life: intRandom(minLifeParticule, maxlifeParticule),
      directionX: floatRandom(minDirection, maxDirection),
      directionY: floatRandom(minDirection, maxDirection),
      speed: speed,
      color: color,
    });
  }
};
export default bigParticule;
