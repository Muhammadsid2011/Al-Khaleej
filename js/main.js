// Main JavaScript file
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initializeNavigation();
    initializeNewsletterForm();
    initializeForms();
    initializeAnimations();
    initializeAccordions();
});

function initializeAccordions() {
    // Handle both FAQ and Review items
    const accordionItems = document.querySelectorAll('.faq-item, .review-item');
    
    accordionItems.forEach(item => {
        const trigger = item.querySelector('.faq-question, .review-header');
        
        trigger.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            accordionItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

function initializeNavigation() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navbarNav = document.querySelector('.navbar-nav');

    if (mobileMenuToggle && navbarNav) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navbarNav.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Close menu when clicking a link
        navbarNav.addEventListener('click', (e) => {
            if (e.target.classList.contains('nav-link')) {
                mobileMenuToggle.classList.remove('active');
                navbarNav.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuToggle.contains(e.target) && !navbarNav.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                navbarNav.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }
}

function initializeNewsletterForm() {
    const forms = document.querySelectorAll('.newsletter-form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            if (validateEmail(email)) {
                showNotification('Thank you for subscribing to our newsletter!', 'success');
                form.reset();
            } else {
                showNotification('Please enter a valid email address.', 'error');
            }
        });
    });
}

function initializeForms() {
    const forms = document.querySelectorAll('form:not(.newsletter-form)');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Form submitted successfully!', 'success');
            form.reset();
        });
    });
}

function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card, .service-card, .testimonial-card').forEach(el => {
        observer.observe(el);
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    // Add styles if not exists
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 15px 25px;
                border-radius: 5px;
                color: white;
                z-index: 1000;
                animation: slideIn 0.3s ease-out;
            }
            .notification.success { background-color: #10b981; }
            .notification.error { background-color: #ef4444; }
            .notification.info { background-color: #3b82f6; }
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease-in reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}