document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('#carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('#next-button');
    const prevButton = document.querySelector('#prev-button');
    const indicators = document.querySelectorAll('.indicator');
    
    let currentIndex = 0;
    const slideWidth = slides[0].getBoundingClientRect().width;
    
    // Arrange slides next to each other
    slides.forEach((slide, index) => {
        slide.style.left = `${index * 100}%`;
    });
    
    // Update indicators
    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('opacity-100');
                indicator.classList.remove('opacity-50');
            } else {
                indicator.classList.remove('opacity-100');
                indicator.classList.add('opacity-50');
            }
        });
    }
    
    // Move to slide
    function moveToSlide(index) {
        track.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
        updateIndicators();
    }
    
    // Next button click
    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            moveToSlide(currentIndex + 1);
        }
    });
    
    // Previous button click
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            moveToSlide(currentIndex - 1);
        }
    });
    
    // Indicator clicks
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            moveToSlide(index);
        });
    });
}); 