// Video playback handling
document.addEventListener('DOMContentLoaded', function() {
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
});

// Handle video loading errors gracefully
document.getElementById('background-video').addEventListener('error', function(e) {
    console.log('Video loading error - showing fallback background');
    // The CSS fallback will automatically display
});
