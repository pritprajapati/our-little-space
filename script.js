const track = document.getElementById('track');
const images = document.querySelectorAll('.carousel-img');

let currentIndex = 0;

function moveSlide() {
    currentIndex++;
    
    // If we reach the end of the images, loop back to the first one
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    
    // Slide the track
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Automatically run the moveSlide function every 2000 milliseconds (2 seconds)
setInterval(moveSlide, 2000);
