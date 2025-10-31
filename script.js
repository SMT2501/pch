// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all service cards
    const serviceCards = document.querySelectorAll('.service-card');
    
    // Add click event to each service card
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const serviceType = this.getAttribute('data-service');
            const modal = document.getElementById(`${serviceType}-modal`);
            if (modal) {
                modal.style.display = 'block';
            }
        });
    });
    
    // Close modal functionality
    const closeButtons = document.querySelectorAll('.close-modal');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.style.display = 'none';
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a, .btn').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Floating contact button functionality
    const contactBtn = document.querySelector('.contact-btn');
    const contactForm = document.querySelector('.contact-form-container');
    const cancelContact = document.getElementById('cancel-contact');
    
    contactBtn.addEventListener('click', function() {
        contactForm.classList.toggle('active');
    });
    
    cancelContact.addEventListener('click', function() {
        contactForm.classList.remove('active');
    });
    
    // Close contact form when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.floating-contact') && contactForm.classList.contains('active')) {
            contactForm.classList.remove('active');
        }
    });
});
