// Adding interactivity to the buttons
document.querySelectorAll(".neomorph-btn").forEach((button) => {
  button.addEventListener("click", function () {
    alert("You clicked on a project! More interactivity can be added here.");
  });
});

// Dark mode toggle functionality
document.getElementById("toggle").addEventListener("click", function () {
  const body = document.getElementById("body");
  body.classList.toggle("dark-mode");
});
