var x = 0;
var speed = 20;
function setup(){
    createCanvas(600, 400);
}

function draw(){
    background(0);
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(x, 200, 100 ,100);
    x = x + speed;
    if (x > width){
        speed = -20;
    }
    if (x < 0){
        speed = 20;
    }
}