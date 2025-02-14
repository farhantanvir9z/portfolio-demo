function toggleMenu() {
  let x = document.querySelector(".child");
 x.style.display =  (x.style.display === "none") ? "block" : "none"
}

function clicked() {
  let y = document.querySelector(".visibled");
  let z = document.querySelector(".arrow");
  y.style.display = (y.style.display === "none") ? "block" : "none";
  z.style.transform = !(y.style.display === "none") ? "rotate(-180deg)" : "rotate(-0deg)";
}

function clicked1() {
  let y = document.querySelector(".visibled1");
  let z = document.querySelector(".arrow1");
  y.style.display = (y.style.display === "none") ? "block" : "none";
  z.style.transform = !(y.style.display === "none") ? "rotate(-180deg)" : "rotate(0deg)";
}
function clicked2() {
  let y = document.querySelector(".visibled2");
  let z = document.querySelector(".arrow2");
  y.style.display = (y.style.display === "none") ? "block" : "none";
  z.style.transform = !(y.style.display === "none") ? "rotate(-180deg)" : "rotate(0deg)";
}
function clicked3() {
  let y = document.querySelector(".visibled3");
  let z = document.querySelector(".arrow3");
  y.style.display = (y.style.display === "none") ? "block" : "none";
  z.style.transform = !(y.style.display === "none") ? "rotate(-180deg)" : "rotate(0deg)";
}
function init(){
  console.log("javascript initialized");
  toggleMenu();
  clicked();
  clicked1();
  clicked2();
  clicked3();
}