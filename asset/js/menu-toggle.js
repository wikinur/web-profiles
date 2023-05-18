// Menu Bar
let menu = document.getElementById("menu-icon");
let header = document.querySelector("header ul");

menu.addEventListener("click", () => {
  menu.classList.toggle("muncul");
  header.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  menu.classList.remove("muncul");
  header.classList.remove("active");
});
