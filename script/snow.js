const getSnowflakeCount = () => {
  const width = window.innerWidth;
  if (width < 768) return 650;
  if (width < 1024) return 850;
  return 1000;
};

const createSnowflakes = (area, count, minSize, maxSize, zIndex) => {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");

    const size = Math.random() * (maxSize - minSize) + minSize;

    snowflake.style.left = `${Math.random() * 100}%`;
    snowflake.style.width = `${size}px`;
    snowflake.style.animationDuration = `${Math.random() * 11 + 4}s`;
    snowflake.style.animationDelay = `${Math.random() * 6}s`;
    snowflake.style.opacity = `${Math.random() * 0.3 + 0.6}`;
    snowflake.style.zIndex = zIndex;

    fragment.appendChild(snowflake);
  }

  area.appendChild(fragment);
};

const letItSnow = () => {
  const area = document.querySelector(".snowfall-animation");
  if (!area) return;

  const total = getSnowflakeCount();
  const foregroundCount = 38;
  const middlegroundCount = Math.floor((total - foregroundCount) * 0.4);
  const backgroundCount = total - foregroundCount - middlegroundCount;

  createSnowflakes(area, foregroundCount, 6, 8, 10);
  createSnowflakes(area, middlegroundCount, 5, 7, 7);
  createSnowflakes(area, backgroundCount, 4, 6, 3);
};

document.addEventListener("DOMContentLoaded", letItSnow);
