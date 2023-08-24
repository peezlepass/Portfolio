const canvas = document.getElementById("simulator");

const ctx = canvas.getContext("2d");

let dot = [50, 50];
let velocity = [1, 0];
let acceleration = [0, 0];
let gravity = [0, 0.1];

setInterval(() => {
  clear(ctx);
  draw(ctx);
  update();
}, 16);

function clear(ctx) {
  ctx.clearRect(0, 0, 1024, 768);
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
}

function add(vectorA, vectorB) {
  return [vectorA[0] + vectorB[0], vectorA[1] + vectorB[1]];
}
