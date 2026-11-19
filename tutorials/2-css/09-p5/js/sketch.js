let canvas;
let xPos = 0;
let yPos = 0;
let easing = 0.5;

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-2');
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function draw(){
    clear();
    xPos = xPos + ((mouseX-xPos)*easing);
    yPos = yPos + ((mouseY-yPos)*easing);
    drawThing(xPos, yPos);
}

function mouseMoved(){

}

function drawThing(_x, _y){
    fill(255);
    ellipse(_x, _y, 30, 30);
    ellipse(_x-20, _y+5, 30, 30);

    fill(0);
    ellipse(_x+5, _y, 5, 5);
    ellipse(_x-25, _y+5, 5, 5);
}