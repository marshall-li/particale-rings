let img;

function preload() {
  // 加载图片
  img = loadImage('../asset/img/color.png'); // 替换为你的图片路径
}

function setup() {
  createCanvas(img.width, img.height);
  noLoop();

  // 在图片上生成10个随机点
  for (let i = 0; i < 10; i++) {
    let x = floor(random(img.width));
    let y = floor(random(img.height));
    let col = img.get(x, y); // 获取图片上点的颜色
    fill(col);
    noStroke();
    ellipse(x, y, 10, 10);
  }
}
