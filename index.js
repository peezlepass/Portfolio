const canvas = document.getElementById("simulator");

const ctx = canvas.getContext("2d");

const width = 1024;
const height = 768;

let dots = [
  [50, 50],
  [200, 200],
];
let velocities = [
  [10, 10],
  [10, 10],
];

setInterval(() => {
  clear(ctx);
  draw(ctx);
  update();
}, 16);

function clear(ctx) {
  ctx.clearRect(0, 0, width, height);
}

function draw(ctx) {
  for (let [x, y] of dots) {
    // let dot = dots[i] same as let [x, y] = dots[i]
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
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
  }
}

function add(vectorA, vectorB) {
  return [vectorA[0] + vectorB[0], vectorA[1] + vectorB[1]];
}
