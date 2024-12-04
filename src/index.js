function generatePoem(event) {
  event.preventDefault();
  let poemElement = document.querySelector("#poem");
  new Typewriter("#poem", {
    strings:
      "Demain, dès l’aube, à l’heure où blanchit la campagne, Je partirai.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
