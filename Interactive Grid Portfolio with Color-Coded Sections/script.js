// script.js

// Select filter buttons and project boxes
const filterButtons = document.querySelectorAll(".filter-btn");
const projectBoxes = document.querySelectorAll(".project-box");

// Add click event to each filter button
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    // Loop through project boxes and display based on selected filter
    projectBoxes.forEach((box) => {
      if (filter === "all" || box.getAttribute("data-category") === filter) {
        box.style.display = "block"; // Show project
      } else {
        box.style.display = "none"; // Hide project
      }
    });
  });
});
