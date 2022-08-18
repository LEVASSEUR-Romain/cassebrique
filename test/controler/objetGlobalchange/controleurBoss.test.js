import {
  setBoss,
  bossLoseLife,
} from "../../../app/controler/objetGlobalchange/controleurBoss.js";
import commonsBoss from "../../../app/model/commons/commonsBoss.js";

test("setBoss", () => {
  const obj = {
    Boss: "",
  };
  const id = 1;
  setBoss(obj, id);
  // return
  const final = {};
  final.Boss = commonsBoss["boss" + id];
  expect(obj).toEqual(final);
});

test("bossLoseLife", () => {
  const createElement = document.createElement("div");
  createElement.setAttribute("id", "bossLifeText");
  document.body.appendChild(createElement);
  // change affichage
  const boss = {
    life: 5,
  };
  bossLoseLife(boss);
  // return
  const finish = {
    life: 4,
  };
  expect(boss).toEqual(finish);
});
