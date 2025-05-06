// mouse trails!! I've used p5.js before in other class, and I took rice's code as reference(and found some examples online)
// https://github.com/gallr091/gallr091.github.io/blob/main/cursor.js


let icon;
let trail = []

function preload(){
    icon= loadImage('assets/icon.png');
}

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
}

function draw(){
    clear();

    let now = millis();
    trail = trail.filter(ic => now - ic.time < 600);

    for (let ic of trail) {
        let alpha = map(now - ic.time, 0, 600, 255, 0);
        tint(255, alpha); 
        image(icon, ic.x, ic.y, 20, 20);
    }
    noTint();
}

function mouseMoved() {
    trail.push({ x: mouseX, y: mouseY, time: millis() });
    cursor('url(assets/icon.png) 0 0, auto');
  }