// mouse trails!! I've used p5.js before in other class, and I took rice's code as reference(and found some examples online)
// https://github.com/gallr091/gallr091.github.io/blob/main/cursor.js


let icon;
let trail = []

function preload(){
    icon= loadImage('assets/icon.png');
}

function setup(){
    canvas = createCanvas(windowWidth, windowHeight-100);
    canvas.position(0, 70);

    cursor('url(assets/icon.png) 0 0, auto');
}

// https://p5js.org/reference/p5/resizeCanvas/
// resize canvas size
function windowResized() {
    resizeCanvas(windowWidth, windowHeight-100);
}

function draw(){
    clear();

    let now = millis();
    // keep the trail brfore 200ms
    trail = trail.filter(ic => now - ic.time < 200);

    for (let ic of trail) {
        image(icon, ic.x, ic.y, 20, 20);
    }
}

// update the mouse position
function mouseMoved() {
    trail.push({ x: mouseX, y: mouseY, time: millis() });
  }