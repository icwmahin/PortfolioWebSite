// Create a basic Three.js scene
let scene, camera, renderer, controls;
const floatingObjects = [];

init();
animate();

function init() {
  // Set up scene
  scene = new THREE.Scene();

  // Set up camera
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // Set up renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("canvas-container").appendChild(renderer.domElement);

  // Add ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  // Add point light for highlighting objects
  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(10, 10, 10);
  scene.add(pointLight);

  // Create floating objects (e.g., cubes)
  for (let i = 0; i < 5; i++) {
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ color: 0xff9800 });
    const cube = new THREE.Mesh(geometry, material);

    // Random positions for the floating effect
    cube.position.set(
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10
    );

    cube.userData = { project: `Project ${i + 1}` }; // Assign project data
    floatingObjects.push(cube);
    scene.add(cube);
  }

  // Add orbit controls for smooth navigation
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.25;
  controls.enableZoom = true;

  // Handle window resize
  window.addEventListener("resize", onWindowResize, false);

  // Add click event listener for interactions
  document.addEventListener("click", onDocumentClick, false);
}

// Adjust camera and renderer on window resize
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// Handle object clicks
function onDocumentClick(event) {
  // Convert mouse click to normalized device coordinates
  const mouse = new THREE.Vector2();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Create a raycaster to detect clicks
  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse, camera);

  // Check for intersected objects
  const intersects = raycaster.intersectObjects(floatingObjects);
  if (intersects.length > 0) {
    const selectedObject = intersects[0].object;
    alert(`You clicked on ${selectedObject.userData.project}`);
    // You can add further animation or transitions here
  }
}

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Make objects float by rotating them
  floatingObjects.forEach((object) => {
    object.rotation.x += 0.01;
    object.rotation.y += 0.01;
  });

  controls.update();
  renderer.render(scene, camera);
}
