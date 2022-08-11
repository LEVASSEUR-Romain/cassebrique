import clickModalInterrogation from "../../callBackEvent/modal/clickModalInterrogation.js";
const onModalInterrogation = () => {
  const interrogation = document.querySelector("#helper");
  interrogation.addEventListener("click", () => {
    clickModalInterrogation();
  });
};
export default onModalInterrogation;
