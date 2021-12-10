let contentItems = document.querySelectorAll(".content-item");
let selectionBoxes = document.querySelectorAll(".selections");
let selections = document.querySelectorAll(".selection");

let preferenceOptions = document.getElementById("preferences");
let grindOption = document.querySelector(".grind-option");
let grindTitle = document.querySelector(".grind-option-header");

// Display selections based on the content bar link that is clicked.
contentItems.forEach((item) => {
  item.addEventListener("click", () => {
    contentItems.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
    displaySelections(item);
  });
});

displaySelections = (item) => {
  selectionBoxes.forEach((item) => {
    item.classList.remove("active");
  });
  document.getElementById(item.attributes[1].nodeValue).classList.add("active");
};






