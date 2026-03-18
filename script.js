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

// --- TIME TOGETHER COUNTER LOGIC ---
// Change this to the exact date you got together! (Format: YYYY-MM-DD)
const startDate = new Date('2024-03-03T00:00:00'); 

function updateCounter() {
    const now = new Date();
    const difference = now - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    document.getElementById('time-counter').innerHTML = 
        `${days} Days, ${hours} Hrs, ${minutes} Mins, ${seconds} Secs`;
}
// Run it once immediately, then update every second
updateCounter();
setInterval(updateCounter, 1000);


// --- REASONS GENERATOR LOGIC ---
const reasons = [
    "Because your smile literally lights up my day. ✨",
    "Because you deal with my crazy ideas (like making this website). 😂",
    "Because of the way you look at me. 🥰",
    "Because you are my favorite person to do absolutely nothing with. 🛋️",
    "Because you make me want to be a better man every single day. 💪",
    "Because you always know exactly how to make me laugh. 😆"
];

const reasonBtn = document.getElementById('reason-btn');
const reasonText = document.getElementById('reason-text');

reasonBtn.addEventListener('click', () => {
    // Pick a random reason from the array
    const randomIndex = Math.floor(Math.random() * reasons.length);
    
    // Add a tiny animation effect when text changes
    reasonText.style.opacity = 0;
    setTimeout(() => {
        reasonText.innerText = reasons[randomIndex];
        reasonText.style.opacity = 1;
        reasonText.style.transition = "opacity 0.4s ease";
    }, 200);
});
