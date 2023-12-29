let lowerLayer;
let upperLayer;

function setup() {
  createCanvas(800, 800);
  
  // 创建下层图形上下文
  lowerLayer = createGraphics(800, 800);
  
  // 创建上层图形上下文
  upperLayer = createGraphics(400, 400);
}

function draw() {
  // 在下层图形上下文中绘制内容
  lowerLayer.background(202, 42, 144);
  lowerLayer.fill(152, 27, 202);
  lowerLayer.ellipse(50, 50, 50, 50);
  
  // 在上层图形上下文中绘制内容
  upperLayer.background(0, 0, 0);
  upperLayer.fill(255, 255, 255);
  upperLayer.rect(0, 0, 50, 50);
  
  // 在主画布上显示下层图形上下文
  image(lowerLayer, 0, 0);
  
  // 在主画布上显示上层图形上下文，实现上层覆盖下层效果
  image(upperLayer, 0, 0);
}
