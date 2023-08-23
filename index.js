const canvas = document.getElementById("simulator");

const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);
ctx.clearRect(10, 10, 140, 90);
ctx.fillStyle = "red";
ctx.fillRect(200, 200, 300, 150);
ctx.fillStyle = "blue";
ctx.fillRect(400, 400, 150, 300);
ctx.fillStyle = "yellow";
ctx.fillRect(600, 10, 150, 100);
