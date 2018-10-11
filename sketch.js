let canvas;
let r, g, b, amp, inc, valG, valR, valB;

function setup() {

    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    valR = 0;
    valG = 0;
    valB = 0;
    r = 0;
    g = 0;
    b = 0;
    amp = 255;
    inc = 0.01;
    deviceOrientation = 'portrait';
}

function draw() {
    fullscreen();

    background(0);


    valR = (sin(r += inc)) * amp;
    valB = (sin(b += inc)) * amp;
    valG = (sin(g += 0.08)) * amp;

    fill(255, valG, valB);

    noStroke();
    if (windowWidth > windowHeight) {

        if(onMobile == true){
            body.querySelector('#turn-phone').style.display = "inline";
        }

    } else {
        if(onMobile == true){
            body.querySelector('#turn-phone').style.display = "none";
        }
        ellipse(windowWidth / 2, windowHeight / 2, windowWidth * 0.9, windowWidth * 0.9);
    }

    newCursor();
    

}

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

function windowResized() {
    resizeCanvas(displayWidth, displayHeight);
 
}

function deviceTurned() {
    resizeCanvas(displayWidth, displayHeight);
  
}

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10);
}


function mousePressed() {

}

function mouseReleased() {

}