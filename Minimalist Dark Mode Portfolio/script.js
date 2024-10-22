document.addEventListener("DOMContentLoaded", function () {
  // Loading spinner functionality
  const loadingOverlay = document.querySelector(".loading-overlay");
  setTimeout(() => {
    loadingOverlay.style.opacity = 0;
    setTimeout(() => {
      loadingOverlay.style.display = "none";
    }, 500); // Delay for fading out effect
  }, 1500); // Simulate loading time

  // Smooth Scroll Functionality
  const links = document.querySelectorAll("nav ul li a");
  links.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });

  function smoothScroll(e) {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 80, // Offset for fixed header
      behavior: "smooth",
    });
  }

  // Highlight active section on scroll
  window.addEventListener("scroll", highlightSection);
  const sections = document.querySelectorAll("section");
  const headerHeight = document.querySelector("header").offsetHeight;

  function highlightSection() {
    let currentSection = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - headerHeight;
      if (pageYOffset >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    links.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === currentSection) {
        link.classList.add("active");
      }
    });
  }
});
