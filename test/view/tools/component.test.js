import component from "./../../../app/view/tools/component.js";

test("component", () => {
  const createDiv = component(
    "div",
    { class: "test" },
    document.body,
    "coucou"
  );

  const addDiv = document.createElement("div");
  addDiv.setAttribute("class", "test");
  const content = document.createTextNode("coucou");
  addDiv.appendChild(content);
  expect(createDiv).toEqual(addDiv);
});
