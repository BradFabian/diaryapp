let entryForm = document.getElementById("entryForm");
let entriesSection = document.getElementById("entries");
let textbox = document.querySelector(".entry-texbox");

entryForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let entryDiv = document.createElement("div");
  entryDiv.classList.add("single-entry");
  entryDiv.innerText = textbox.value;
  entryDiv.style.display = "none";
  entriesSection.appendChild(entryDiv);

  // clear input //
  textbox.value = "";
});
