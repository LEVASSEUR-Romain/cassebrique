/**
 *
 * @param {Object} objectGlobal
 * @param {Object} objectCollision
 * @param {String} type
 * type : "boss", "brik"
 */
import littleParticule from "../../model/particule/littleParticule.js";
import bigParticule from "../../model/particule/bigParticule.js";
const controleurParticule = (objectGlobal, objectCollision, type) => {
  if (type === "boss") {
    if (objectCollision.life > 1) {
      littleParticule(objectGlobal, objectCollision, type);
    }
  }
  if (type === "brik") {
    if (objectCollision.life === 1) {
      bigParticule(objectGlobal, objectCollision, type);
    }
    if (objectCollision.life > 1) {
      littleParticule(objectGlobal, objectCollision, type);
    }
  }
};
export default controleurParticule;
