import composantLose from "../../view/lose/composantLose.js";
import deleteLocalStorage from "../localStorage/deleteLocalStorage.js";
const loseAllGame = (objectGlobal) => {
  composantLose();
  //empty local storage
  deleteLocalStorage();
  //delete all
  objectGlobal = {};
};
export default loseAllGame;
