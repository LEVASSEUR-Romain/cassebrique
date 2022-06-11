//import collisionAngle from "./CollisionAngle.js";
import collisionVector from "./CollisionVector.js";

const loopGaming = (player, briks, ball, Commons) => {
  collisionVector(player, briks, ball, Commons);
  // avancement balle dans le canvas
  //ball.x += ball.speed * Math.cos(ball.angleDirection);
  //ball.y += ball.speed * Math.sin(ball.angleDirection);
  ball.x += ((ball.speed * window.innerWidth) / 100) * ball.angleDirectionX;
  ball.y += ((ball.speed * window.innerHeight) / 100) * ball.angleDirectionY;
};
export default loopGaming;
