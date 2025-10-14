// Animation sequencing - two stages
document.addEventListener('DOMContentLoaded', function() {
    const tagline = document.getElementById('tagline');
    const contactText = document.getElementById('contact-text');
    const video = document.getElementById('background-video');

    // Try to play video, handle autoplay restrictions
    var playPromise = video.play();

    if (playPromise !== undefined) {
        playPromise.catch(function(error) {
            console.log('Video autoplay prevented:', error);
            // On mobile, try to play on first user interaction
            document.body.addEventListener('touchstart', function() {
                video.play();
            }, { once: true });

            document.body.addEventListener('click', function() {
                video.play();
            }, { once: true });
        });
    }

    // Stage 1: Show tagline "100% Pure Water, From the Heart of Maine"
    setTimeout(function() {
        tagline.classList.add('visible');
    }, 800);

    // Stage 2: Fade out tagline (after 6.2 seconds on screen - 2 more seconds)
    setTimeout(function() {
        tagline.classList.add('fade-out');
    }, 7000);

    // Stage 3: Show "Inquire Within" after fade out
    setTimeout(function() {
        contactText.classList.add('visible');
    }, 9000);
});

// Handle video loading errors gracefully
document.getElementById('background-video').addEventListener('error', function(e) {
    console.log('Video loading error - showing fallback background');
    // The CSS fallback will automatically display
});
