function offsetText() {
  const overlay = document.getElementById("header_overlay");
  let topVal = Math.random() * (20 - -1 + 1) + -1;
  let leftVal = Math.random() * (30 - -5 + 1) + -5;
  overlay.style.top = `${topVal}px`;
  overlay.style.left = `${leftVal}px`;
  overlay.style.overflow = "hidden";
}
