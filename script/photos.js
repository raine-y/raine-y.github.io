const shadowbox = document.getElementById("shadowbox");
const shadowboxImg = document.getElementById("shadowbox-img");
const images = document.querySelectorAll(".img_grid_item");

images.forEach((img) => {
  img.addEventListener("click", () => {
    shadowboxImg.src = img.src;
    shadowboxImg.alt = img.alt;
    shadowbox.classList.add("active");
  });
});

shadowbox.addEventListener("click", (e) => {
  if (e.target !== shadowboxImg) {
    shadowbox.classList.remove("active");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    shadowbox.classList.remove("active");
  }
});
