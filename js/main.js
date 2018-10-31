(function() {
    window.onload = () => {
        const carousel = () => {
            const images = Array.from(document.querySelectorAll('.carousel-img'));
            let activeImg = 1;
            images[0].classList.add('active');
            setInterval(() => {
                images.forEach((img) => {
                    img.classList.remove('active');
                });
                images[activeImg].classList.add('active');
                if (++activeImg >= images.length) {
                    activeImg = 0;
                };
            }, 10000)
        }
        carousel();
    }
})();