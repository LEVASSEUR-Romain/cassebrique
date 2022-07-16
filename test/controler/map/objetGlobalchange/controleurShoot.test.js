import { deleteShoot } from "../../../../app/controler/objetGlobalchange/controleurShoot.js";

test("deleteShoot delete one Shoot", () => {
  const Shoot = [
    { x: 2, y: 5 },
    { x: 3, y: 5 },
    { x: 2, y: 6 },
  ];
  const deleteshoot = {
    x: 3,
    y: 5,
  };
  // retrun
  deleteShoot(deleteshoot, Shoot);
  const Shootfinal = [
    { x: 2, y: 5 },
    { x: 2, y: 6 },
  ];
  expect(Shoot).toEqual(Shootfinal);
});
