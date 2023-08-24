const canvas = document.getElementById("simulator");

const ctx = canvas.getContext("2d");

const width = 1024;
const height = 768;
const numberOfDots = 10;

let dots = [];
let velocities = [];

for (let i = 0; i < numberOfDots; i++) {
  dots.push([randomNumber(0, width), randomNumber(0, height)]);
  velocities.push([randomNumber(-5, 5), randomNumber(-5, 5)]);
}
// let dots = [
//   [50, 50],
//   [200, 200],
// ];
// let velocities = [
//   [10, 10],
//   [10, 10],
// ];

setInterval(() => {
  clear(ctx);
  draw(ctx);
  update();
}, 16);

function clear(ctx) {
  ctx.clearRect(0, 0, width, height);
}

function draw(ctx) {
  for (let i = 0; i < dots.length; i++) {
    for (let j = 0; j < dots.length; j++) {
      if (i !== j) {
        if (distance(dots[i], dots[j]) < 100) {
          ctx.strokeStyle = "green";
          line(ctx, ...dots[i], ...dots[j]);
        }
      }
    }
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(dots[i][0], dots[i][1], 5, 0, 2 * Math.PI);
    ctx.fill();
  }
}

function update() {
  for (let i = 0; i < dots.length; i++) {
    dots[i] = add(dots[i], velocities[i]);
    if (dots[i][1] >= height) {
      dots[i][1] = 0;
    }
    if (dots[i][0] >= width) {
      dots[i][0] = 0;
    }
    if (dots[i][1] <= 0) {
      dots[i][1] = height;
    }
    if (dots[i][0] <= 0) {
      dots[i][0] = width;
    }
  }
}

function add(vectorA, vectorB) {
  return [vectorA[0] + vectorB[0], vectorA[1] + vectorB[1]];
}

function randomNumber(from, to) {
  const distance = to - from;
  const random = Math.random() * distance;
  return from + random;
}

function distance([x1, y1], [x2, y2]) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function line(ctx, x1, y1, x2, y2) {
  ctx.beginPath(); // Start a new path
  ctx.moveTo(x1, y1); // Move the pen to (30, 50)
  ctx.lineTo(x2, y2); // Draw a line to (150, 100)
  ctx.stroke(); // Render the path
}
