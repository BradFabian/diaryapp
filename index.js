let entryForm = document.getElementById("entryForm");
let entriesSection = document.getElementById("entries");
let textbox = document.querySelector(".entry-texbox");

let submitButton = document.querySelector(".button");

entryForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let entryDiv = document.createElement("div");
  entryDiv.classList.add("single-entry");
  entryDiv.innerText = textbox.value;
  entriesSection.appendChild(entryDiv);
});
