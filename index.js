let entryForm = document.getElementById("entryForm");
let entriesSection = document.getElementById("entries");
let textbox = document.querySelector(".entry-texbox");
const entriesNav = document.querySelector(".entries-nav");

let count = 1;

entryForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let entryDiv = document.createElement("div");
  entryDiv.classList.add("single-entry");
  entryDiv.innerText = textbox.value;
  entryDiv.style.display = "none";
  entriesSection.appendChild(entryDiv);

  // clear input //
  textbox.value = "";

  const displayEntryButton = document.createElement("button");
  displayEntryButton.className = "display-entry-button";
  displayEntryButton.innerText = count;
  entriesNav.appendChild(displayEntryButton);

  count++;
});
