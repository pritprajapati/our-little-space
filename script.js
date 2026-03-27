// --- LIVE DIGITAL CLOCK ---
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    
    document.getElementById('clock').innerText = `${hours}:${minutes}`;
}
setInterval(updateClock, 1000);
updateClock(); // Run immediately

// --- LIVE CALENDAR ---
function updateCalendar() {
    const now = new Date();
    
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const currentMonth = months[now.getMonth()];
    const currentYear = now.getFullYear();
    const currentDate = now.getDate();

    // Update Month and Year (e.g., "Oct 2024")
    document.getElementById('cal-month-year').innerText = `${currentMonth} ${currentYear}`;
    
    // Update Date inside the red circle
    document.getElementById('cal-day').innerText = currentDate;
}
updateCalendar();
