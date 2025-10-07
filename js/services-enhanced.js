// Enhanced service cards interactions
document.addEventListener('DOMContentLoaded', function() {
    // Initialize hover effects for service cards
    const serviceCards = document.querySelectorAll('.service-card, .specialized-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            const icon = this.querySelector('.service-icon, .specialized-icon');
            if (icon) {
                icon.style.transform = 'rotateY(360deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            const icon = this.querySelector('.service-icon, .specialized-icon');
            if (icon) {
                icon.style.transform = 'rotateY(0)';
            }
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add intersection observer for fade-in effects
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all service cards and features
    document.querySelectorAll('.service-card, .specialized-card, .feature').forEach(element => {
        observer.observe(element);
    });
});