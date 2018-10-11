let canvas;
let h;
let sum,amp,i,d;

function setup() {

    frameRate(60);
    canvas = createCanvas(displayWidth, displayHeight);
    canvas.style('z-index', '4');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    cube.style.width = `${windowWidth * 0.9}`;
    cube.style.height = `${windowWidth * 0.9}`;
    sum=0.1;
    i=0.01;
    amp=5;
    d = 0;
}

function draw() {
    background(0, 0);
    clear();

    if (windowWidth > windowHeight) {

        if (onMobile == true) {
            body.querySelector('#turn-phone').style.display = "flex";
        }

    } else {
        body.querySelector('#turn-phone').style.display = "none";
        

    }

    push();
    translate(windowWidth / 2, windowHeight / 2);
    var a = atan2(mouseY - height / 2, mouseX - width / 2);
    pop();

    h=map(degrees(a),-180,180,0,359);
    cube.style.background = `hsl(${h},${100}%,${50}%)`;
    newCursor();
}

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

function windowResized() {
    resizeCanvas(displayWidth, displayHeight);
    //resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
    noStroke();
    fill(255,200);
    d= (sin(sum+=0.1)*amp);
    ellipse(pmouseX, pmouseY, d+40, d+40);
}