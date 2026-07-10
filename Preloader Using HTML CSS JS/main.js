let preloder = document.querySelector(".preloder");
let contentEl = document.querySelector(".content");

window.addEventListener("load", () => {
  setTimeout(() => {
    preloder.style.display = "none";
    contentEl.style.display = "block";
  }, 5000);
});
