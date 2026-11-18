function clock() {
  const clockDisplay = document.getElementById("clock_text");
  const today = new Date();
  clockDisplay.textContent =
    today.getHours() + ":" + checkTime(today.getMinutes());
  setTimeout(clock, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
