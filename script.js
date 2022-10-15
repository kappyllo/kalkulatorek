"use strict";

const result = document.querySelector(".result__text");
const btn__7 = document.querySelector(".btn__7");
const btn__8 = document.querySelector(".btn__8");
const btn__9 = document.querySelector(".btn__9");
const btn__devide = document.querySelector(".btn__devide");
const btn__4 = document.querySelector(".btn__4");
const btn__5 = document.querySelector(".btn__5");
const btn__6 = document.querySelector(".btn__6");
const btn__multiply = document.querySelector(".btn__multiply");
const btn__1 = document.querySelector(".btn__1");
const btn__2 = document.querySelector(".btn__2");
const btn__3 = document.querySelector(".btn__3");
const btn__0 = document.querySelector(".btn__0");
const btn__equal = document.querySelector(".btn__equal");
const btn__add = document.querySelector(".btn__add");
const btn__clear = document.querySelector(".btn__clear");

const addnumber = function (x) {
  let d = `${result.innerHTML.toString() + x}`;
  result.innerHTML = `${d}`;
  let a = result.innerHTML;
  return a;
};

btn__7.addEventListener("click", function () {
  addnumber(7);
});

btn__8.addEventListener("click", function () {
  addnumber(8);
});

btn__9.addEventListener("click", function () {
  addnumber(9);
});

btn__4.addEventListener("click", function () {
  addnumber(4);
});

btn__5.addEventListener("click", function () {
  addnumber(5);
});

btn__6.addEventListener("click", function () {
  addnumber(6);
});

btn__1.addEventListener("click", function () {
  addnumber(1);
});

btn__2.addEventListener("click", function () {
  addnumber(2);
});

btn__3.addEventListener("click", function () {
  addnumber(3);
});

btn__0.addEventListener("click", function () {
  addnumber(0);
});

btn__multiply.addEventListener("click", function () {
  let firstNumber = result.innerHTML;
  let calcMode = "multiply";
  result.innerHTML = "";
  return firstNumber, calcMode;
});

btn__equal.addEventListener("click", function () {
  let secondNumber = result.innerHTML;
  if (calcMode == "multiply") {
    result.innerHTML = `${firstNumber * secondNumber}`;
  }
});
