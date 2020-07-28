let entryForm = document.getElementById("entryForm");
entryForm.addEventListener("submit", function (event) {
  event.preventDefault();
});
let textbox = document.querySelector(".entry-texbox");
let submitButton = document.querySelector(".button");

submitButton.addEventListener("click", function () {
  console.log(textbox.value);
});
