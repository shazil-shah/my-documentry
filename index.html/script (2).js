// =====================
// Typing Effect
// =====================
let text = "SYED SHAZIL ALI KAZMI";
let i = 0;

function typing(){
 if(i < text.length){
  document.getElementById("typing").innerHTML += text.charAt(i);
  i++;
  setTimeout(typing,120);
 }
}
typing();

// =====================
// Scroll Animation
// =====================
const elements = document.querySelectorAll(".fade");

window.addEventListener("scroll",()=>{
 elements.forEach(el=>{
  if(el.getBoundingClientRect().top < window.innerHeight-100){
   el.classList.add("show");
  }
 });
});

// =====================
// THREE.JS 3D Background
// =====================
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
 75,
 window.innerWidth / window.innerHeight,
 0.1,
 1000
);

const renderer = new THREE.WebGLRenderer({
 canvas: document.getElementById("bg"),
 alpha: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 40;

// Shape
const geometry = new THREE.IcosahedronGeometry(12, 1);
const material = new THREE.MeshStandardMaterial({
 color: 0xff0000,
 wireframe: true
});
const shape = new THREE.Mesh(geometry, material);
scene.add(shape);

// Light
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(20, 20, 20);
scene.add(light);

// =====================
// Mouse Interaction
// =====================
let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (event) => {
 mouseX = (event.clientX - window.innerWidth / 2) / 100;
 mouseY = (event.clientY - window.innerHeight / 2) / 100;
});

// =====================
// Animate
// =====================
function animate(){
 requestAnimationFrame(animate);

 // Auto rotation
 shape.rotation.x += 0.005;
 shape.rotation.y += 0.005;

 // Mouse movement influence
 shape.rotation.y += mouseX * 0.01;
 shape.rotation.x += mouseY * 0.01;

 renderer.render(scene, camera);
}
animate();

// =====================
// Responsive Resize
// =====================
window.addEventListener("resize", () => {
 camera.aspect = window.innerWidth / window.innerHeight;
 camera.updateProjectionMatrix();
 renderer.setSize(window.innerWidth, window.innerHeight);
});
