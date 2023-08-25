const canvas = document.createElement("canvas");
const width = window.innerWidth;
const height = window.innerHeight;
canvas.setAttribute("width", width);
canvas.setAttribute("height", height);
canvas.style.background = "black";
canvas.style.position = "fixed";
canvas.style.top = 0;
canvas.style.right = 0;
canvas.style.bottom = 0;
canvas.style.left = 0;
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");
const numberOfDots = width < 768 ? 275 : 2000;

let dots = [];
let velocities = [];

for (let i = 0; i < numberOfDots; i++) {
  dots.push([randomNumber(0, width), randomNumber(0, height)]);
  velocities.push([randomNumber(-1, 1), randomNumber(-1, 1)]);
}

setInterval(() => {
  clear(ctx);
  draw(ctx);
  update();
}, 16);

function clear(ctx) {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1 )";
  ctx.rect(0, 0, width, height);
  ctx.fill();
}

function draw(ctx) {
  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      const dist = distance(dots[i], dots[j]);
      if (dist < 100) {
        ctx.strokeStyle = `hsla(${mapPointToColour(
          dots[i][1],
          0,
          height,
          80,
          160
        )}, 100%, 50%, ${(1 - dist / 100) / 10})`;
        line(ctx, ...dots[i], ...dots[j]);
      }
    }
  }
}

const buffer = 100;
function update() {
  for (let i = 0; i < dots.length; i++) {
    add(dots[i], velocities[i]);
    if (dots[i][1] > height + buffer) {
      dots[i][1] = 0 - buffer;
    }
    if (dots[i][0] > width + buffer) {
      dots[i][0] = 0 - buffer;
    }
    if (dots[i][1] < 0 - buffer) {
      dots[i][1] = height + buffer;
    }
    if (dots[i][0] < 0 - buffer) {
      dots[i][0] = width + buffer;
    }
  }
}

function add(vectorA, vectorB) {
  vectorA[0] += vectorB[0];
  vectorA[1] += vectorB[1];
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
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function mapPointToColour(y, min, max, minHue, maxHue) {
  const value = y - min;
  const percent = value / (max - min);
  return minHue + (maxHue - minHue) * percent;
}
