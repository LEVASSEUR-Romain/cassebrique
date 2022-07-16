import { deleteShoot } from "../../../../app/controler/objetGlobalchange/controleurShoot.js";

test("deleteShoot delete one Shoot", () => {
  const Shoot = [
    { px: 2, py: 5 },
    { px: 3, py: 5 },
    { px: 2, py: 6 },
  ];
  const deleteshoot = {
    px: 3,
    py: 5,
  };
  // retrun
  deleteShoot(deleteshoot, Shoot);
  const Shootfinal = [
    { px: 2, py: 5 },
    { px: 2, py: 6 },
  ];
  expect(Shoot).toEqual(Shootfinal);
});
