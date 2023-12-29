var colors = []
let lowerLayer
let upperLayer
function setup() {
    createCanvas(1920, 900);

    // 创建下层图形上下文
    lowerLayer = createGraphics(1920, 900);
    
    // 创建上层图形上下文
    upperLayer = createGraphics(800, 800);

    background("#0F051C");
    noLoop(); // 不循环绘制
    frameRate(5)
    colors[0] = color(95, 13, 199) 
    colors[1] = color(152, 27, 202) 
    colors[2] = color(202, 42, 144) 
    colors[3] = color(243, 73, 95) 

}
let scaleLevel = 2.2
let animationLevel = 2.2
function draw() {
    // 重新给背景色
    background("#0F051C");

    animationLevel += 0.2
    
    if(animationLevel > 5){
        animationLevel = 2.2;
    }

    // 创建四个颜色之间的渐变
    let interColor1 = lerpColor(colors[0], colors[1], 0.5);
    let interColor2 = lerpColor(colors[1], colors[2], 0.5);
    let interColor3 = lerpColor(colors[2], colors[3], 0.5);
    
    // 使用四个颜色之间的渐变创建一个新的渐变
    let finalInterColor = lerpColor(interColor1, interColor2, 0.5);
    finalInterColor = lerpColor(finalInterColor, interColor3, 0.5);
    console.log(finalInterColor);
    // 随机填充100个圆点在圆环上
    for (let i = 0; i < 10000; i++) {
        let angle = random(TWO_PI); // 随机角度
    //   let radius = 150; // 圆环的半径
        let radius = random(125,175) * scaleLevel; // 圆环的半径
        // console.log(upperLayer);
        let x = upperLayer.width / 2 + cos(angle) * radius;
        let y = upperLayer.height / 2 + sin(angle) * radius;
        let diameter = random(3, 4);
        // 判断圆点在圆环的哪一层给不同的大小
        let fillColor = color(95,13,199);
        if((x - upperLayer.width / 2) / cos(angle) > 125 * scaleLevel && (x - upperLayer.width / 2) / cos(angle) < 135 * scaleLevel){
            diameter = random(0,1)
        }else if((x - upperLayer.width / 2) / cos(angle) > 135 * scaleLevel && (x - upperLayer.width / 2) / cos(angle) < 145 * scaleLevel){
            diameter = random(1,2)
        }else if((x - upperLayer.width / 2) / cos(angle) > 145 * scaleLevel && (x - upperLayer.width / 2) / cos(angle) < 155 * scaleLevel){
            diameter = random(1.5,3.5)
        }else if((x - upperLayer.width / 2) / cos(angle) > 155 * scaleLevel && (x - upperLayer.width / 2) / cos(angle) < 165 * scaleLevel){
            diameter = random(1,2)
        }else if((x - upperLayer.width / 2) / cos(angle) > 165 * scaleLevel && (x - upperLayer.width / 2) / cos(angle) < 175 * scaleLevel){
            diameter = random(0,1)
        }
        // 判断圆点在圆环的位置给不同的颜色
        if((x - upperLayer.width / 2) / radius > 0 && (x - upperLayer.width / 2) / radius < 1 && (y - upperLayer.height / 2) / radius > 0 && (y - upperLayer.height / 2) / radius < 1){
            // 右下
            fillColor = color(155, 30, 208);
            
        }else if((x - upperLayer.width / 2) / radius > 0 && (x - upperLayer.width / 2) / radius < 1 && (y - upperLayer.height / 2) / radius > -1 && (y - upperLayer.height / 2) / radius < 0){
            // 右上
            fillColor = color(220, 58, 139);
            
        }else if((x - upperLayer.width / 2) / radius > -1 && (x - upperLayer.width / 2) / radius < 0 && (y - upperLayer.height / 2) / radius > 0 && (y - upperLayer.height / 2) / radius < 1){
            // 左下
            fillColor = color(120, 22, 206);

        }else if((x - upperLayer.width / 2) / radius > -1 && (x - upperLayer.width / 2) / radius < 0 && (y - upperLayer.height / 2) / radius > -1 && (y - upperLayer.height / 2) / radius < 0){
            // 左上
            fillColor = color(176, 66, 211);
            
        }

        upperLayer.fill(fillColor);
        upperLayer.noStroke();
        upperLayer.ellipse(x, y, diameter, diameter);

    }

    // TODO 新增多个向外扩散的点 静止时 自动向外扩散
    for(let i=0;i<4000;i++){
        let angle = random(TWO_PI); // 随机角度
        let radius = random(50,500) * animationLevel; // 圆环的半径
        let x = lowerLayer.width / 2 + cos(angle) * radius;
        let y = lowerLayer.height / 2 + sin(angle) * radius;
        let diameter = random(3, 4);
        
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
        if((x - lowerLayer.width / 2) / radius > 0 && (x - lowerLayer.width / 2) / radius < 1 && (y - lowerLayer.height / 2) / radius > 0 && (y - lowerLayer.height / 2) / radius < 1){
            // 右下
            fillColor = color(155, 30, 208);
            fillColor = color(255, 255, 255);
            
        }else if((x - lowerLayer.width / 2) / radius > 0 && (x - lowerLayer.width / 2) / radius < 1 && (y - lowerLayer.height / 2) / radius > -1 && (y - lowerLayer.height / 2) / radius < 0){
            // 右上
            fillColor = color(220, 58, 139);
            fillColor = color(255, 255, 255);
            
        }else if((x - lowerLayer.width / 2) / radius > -1 && (x - lowerLayer.width / 2) / radius < 0 && (y - lowerLayer.height / 2) / radius > 0 && (y - lowerLayer.height / 2) / radius < 1){
            // 左下
            fillColor = color(120, 22, 206);
            fillColor = color(255, 255, 255);

        }else if((x - lowerLayer.width / 2) / radius > -1 && (x - lowerLayer.width / 2) / radius < 0 && (y - lowerLayer.height / 2) / radius > -1 && (y - lowerLayer.height / 2) / radius < 0){
            // 左上
            fillColor = color(176, 66, 211);
            fillColor = color(255, 255, 255);
            
        }

        lowerLayer.fill(fillColor);
        lowerLayer.noStroke();
        lowerLayer.ellipse(x, y, diameter, diameter);
    }
    
    // 在主画布上显示下层图形上下文
    image(lowerLayer, 0, 0);
    
    // 在主画布上显示上层图形上下文，实现上层覆盖下层效果
    image(upperLayer, 0, 0);
}

function mouseWheel(event) {
    print(event.delta);
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
