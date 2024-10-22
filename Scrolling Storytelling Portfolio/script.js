// JavaScript to Handle Scroll-Triggered Animations and Parallax Effects

const sections = document.querySelectorAll(".portfolio-section");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  sections.forEach((section) => {
    // Calculate the position of each section relative to the scroll position
    const sectionPosition = section.offsetTop;

    // Parallax effect: Adjust the background position based on scroll
    const background = section.querySelector(".background-image");
    if (background) {
      const speed = 0.5; // Speed of the parallax effect
      background.style.transform = `translateY(${
        (scrollPosition - sectionPosition) * speed
      }px)`;
    }

    // Add animation to content when in view
    if (
      scrollPosition >= sectionPosition - window.innerHeight / 2 &&
      scrollPosition <
        sectionPosition + section.offsetHeight - window.innerHeight / 2
    ) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
});
