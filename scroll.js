document.addEventListener('DOMContentLoaded', function() {
    // Get the scroll indicator element
    const scrollIndicator = document.querySelector('.animate-bounce');
    
    // Add click event listener
    scrollIndicator.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get the next section
        const nextSection = document.getElementById('about'); // or any section you want to scroll to
        
        // Smooth scroll to the next section
        nextSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    // Optional: Hide scroll indicator when scrolled
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) { // Adjust this value as needed
            scrollIndicator.classList.add('opacity-0');
            setTimeout(() => {
                scrollIndicator.classList.add('hidden');
            }, 300);
        } else {
            scrollIndicator.classList.remove('hidden', 'opacity-0');
        }
    });
}); 