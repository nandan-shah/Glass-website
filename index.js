document.querySelector("#about").addEventListener("click", function () {
  setTimeout(() => {
    aboutDisplay();
  }, 500);
});

function aboutDisplay() {
  document.querySelector(".about").style.display = "block";
  document.querySelector(".blog").style.display = "none";
  document.querySelector("#exp").style.display = "none";
  document.querySelector("#pro").style.display = "none";
}
document.querySelector("#blog").addEventListener("click", function () {
  setTimeout(() => {
    blogDisplay();
  }, 500);
});

function blogDisplay() {
  document.querySelector(".about").style.display = "none";
  document.querySelector(".blog").style.display = "block";
  document.querySelector("#exp").style.display = "none";
  document.querySelector("#pro").style.display = "none";
}

document.querySelector("#experience").addEventListener("click", function () {
  setTimeout(() => {
    experienceDisplay();
  }, 500);
});

function experienceDisplay() {
  document.querySelector(".blog").style.display = "none";
  document.querySelector(".about").style.display = "none";
  document.querySelector("#exp").style.display = "block";
  document.querySelector("#pro").style.display = "none";
}

document.querySelector("#project").addEventListener("click", function () {
  setTimeout(() => {
    projectDisplay();
  }, 500);
});

function projectDisplay() {
  document.querySelector(".blog").style.display = "none";
  document.querySelector(".about").style.display = "none";
  document.querySelector("#exp").style.display = "none";
  document.querySelector("#pro").style.display = "block";
}
