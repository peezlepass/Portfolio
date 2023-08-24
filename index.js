const canvas = document.getElementById("simulator");

const ctx = canvas.getContext("2d");

const width = 1024;
const height = 768;

let dot = [50, 50];
let velocity = [1, 0];
let acceleration = [0, 0];
let gravity = [0, 0.001];

setInterval(() => {
  clear(ctx);
  draw(ctx);
  update();
}, 16);

function clear(ctx) {
  ctx.clearRect(0, 0, width, height);
}

function draw(ctx) {
  const [x, y] = dot;
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, 2 * Math.PI);
  ctx.fill();
  velocity = add(velocity, acceleration);
  dot = add(dot, velocity);
}

function update() {
  acceleration = add(acceleration, gravity);
  velocity = add(velocity, acceleration);
  dot = add(dot, velocity);
  if (dot[1] >= height) {
    dot[1] = 0;
  }
}

function add(vectorA, vectorB) {
  return [vectorA[0] + vectorB[0], vectorA[1] + vectorB[1]];
}
