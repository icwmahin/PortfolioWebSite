// Function to load levels and display project content
function loadLevel(level) {
  const levelContent = document.getElementById("level-content");
  const soundEffect = document.getElementById("sound-effect");

  // Play sound effect when level is clicked
  soundEffect.play();

  switch (level) {
    case "level1":
      levelContent.innerHTML = `
                <h2>LEVEL 1: Pixel Adventure</h2>
                <p>Welcome to Pixel Adventure, a project where pixel art meets web design!</p>
            `;
      break;
    case "level2":
      levelContent.innerHTML = `
                <h2>LEVEL 2: 8-Bit Heroes</h2>
                <p>Explore the 8-bit world with our hero-themed design challenges.</p>
            `;
      break;
    case "level3":
      levelContent.innerHTML = `
                <h2>LEVEL 3: Arcade Revival</h2>
                <p>Reviving the old-school arcade style in modern web development.</p>
            `;
      break;
    default:
      levelContent.innerHTML = `<p>Invalid level!</p>`;
  }
}

// Prevent audio from playing on page load
document
  .getElementById("sound-effect")
  .addEventListener("canplaythrough", (event) => {
    event.target.muted = true;
  });
