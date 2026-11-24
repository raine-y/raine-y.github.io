function offsetText() {
  document.querySelectorAll(".header_overlay").forEach((overlay) => {
    const topVal = Math.random() * 22 - 1; // -1 to 21
    const leftVal = Math.random() * 36 - 5; // -5 to 31
    overlay.style.top = `${topVal}px`;
    overlay.style.left = `${leftVal}px`;
  });
}
