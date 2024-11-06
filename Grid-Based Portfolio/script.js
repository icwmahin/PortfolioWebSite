// Smooth Scroll Functionality
const links = document.querySelectorAll("nav ul li a");
links.forEach((link) => {
  link.addEventListener("click", smoothScroll);
});

function smoothScroll(event) {
  event.preventDefault();
  const href = this.getAttribute("href");
  const element = document.querySelector(href);
  const offsetTop = element.offsetTop;
  window.scrollTo({
    top: offsetTop,
    behavior: "smooth",
  });
}
