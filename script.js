// Animation sequencing for cards
document.addEventListener('DOMContentLoaded', function() {
    const brandCard = document.getElementById('brand-card');
    const contactCard = document.getElementById('contact-card');
    const video = document.getElementById('background-video');

    // Ensure video plays (some browsers require this)
    video.play().catch(function(error) {
        console.log('Video autoplay prevented:', error);
    });

    // Animate brand card after initial delay
    setTimeout(function() {
        brandCard.classList.add('visible');
    }, 800);

    // Fade out brand card before showing contact card
    setTimeout(function() {
        brandCard.classList.add('fade-out');
    }, 3000);

    // Animate contact card after brand card fades
    setTimeout(function() {
        contactCard.classList.add('visible');
    }, 4200);
});

// Handle video loading errors gracefully
document.getElementById('background-video').addEventListener('error', function(e) {
    console.log('Video loading error - showing fallback background');
    // The CSS fallback will automatically display
});
