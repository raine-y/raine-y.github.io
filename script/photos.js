const shadowbox = document.getElementById("shadowbox");
const shadowboxImg = document.getElementById("shadowbox-img");
const images = document.querySelectorAll(".img_grid_item");

// Open shadowbox when any trigger image is clicked
images.forEach((img) => {
  img.addEventListener("click", () => {
    shadowboxImg.src = img.src;
    shadowboxImg.alt = img.alt;
    shadowbox.classList.add("active");
  });
});

// Close when clicking outside the image (on the dark overlay or 'X' button)
shadowbox.addEventListener("click", (e) => {
  if (e.target !== shadowboxImg) {
    shadowbox.classList.remove("active");
  }
});

// Close when pressing the Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    shadowbox.classList.remove("active");
  }
});
