// Animation sequencing - three stages
document.addEventListener('DOMContentLoaded', function() {
    const brandName = document.getElementById('brand-name');
    const tagline = document.getElementById('tagline');
    const contactText = document.getElementById('contact-text');
    const video = document.getElementById('background-video');

    // Ensure video plays (some browsers require this)
    video.play().catch(function(error) {
        console.log('Video autoplay prevented:', error);
    });

    // Stage 1: Show "Moon Tide Springs" (takes 2 seconds to animate in)
    setTimeout(function() {
        brandName.classList.add('visible');
    }, 800);

    // Stage 2: Show tagline below (after brand name is visible)
    setTimeout(function() {
        tagline.classList.add('visible');
    }, 3000);

    // Stage 3: Fade out both brand name and tagline (after 3 seconds together)
    setTimeout(function() {
        brandName.classList.add('fade-out');
        tagline.classList.add('fade-out');
    }, 6000);

    // Stage 4: Show "Inquire Within" after fade out
    setTimeout(function() {
        contactText.classList.add('visible');
    }, 8000);
});

// Handle video loading errors gracefully
document.getElementById('background-video').addEventListener('error', function(e) {
    console.log('Video loading error - showing fallback background');
    // The CSS fallback will automatically display
});
