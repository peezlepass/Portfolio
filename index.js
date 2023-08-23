const canvas = document.getElementById("simulator");

const ctx = canvas.getContext("2d");

let dot = {
  x: 50,
  y: 50,
};
// let velocity = [1, 1];
// let acceleration = [0, 0];

setInterval(() => {
  clear(ctx);
  draw(ctx);
  update();
}, 16);

function clear(ctx) {
  ctx.clearRect(0, 0, 1024, 768);
}

function draw(ctx) {
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(dot.x, dot.y, 5, 0, 2 * Math.PI);
  ctx.fill();
  // velocity = add(velocity, acceleration);
  // dot = add(dot, velocity);
}

function update(vectorA, vectorB) {
  // return [vectorA[0] + vectorB[0], vectorA[1] + vectorB[1]];
}
