document.addEventListener("DOMContentLoaded", function () {
  // Add animations or more interactions if needed
  // Example: Scrolling animation or fade effects
  const sections = document.querySelectorAll(".project-section");

  window.addEventListener("scroll", () => {
    sections.forEach((section) => {
      const sectionPos = section.getBoundingClientRect().top;
      const screenPos = window.innerHeight / 1.3;

      if (sectionPos < screenPos) {
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
      }
    });
  });
});
// Toggle Dark Mode Functionality
document.getElementById("toggle").addEventListener("click", function () {
  const body = document.getElementById("body");
  body.classList.toggle("dark-mode");
});
