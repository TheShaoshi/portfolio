// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Animation d'entrée pour la page
    document.body.classList.add('slide-in');

    // Navigation avec animation de sortie
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Empêche le comportement par défaut du lien
            const href = this.getAttribute('href');

            // Animation de sortie
            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = href; // Redirection après l'animation
            }, 500);
        });
    });

    // Animation sur les sections visibles au défilement
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
});
