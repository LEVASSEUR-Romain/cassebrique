const drawCurseurUp = () => {
  let element = document.querySelector(".finger");
  if (element === null) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "finger");
    const descriptionContent = document.createTextNode("👆");
    newDiv.appendChild(descriptionContent);
    document.body.appendChild(newDiv);

    element = document.querySelector(".finger");
    element.addEventListener("animationend", () => {
      element.remove();
    });
  }
};
export default drawCurseurUp;
