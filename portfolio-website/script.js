// Toggle between light and dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const icon = document.querySelector(".toggle-mode i");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
}

// Scroll animation
const sections = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

sections.forEach(section => {
  observer.observe(section);
});

// Restart hero title animation every 10 seconds
function restartHeroAnimation() {
  const title = document.getElementById('hero-title');
  if (!title) return;

  title.classList.remove('animated-title');

  // Trigger reflow to reset animation
  void title.offsetWidth;

  title.classList.add('animated-title');
}

// Run every 10 seconds
setInterval(restartHeroAnimation, 10000);
