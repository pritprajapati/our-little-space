const track = document.getElementById('track');
const images = document.querySelectorAll('.carousel-img');
const dotsContainer = document.getElementById('dots');

let currentIndex = 0;

// Create dots based on the number of images
images.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.onclick = () => goToSlide(index);
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateCarousel() {
    // Move the track
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

function moveSlide(direction) {
    currentIndex += direction;
    
    // Loop back around if at the ends
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    
    updateCarousel();
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}