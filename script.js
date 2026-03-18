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

// --- TIME TOGETHER COUNTER LOGIC (FLIP CLOCK) ---
const startDate = new Date('2023-10-12T00:00:00'); // Remember to set your actual start date!

// Helper function to add leading zeros (e.g., turns 5 into 05)
function pad(num) {
    return num.toString().padStart(2, '0');
}

function updateCounter() {
    const now = new Date();
    const difference = now - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    // Get the DOM elements
    const daysEl = document.getElementById('fc-days');
    const hoursEl = document.getElementById('fc-hours');
    const minsEl = document.getElementById('fc-minutes');
    const secsEl = document.getElementById('fc-seconds');

    // Update the text inside the cards
    daysEl.innerText = pad(days);
    hoursEl.innerText = pad(hours);
    minsEl.innerText = pad(minutes);
    
    // Only animate the seconds card every tick to give it that mechanical feel
    if (secsEl.innerText !== pad(seconds)) {
        secsEl.innerText = pad(seconds);
        
        // Remove and re-add the animation class to trigger it
        secsEl.classList.remove('tick-anim');
        void secsEl.offsetWidth; // This forces the browser to restart the animation
        secsEl.classList.add('tick-anim');
    }
}

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
