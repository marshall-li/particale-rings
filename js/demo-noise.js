function draw() {
  background(200);

  let x = 100 * noise(0.005 * frameCount);
  let y = 100 * noise(0.005 * frameCount + 10000);

  strokeWeight(5);
  point(x, y);

  describe('A black dot moves randomly on a gray square.');
}