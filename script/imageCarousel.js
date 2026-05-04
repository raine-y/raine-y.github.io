(() => {
    const slides = [...document.querySelectorAll('.slides img')];
    const prevBox = document.getElementById('prevImage');
    const nextBox = document.getElementById('nextImage');
    const btnLeft = document.getElementById('moveLeft');
    const btnRight = document.getElementById('moveRight');

    let current = 0;

    function mod(n, m) {
        return ((n % m) + m) % m;
    }

    function buildPreview(img) {
        const clone = img.cloneNode();
        clone.removeAttribute('id');
        return clone;
    }

    function render() {
        const total = slides.length;
        const prevIdx = mod(current - 1, total);
        const nextIdx = mod(current + 1, total);

        // Main slide — swap src on the existing centre img, or rebuild it
        const mainSlot = document.querySelector('.slides');
        mainSlot.innerHTML = '';
        const mainImg = buildPreview(slides[current]);
        mainImg.classList.add('active-slide');
        mainSlot.appendChild(mainImg);

        // Prev preview
        prevBox.innerHTML = '';
        prevBox.appendChild(buildPreview(slides[prevIdx]));

        // Next preview
        nextBox.innerHTML = '';
        nextBox.appendChild(buildPreview(slides[nextIdx]));
    }

    function advance(dir) {
        current = mod(current + dir, slides.length);
        render();
    }

    btnLeft.addEventListener('click', () => advance(-1));
    btnRight.addEventListener('click', () => advance(1));

    // Keyboard support
    document.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft') advance(-1);
        if (e.key === 'ArrowRight') advance(1);
    });

    // Touch / swipe support
    let touchStartX = null;
    document.getElementById('carousel').addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX;
    }, { passive: true });
    document.getElementById('carousel').addEventListener('touchend', e => {
        if (touchStartX === null) return;
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) advance(diff > 0 ? 1 : -1);
        touchStartX = null;
    }, { passive: true });

    render();
})();
