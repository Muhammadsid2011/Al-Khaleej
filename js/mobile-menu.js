// Mobile Menu JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navbar = document.querySelector('.navbar-nav');

    if (mobileMenuToggle && navbar) {
        // Toggle menu on hamburger click
        mobileMenuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });

        // Close menu when clicking a link
        navbar.addEventListener('click', (e) => {
            if (e.target.classList.contains('nav-link')) {
                closeMenu();
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navbar.classList.contains('active') && 
                !navbar.contains(e.target) && 
                !mobileMenuToggle.contains(e.target)) {
                closeMenu();
            }
        });

        // Close menu when resizing above mobile breakpoint
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                closeMenu();
            }
        });
    }

    function toggleMenu() {
        mobileMenuToggle.classList.toggle('active');
        navbar.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    }

    function closeMenu() {
        mobileMenuToggle.classList.remove('active');
        navbar.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});