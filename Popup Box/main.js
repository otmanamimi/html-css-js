let modelBox = document.getElementById("modelBox");
let closeIcon = document.querySelector(".close-icon");
document.onmouseleave = function () {
  modelBox.style.display = "block";
};

closeIcon.addEventListener("click", function () {
  modelBox.style.display = "none";
});

document.addEventListener("click", function () {
  window.location.href = "page2.html";
});
