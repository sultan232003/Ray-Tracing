const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
canvas_width = canvas.width = window.innerWidth
canvas_height = canvas.height = window.innerHeight
let centerX = canvas_width / 2
let centerY = canvas_height / 2

let walls = [];
let ray;
let particle;
let xoff = 0;
let yoff = 10000;

// function setup() {
//   createCanvas(400, 400);
  for (let i = 0; i < 10; i++) {
    let x1 = random(canvas_width);
    let x2 = random(canvas_width);
    let y1 = random(canvas_height);
    let y2 = random(canvas_height);
    walls[i] = new Boundary(x1, y1, x2, y2);
  }
  walls.push(new Boundary(-1, -1, canvas_width, -1));
  walls.push(new Boundary(canvas_width, -1, canvas_width, canvas_height));
  walls.push(new Boundary(canvas_width, canvas_height, -1, canvas_height));
  walls.push(new Boundary(-1, canvas_height, -1, -1));
  project = new Project();
// }

function draw() {
    ctx.clearRect(0, 0, canvas_width, canvas_height)
//   background(0);
  for (let wall of walls) {
    wall.show();
  }
  //Project.update(noise(xoff) * width, noise(yoff) * height);
  project.update(mouseX, mouseY);
  project.show();
  project.look(walls);
  requestAnimationFrame(draw)
}
draw()