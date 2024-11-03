// Plik: intersection-observer.js
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(onIntersection, observerOptions);

    // Funkcja do podziału obrazów na fragmenty
    function splitImage(image) {
        const gridSize = 10; // Podział na 10x10
        const fragmentWidth = image.clientWidth / gridSize;
        const fragmentHeight = image.clientHeight / gridSize;

        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        wrapper.style.width = `${image.clientWidth}px`;
        wrapper.style.height = `${image.clientHeight}px`;

        for (let row = 0; row < gridSize; row++) {
            for (let col = 0; col < gridSize; col++) {
                const part = document.createElement('div');
                part.classList.add('img-part', 'scroll-reveal');
                part.style.width = `${fragmentWidth}px`;
                part.style.height = `${fragmentHeight}px`;
                part.style.left = `${col * fragmentWidth}px`;
                part.style.top = `${row * fragmentHeight}px`;
                part.style.position = 'absolute';

                const imgFragment = document.createElement('img');
                imgFragment.src = image.src;
                imgFragment.style.width = `${image.clientWidth}px`;
                imgFragment.style.height = `${image.clientHeight}px`;
                imgFragment.style.objectFit = 'cover';
                imgFragment.style.objectPosition = `-${col * fragmentWidth}px -${row * fragmentHeight}px`;

                part.appendChild(imgFragment);
                wrapper.appendChild(part);
            }
        }

        image.style.display = 'none';
        image.parentElement.appendChild(wrapper);
    }

    // Znalezienie wszystkich obrazów, które chcemy pociąć
    const images = document.querySelectorAll('img.ofirmie');
    images.forEach(img => splitImage(img));

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => observer.observe(el));

    function onIntersection(entries) {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }
});
// script.js
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    toggleButton.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });
});
