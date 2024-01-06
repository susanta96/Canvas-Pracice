const canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
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
}

canvas.addEventListener("click", (e) => {
  const ball = new Ball(e.clientX, e.clientY);
  ball.draw();
});
