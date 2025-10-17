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

    // Auto-scroll to content after viewing hero section
    let hasScrolled = false;
    let scrollTimeout;

    // Only trigger auto-scroll if user hasn't manually scrolled
    const triggerAutoScroll = () => {
        if (!hasScrolled && window.scrollY < 100) {
            scrollTimeout = setTimeout(() => {
                if (!hasScrolled && window.scrollY < 100) {
                    // Smooth scroll to the first content section
                    const contentSection = document.querySelector('.content-sections');
                    if (contentSection) {
                        contentSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            }, 4000); // Wait 4 seconds before auto-scrolling
        }
    };

    // Track manual scrolling
    const handleScroll = () => {
        hasScrolled = true;
        clearTimeout(scrollTimeout);
        window.removeEventListener('scroll', handleScroll);
    };

    window.addEventListener('scroll', handleScroll);

    // Start the auto-scroll timer
    triggerAutoScroll();

    // Sticky header on scroll
    const stickyHeader = document.getElementById('sticky-header');
    let lastScrollY = window.scrollY;

    const handleStickyHeader = () => {
        const scrollY = window.scrollY;

        // Show header when scrolled down past the hero section (approx 80vh)
        if (scrollY > window.innerHeight * 0.8) {
            stickyHeader.classList.add('visible');
        } else {
            stickyHeader.classList.remove('visible');
        }

        lastScrollY = scrollY;
    };

    window.addEventListener('scroll', handleStickyHeader, { passive: true });
});

// Handle video loading errors gracefully
document.getElementById('background-video').addEventListener('error', function(e) {
    console.log('Video loading error - showing fallback background');
    // The CSS fallback will automatically display
});
