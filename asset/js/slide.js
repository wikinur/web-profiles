// Slider
let start = 0;
otomatis();

function otomatis() {
  const slides = document.querySelectorAll(".slide");
  // console.log(slides);
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  if (start >= slides.length) {
    start = 0;
  }

  slides[start].style.display = "block";
  //   console.log("start ke" + start);
  start++;

  setTimeout(otomatis, 3000);
}
