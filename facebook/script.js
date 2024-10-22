// Add interactivity like showing alerts on button click
document.querySelectorAll(".post-actions button").forEach((button) => {
  button.addEventListener("click", function () {
    alert(`${this.innerText} clicked!`);
  });
});
