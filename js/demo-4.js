let numPoints = 1000;
let radius = 200;

// 渐变色数组
let gradientColors;

function setup() {
  createCanvas(600, 600);
  noStroke();

  // 设置渐变的背景色
  gradientColors = [
    color('#5F0DC7'),
    color('#981BCA'),
    color('#CA2A90'),
    color('#F3495F')
  ];
}

function draw() {
  background(255);

  // 画圆环
  translate(width / 2, height / 2);
  drawRing(numPoints, radius);
}

function drawRing(numPoints, radius) {
  for (let i = 0; i < numPoints; i++) {
    // 计算点的角度
    let angle = map(i, 0, numPoints, 0, TWO_PI);

    // 计算点的坐标
    let x = cos(angle) * radius;
    let y = sin(angle) * radius;

    // 计算渐变色
    let lerpedColor = lerpGradientColor(i / numPoints);
    fill(lerpedColor);

    // 画点
    ellipse(x, y, 5, 5);
  }
}

function lerpGradientColor(position) {
  // 手动进行颜色插值
  let gradientStops = [0, 0.5721, 0.8319, 0.9949];
  let startIndex = floor(position * (gradientStops.length - 1));
  let endIndex = startIndex + 1;
  let startColor = gradientColors[startIndex];
  let endColor = gradientColors[endIndex];
  let inter = map(position, gradientStops[startIndex], gradientStops[endIndex], 0, 1);
  return lerpColor(startColor, endColor, inter);
}
