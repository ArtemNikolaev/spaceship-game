const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

function paintStars(stars) {
  ctx.fillStyle = '#000000';
  ctx.fillRect(0,0, canvas.width, canvas.height);
  ctx.fillStyle = '#ffffff';
  stars.forEach(star => {
    ctx.fillRect(star.x, star.y, star.size, star.size);
  });
}

function drawTriangle(x, y, width, color, direction) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x - width, y);
  ctx.lineTo(x, direction === 'up' ? y - width : y + width);
  ctx.lineTo(x + width, y);
  ctx.lineTo(x - width, y);
  ctx.fill();
}

function paintSpaceShip(x, y) {
  drawTriangle(x, y, 20, '#ff0000', 'up');
}
