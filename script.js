"use strict";

// selecting html
const result = document.querySelector(".result__text");
const firstNumber = document.querySelector(".first__number");
const symbolSign = document.querySelector(".symbol");
const secondNumber = document.querySelector(".second__number");
const btn7 = document.querySelector(".btn__7");
const btn8 = document.querySelector(".btn__8");
const btn9 = document.querySelector(".btn__9");
const btnDevide = document.querySelector(".btn__devide");
const btn4 = document.querySelector(".btn__4");
const btn5 = document.querySelector(".btn__5");
const btn6 = document.querySelector(".btn__6");
const btnMultiply = document.querySelector(".btn__multiply");
const btn1 = document.querySelector(".btn__1");
const btn2 = document.querySelector(".btn__2");
const btn3 = document.querySelector(".btn__3");
const btn0 = document.querySelector(".btn__0");
const btnEqual = document.querySelector(".btn__equal");
const btnAdd = document.querySelector(".btn__add");
const btnClear = document.querySelector(".btn__clear");
const btnSubtrack = document.querySelector(".btn__subtrack");

let symbolPick = "";
let symbolSelected = false;
firstNumber.innerHTML = "";
symbolSign.innerHTML = "";
secondNumber.innerHTML = "";

const addNumber = function (x) {
  if (symbolSelected == false) {
    firstNumber.innerHTML = `${firstNumber.innerHTML + x}`;
  } else if (symbolSelected == true) {
    secondNumber.innerHTML = `${secondNumber.innerHTML + x}`;
  }
};

//nasluchiwanie
btn7.addEventListener("click", function () {
  addNumber(7);
});

btn8.addEventListener("click", function () {
  addNumber(8);
});

btn9.addEventListener("click", function () {
  addNumber(9);
});

btnDevide.addEventListener("click", function () {
  symbolSelected = true;
  symbolSign.innerHTML = ` : `;
  symbolPick = "devide";
});

btn4.addEventListener("click", function () {
  addNumber(4);
});

btn5.addEventListener("click", function () {
  addNumber(5);
});

btn6.addEventListener("click", function () {
  addNumber(6);
});

btnMultiply.addEventListener("click", function () {
  symbolSelected = true;
  symbolSign.innerHTML = ` ꞏ `;
  symbolPick = "multiply";
});

btn1.addEventListener("click", function () {
  addNumber(1);
});

btn2.addEventListener("click", function () {
  addNumber(2);
});

btn3.addEventListener("click", function () {
  addNumber(3);
});

btn0.addEventListener("click", function () {
  addNumber(0);
});

btnEqual.addEventListener("click", function () {
  if (symbolPick == "devide") {
  } else if (symbolPick == "multiply") {
  } else if (symbolPick == "add") {
  } else if (symbolPick == "subtrack") {
  }
});

btnAdd.addEventListener("click", function () {
  symbolSelected = true;
  symbolSign.innerHTML = ` + `;
  symbolPick = "add";
});

btnClear.addEventListener("click", function () {
  symbolSelected = false;
  firstNumber.innerHTML = "";
  symbolSign.innerHTML = "";
  secondNumber.innerHTML = "";
});

btnSubtrack.addEventListener("click", function () {
  symbolSelected = true;
  symbolSign.innerHTML = ` - `;
  symbolPick = "subtrack";
});
