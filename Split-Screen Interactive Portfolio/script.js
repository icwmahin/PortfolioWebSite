// JavaScript to Handle Hover-Triggered Expansions

const projectItems = document.querySelectorAll(".project-item");
const projectContents = document.querySelectorAll(".project-content");

projectItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove active class from all project items and content
    projectItems.forEach((i) => i.classList.remove("active"));
    projectContents.forEach((content) => content.classList.remove("active"));

    // Add active class to the clicked project and its corresponding content
    item.classList.add("active");
    const projectId = item.getAttribute("data-project");
    document.getElementById(`project-${projectId}`).classList.add("active");
  });
});
