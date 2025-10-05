// Add click event listeners to service cards for mobile/tablet devices
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    // Function to handle card click
    function handleCardClick(e) {
        // Check if the device is touch-enabled
        if (window.matchMedia('(hover: none)').matches) {
            this.classList.toggle('flipped');
            
            // Close other cards
            serviceCards.forEach(card => {
                if (card !== this && card.classList.contains('flipped')) {
                    card.classList.remove('flipped');
                }
            });
        }
    }

    // Add click event listener to each card
    serviceCards.forEach(card => {
        card.addEventListener('click', handleCardClick);
    });
});