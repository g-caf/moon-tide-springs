// Animation sequencing - two stages
document.addEventListener('DOMContentLoaded', function() {
    const tagline = document.getElementById('tagline');
    const contactText = document.getElementById('contact-text');
    const video = document.getElementById('background-video');

    // Ensure video plays (some browsers require this)
    video.play().catch(function(error) {
        console.log('Video autoplay prevented:', error);
    });

    // Stage 1: Show tagline "100% Pure Water, From the Heart of Maine"
    setTimeout(function() {
        tagline.classList.add('visible');
    }, 800);

    // Stage 2: Fade out tagline (after 4.2 seconds on screen - 40% longer)
    setTimeout(function() {
        tagline.classList.add('fade-out');
    }, 5000);

    // Stage 3: Show "Inquire Within" after fade out
    setTimeout(function() {
        contactText.classList.add('visible');
    }, 7000);
});

// Handle video loading errors gracefully
document.getElementById('background-video').addEventListener('error', function(e) {
    console.log('Video loading error - showing fallback background');
    // The CSS fallback will automatically display
});
