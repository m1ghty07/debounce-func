"use strict";

const out = document.querySelector(".out"),
  input = document.querySelector("input");

const debounce = (fn, ms) => {
  let timeout;

  return function () {
    const fnCall = () => {
      fn.apply(this, arguments);
    };
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, ms);
  };
};

function onInputChange(e) {
  out.textContent = e.target.value;
}

onInputChange = debounce(onInputChange, 500);

input.addEventListener("keyup", onInputChange);
