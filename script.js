// Clock functionality
function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Calculate rotations
  const hourRotation = (hours % 12) * 30 + minutes * 0.5;
  const minuteRotation = minutes * 6;
  const secondRotation = seconds * 6;

  // Apply rotations
  document.querySelector('.hour').style.setProperty('--rotation', `${hourRotation}deg`);
  document.querySelector('.minute').style.setProperty('--rotation', `${minuteRotation}deg`);
  document.querySelector('.second').style.setProperty('--rotation', `${secondRotation}deg`);

  // Update digital time
  const formattedTime = [
    String(hours).padStart(2, '0'),
    String(minutes).padStart(2, '0'),
    String(seconds).padStart(2, '0')
  ].join(':');
  
  document.getElementById('digital-time').textContent = formattedTime;
}

// Initialize clock
setInterval(updateClock, 1000);
updateClock(); // Run immediately to avoid initial delay

// Sparkle animation
function animateSparkles() {
  const sparkles = document.querySelectorAll('.sparkle');
  sparkles.forEach((sparkle, index) => {
    // Randomize animation delay for each sparkle
    sparkle.style.animationDelay = `${index * 0.3}s`;
  });
}

// Initialize animations
animateSparkles();

// Settings functionality would go here
// (To be implemented based on user feedback)