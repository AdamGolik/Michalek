document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(onIntersection, observerOptions);
    const elements = document.querySelectorAll('.scroll-reveal');

    elements.forEach(el => observer.observe(el));

    let delay = 0.1;
    function onIntersection(entries) {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.style.animationDelay = `${delay}s`;
                entry.target.classList.add('visible');
                delay += 0.1;
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
