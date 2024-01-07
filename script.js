const canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
const balls = [];

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xVelocity = (Math.random() - 0.5) * 10;
    this.yVelocity = (Math.random() - 0.5) * 10;
    this.size = Math.random() * 30 + 10;
    this.color = `hsl(${Math.random() * 360}, ${Math.random() * 100}%, ${
      Math.random() * 100
    }%)`;
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, 30, 0, Math.PI * 2);
    ctx.fill();
  }
  update() {
    this.x += this.xVelocity;
    this.y += this.yVelocity;
    // if (this.x - this.size < 0 || this.x + this.size > canvas.width) {
    //   this.xVelocity *= -1;
    // }
    // if (this.y - this.size < 0 || this.y + this.size > canvas.height) {
    //   this.yVelocity *= -1;
    // }
  }
}

function animate() {
  ctx.fillStyle = "#f2f2f2";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  balls.forEach((ball) => {
    ball.update();
    ball.draw();
  });
  requestAnimationFrame(animate);
}

animate();

canvas.addEventListener("click", (e) => {
  const ball = new Ball(e.clientX, e.clientY);
  balls.push(ball);
});
