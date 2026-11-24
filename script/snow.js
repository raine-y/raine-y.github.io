const getSnowflakeCount = () => {
  let width = window.screen.width;
  if (width < 768) return 700;
  if (width < 1024) return 900;
  return 1250;
};

const createSnowflakes = (area, count, minSize, maxSize, zIndex) => {
  for (let i = 0; i < count; i++) {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    const randomSize = Math.random() * (maxSize - minSize) + minSize;
    const randomDuration = Math.random() * 11 + 4;
    const randomXPosition = Math.random() * 100;
    const randomDelay = Math.random() * 6;
    const randomOpacity = Math.random() * 0.3 + 0.6;
    snowflake.style.left = `${randomXPosition}%`;
    snowflake.style.animationDuration = `${randomDuration}s`;
    snowflake.style.width = `${randomSize}px`;
    snowflake.style.animationDelay = `${randomDelay}s`;
    snowflake.style.opacity = `${randomOpacity}`;
    snowflake.style.zIndex = zIndex;
    snowflake.style.filter = "blur(.6px)";
    area.appendChild(snowflake);
  }
};

const foregroundSnow = (area, count) => createSnowflakes(area, count, 6, 7, 7);

const backgroundSnow = (area, count) => createSnowflakes(area, count, 4, 6, 3);

const letItSnow = () => {
  const snowflakeArea = document.querySelector(".snowfall-animation");
  const total = getSnowflakeCount();
  const foregroundCount = Math.floor(total / 2) - 200;
  const backgroundCount = total - foregroundCount + 200;

  foregroundSnow(snowflakeArea, foregroundCount);
  backgroundSnow(snowflakeArea, backgroundCount);
};
