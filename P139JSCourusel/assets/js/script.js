"use strict";

/*
let rightIcons = document.querySelector(
  ".slider-area .slider .icons i:nth-child(2)"
);
let leftIcons = document.querySelector(
  ".slider-area .slider .icons i:nth-child(1)"
);

let activeSlider = document.querySelector(".active-slider");

let slideImg = document.querySelectorAll(".images img");

let start = 0;

setInterval(() => {
  let activeSlider = document.querySelector(".active-slider");

  if (activeSlider.nextElementSibling != null) {
    activeSlider.classList.remove("active-slider");
    activeSlider.nextElementSibling.classList.add("active-slider");
  } else {
    activeSlider.classList.remove("active-slider");
    activeSlider.parentNode.firstElementChild.classList.add("active-slider");
  }
}, 5000);

rightIcons.addEventListener("click", function () {
  let activeSlider = document.querySelector(".active-slider");

  if (activeSlider.nextElementSibling != null) {
    activeSlider.classList.remove("active-slider");
    activeSlider.nextElementSibling.classList.add("active-slider");
  } else {
    activeSlider.classList.remove("active-slider");
    activeSlider.parentNode.firstElementChild.classList.add("active-slider");
  }
});

leftIcons.addEventListener("click", function () {
  let activeSlider = document.querySelector(".active-slider");

  if (activeSlider.previousElementSibling != null) {
    activeSlider.classList.remove("active-slider");
    activeSlider.previousElementSibling.classList.add("active-slider");
  } else {
    activeSlider.classList.remove("active-slider");
    activeSlider.parentNode.lastElementChild.classList.add("active-slider");
  }
});


*/

let dropItem = document.querySelector(".drop-item");
let dragItem1 = document.getElementById("item1");
let dragItem2 = document.getElementById("item2");
let dragItem3 = document.getElementById("item3");
let dragItem4 = document.getElementById("item4");
let dragItem5 = document.getElementById("item5");
let dragItem6 = document.getElementById("item6");
let dragItem7 = document.getElementById("item7");
let dragItem8 = document.getElementById("item8");

dragItem1.ondragstart = (e) => {
  let id = e.target.getAttribute("id");

  e.dataTransfer.setData("id", id);
};

dragItem2.ondragstart = (e) => {
  let id = e.target.getAttribute("id");

  e.dataTransfer.setData("id", id);
};

dragItem3.ondragstart = (e) => {
  let id = e.target.getAttribute("id");

  e.dataTransfer.setData("id", id);
};

dragItem4.ondragstart = (e) => {
  let id = e.target.getAttribute("id");

  e.dataTransfer.setData("id", id);
};

dragItem5.ondragstart = (e) => {
  let id = e.target.getAttribute("id");

  e.dataTransfer.setData("id", id);
};

dragItem6.ondragstart = (e) => {
  let id = e.target.getAttribute("id");

  e.dataTransfer.setData("id", id);
};


dragItem7.ondragstart = (e) => {
  let id = e.target.getAttribute("id");

  e.dataTransfer.setData("id", id);
};

dragItem8.ondragstart = (e) => {
  let id = e.target.getAttribute("id");

  e.dataTransfer.setData("id", id);
};

dropItem.ondragover = (e) => {
  e.preventDefault();
};

dropItem.ondrop = (e) => {
  let id = e.dataTransfer.getData("id");

  e.target.append(document.getElementById(id));
};
