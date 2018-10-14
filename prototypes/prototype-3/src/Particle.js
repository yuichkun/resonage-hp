class Particle {
  constructor(ctx, w, h) {
    this.ctx = ctx;
    this.r = Math.random() * 20;
    this.x = Math.random() * w;
    this.y = Math.random() * h;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.stroke();;
  }
}

export default Particle;