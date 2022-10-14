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
let a;
let b;
let c;

btn__7.addEventListener("click", function () {
  if (typeof a == `undefined`) {
    result.innerHTML = "7";
    let a = 7;
    let c = a.toString();
  } else if (typeof a == `number`) {
    result.innerHTML = c + 7;
  }
});

btn__8.addEventListener("click", function () {});
