"use strict";

let showDesc = document.querySelectorAll(".show-desc");
const description = document.querySelector(".model");
const closeDesc = document.querySelector(".close-desc");
const overLay = document.querySelector(".overlay");
let contDesc = document.querySelectorAll("p");

for (let j = 0; j < contDesc.length; j++) {
  for (let i = 0; i < showDesc.length; i++) {
    showDesc[i].addEventListener("click", function () {
      if (showDesc[i].innerHTML === contDesc[j].className) {
        contDesc[j].style.display = "block";
        description.classList.remove("hidden");
        overLay.classList.remove("hidden");
      } else {
        contDesc[j].style.display = "none";
      }
    });
  }
}
const closeModel = function () {
  description.classList.add("hidden");
  overLay.classList.add("hidden");
};
closeDesc.addEventListener("click", closeModel);
overLay.addEventListener("click", closeModel);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !description.classList.contains("hidden")) {
    closeModel();
  }
});