var colors = []
let scaleLevel = 2.2
let animationLevel = 2.2
let meteors = [];
let pointsArrar = []
let img
function setup() {
    // createCanvas(1920, 900);
    createCanvas(img.width, img.height);
    // background("#0F051C");

    // noLoop();

    
    // 创建多颗流星
    // createMeteors()
    
}

function draw() {
    background("#0F051C");
    // background("#000000");

    // 更新和绘制每颗流星
    for (let i = 0; i < meteors.length; i++) {

        let angle = random(TWO_PI); // 随机角度
        let radius = random(175,225) * animationLevel * 2; // 圆环的半径
        let endx = width / 2 + cos(angle) * radius;
        let endy = height / 2 + sin(angle) * radius;

        meteors[i].update();
        meteors[i].display();
    }
    // animationLevel += 0.2
    
    if(animationLevel > 5){
        // animationLevel = 2.2
        // createPointsLoop()
    }

    
    // 创建一个圆环
    createRings()
    // TODO 新增多个向外扩散的点 静止时 自动向外扩散
    createMeteors()  
    
}

function preload() {
    // 加载图片
    img = loadImage('../asset/img/color-1.png'); // 替换为你的图片路径
}

function mouseWheel(event) {
    print(event.delta);
    console.log(event.delta);
    if(event.delta > 0){
        if(scaleLevel >= 6.2){
            scaleLevel = 6.2;
            return;
        }
        scaleLevel += event.delta / event.delta;
    }else{
        if(scaleLevel <= 2.2){
            scaleLevel = 2.2;
            return;
        }
        scaleLevel -= event.delta / event.delta;
    }
    //move the square according to the vertical scroll amount
    
    //uncomment to block page scrolling
    //return false;
    clear()
    draw() 
}

function createRings(){
    // 随机填充10000个圆点在圆环上
    for (let i = 0; i < 10000; i++) {
        let angle = random(TWO_PI); // 随机角度
        let radius = random(125,175) * scaleLevel; // 圆环的半径
        let x = width / 2 + cos(angle) * radius;
        let y = height / 2 + sin(angle) * radius;
        let diameter = random(3, 4);
        // 判断圆点在圆环的哪一层给不同的大小
        let fillColor = color(95,13,199);
        if((x - width / 2) / cos(angle) > 125 * scaleLevel && (x - width / 2) / cos(angle) < 135 * scaleLevel){
            diameter = random(0,1)
        }else if((x - width / 2) / cos(angle) > 135 * scaleLevel && (x - width / 2) / cos(angle) < 145 * scaleLevel){
            diameter = random(1,2)
        }else if((x - width / 2) / cos(angle) > 145 * scaleLevel && (x - width / 2) / cos(angle) < 155 * scaleLevel){
            diameter = random(1.5,3.5)
        }else if((x - width / 2) / cos(angle) > 155 * scaleLevel && (x - width / 2) / cos(angle) < 165 * scaleLevel){
            diameter = random(1,2)
        }else if((x - width / 2) / cos(angle) > 165 * scaleLevel && (x - width / 2) / cos(angle) < 175 * scaleLevel){
            diameter = random(0,1)
        }
        // 判断圆点在圆环的位置给不同的颜色
        if((x - width / 2) / radius > 0 && (x - width / 2) / radius < 1 && (y - height / 2) / radius > 0 && (y - height / 2) / radius < 1){
            // 右下
            fillColor = color(155, 30, 208);
            
        }else if((x - width / 2) / radius > 0 && (x - width / 2) / radius < 1 && (y - height / 2) / radius > -1 && (y - height / 2) / radius < 0){
            // 右上
            fillColor = color(220, 58, 139);
            
        }else if((x - width / 2) / radius > -1 && (x - width / 2) / radius < 0 && (y - height / 2) / radius > 0 && (y - height / 2) / radius < 1){
            // 左下
            fillColor = color(120, 22, 206);

        }else if((x - width / 2) / radius > -1 && (x - width / 2) / radius < 0 && (y - height / 2) / radius > -1 && (y - height / 2) / radius < 0){
            // 左上
            fillColor = color(176, 66, 211);
            
        }
        let colorX = floor(random(img.width));
        let colorY = floor(random(img.height));
        let col = img.get(colorX, colorY); // 获取图片上点的颜色
        fill(col);
        // fill(fillColor);
        noStroke();
        ellipse(x, y, diameter, diameter);

    }
    
}

function createPointsLoop(){

    for(let i=0;i<4000;i++){
        let angle = random(TWO_PI); // 随机角度
        let radius = random(50,200) * animationLevel; // 圆环的半径
        let x = width / 2 + cos(angle) * radius;
        let y = height / 2 + sin(angle) * radius;
        let diameter = random(5, 6);
        
        // 判断圆点在圆环的哪一层给不同的大小
        let fillColor = color(255,255,255);
        // if((x - width / 2) / cos(angle) > 125 * animationLevel && (x - width / 2) / cos(angle) < 135 * animationLevel){
        //     diameter = random(0,1)
        // }else if((x - width / 2) / cos(angle) > 135 * animationLevel && (x - width / 2) / cos(angle) < 145 * animationLevel){
        //     diameter = random(1,2)
        // }else if((x - width / 2) / cos(angle) > 145 * animationLevel && (x - width / 2) / cos(angle) < 155 * animationLevel){
        //     diameter = random(1.5,3.5)
        // }else if((x - width / 2) / cos(angle) > 155 * animationLevel && (x - width / 2) / cos(angle) < 165 * animationLevel){
        //     diameter = random(1,2)
        // }else if((x - width / 2) / cos(angle) > 165 * animationLevel && (x - width / 2) / cos(angle) < 175 * animationLevel){
        //     diameter = random(0,1)
        // }

        // 判断圆点在圆环的位置给不同的颜色
        if((x - width / 2) / radius > 0 && (x - width / 2) / radius < 1 && (y - height / 2) / radius > 0 && (y - height / 2) / radius < 1){
            // 右下
            fillColor = color(155, 30, 208);
            
        }else if((x - width / 2) / radius > 0 && (x - width / 2) / radius < 1 && (y - height / 2) / radius > -1 && (y - height / 2) / radius < 0){
            // 右上
            fillColor = color(220, 58, 139);
            
        }else if((x - width / 2) / radius > -1 && (x - width / 2) / radius < 0 && (y - height / 2) / radius > 0 && (y - height / 2) / radius < 1){
            // 左下
            fillColor = color(120, 22, 206);

        }else if((x - width / 2) / radius > -1 && (x - width / 2) / radius < 0 && (y - height / 2) / radius > -1 && (y - height / 2) / radius < 0){
            // 左上
            fillColor = color(176, 66, 211);
            
        }

        fill(fillColor);
        noStroke();
        ellipse(x, y, diameter, diameter);
    }
}

// 绘制一千颗流星
function createMeteors(){
    
    console.log(meteors.length);
    if(meteors.length > 2500){
        meteors.splice(0, 500);
        
    }else{
        for (let i = 0; i < 250; i++) {
            let angle = random(TWO_PI); // 随机角度
            let radius = random(125,150) * animationLevel; // 圆环的半径
            let x = width / 2 + cos(angle) * radius;
            let y = height / 2 + sin(angle) * radius;
            meteors.push(new Meteor(x, y,radius,angle,width,height));
        }
    }
}

class Meteor {
    constructor(x, y , radius , angle , width , height) {
        this.x = x;
        this.y = y;
        this.radius = radius
        this.angle = angle
        this.xRange = (x - width / 2) / radius
        this.yRange = (y - height / 2) / radius
        this.width = width
        this.height = height
        // this.speed = random(10, 20);
        this.speed = 30;
        this.tailLength = 2;
        this.trail = [];
    }

    update() {
        // 更新流星的位置
        this.x += this.xRange * this.speed;
        this.y += this.yRange * this.speed;

        // if(this.xRange > 0 && this.xRange < 1 && this.yRange > 0 && this.yRange < 1){
        //     // 右下角
        
        // }else if(this.xRange > 0 && this.xRange < 1 && this.yRange > -1 && this.yRange < 0){
        //     // 右上角
        
        // }else if(this.xRange > -1 && this.xRange < 0 && this.yRange > 0 && this.yRange < 1){
        //     // 左下角
       
        // }else if(this.xRange > -1 && this.xRange < 0 && this.yRange > -1 && this.yRange < 0){
        //     // 左上角
        
        // }

        // 添加当前位置到轨迹
        this.trail.push(createVector(this.x, this.y));

        // 保持轨迹长度不超过指定的值
        if (this.trail.length > this.tailLength) {
            this.trail.shift();
        }

        // 当流星飞出画布左侧时，重新设置在画布右侧
        // if (this.x < 0) {
        //     this.x = width + random(20, 200);
        //     this.y = random(height);
        //     this.trail = [];
        // }
    }

    display() {
        let colorX = floor(random(img.width));
        let colorY = floor(random(img.height));
        let col = img.get(colorX, colorY); // 获取图片上点的颜色
        // console.log(col);
        // 绘制流星轨迹
        noFill();
        strokeWeight(2);
        // stroke('rgba(23,14,35,0.8)');
        stroke('rgba(255,255,255,0.05)');
        beginShape();
        for (let i = 0; i < this.trail.length; i++) {
            vertex(this.trail[i].x, this.trail[i].y);
        }
        endShape();

        // 绘制流星头部
        
        fill(col);
        noStroke();
        ellipse(this.x, this.y, 4, 4);
    }
}