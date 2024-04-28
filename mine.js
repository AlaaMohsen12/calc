let display = document.getElementById("display");

function alol(am) {
  display.value += am;
}

function amr() {
  display.value = "";
}

function calcs() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Free Palestine";
  }
}
// ========= dark mode
let son = document.getElementById("sun");
let dar = document.getElementById("dark");
let fors = document.querySelector(".o");
let pok = document.querySelector(".container");
let sokd = document.querySelector(".botn");

function darked() {
  document.body.style.backgroundColor = "black";
  dar.style.display = "none";
  son.style.display = "block";
  fors.classList.add("holl");
  pok.classList.add("to");
  sokd.classList.add("sodl");
}

function sod() {
  document.body.style.backgroundColor = "white";
  dar.style.display = "block";
  son.style.display = "none";
  fors.classList.remove("holl");
  pok.classList.remove("to");
  sokd.classList.remove("sodl");
}

dar.addEventListener("click", darked);
son.addEventListener("click", sod);

// let fonm = function (e) {
//   console.log(e);
// };

// son.addEventListener("mousedown", fonm);

// let d = document.getElementById("sox");
// let sommm = function (e) {
//   console.log(e);
// };

// d.addEventListener("click", sommm);
