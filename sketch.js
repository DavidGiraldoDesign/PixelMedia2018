let canvas;
let r, g, b, amp, inc, valG, valR, valB, radius, h, s, valH, valS;
let hipotenusa, catetoOpuesto, x, y;

function setup() {

    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '4');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    valR = 0;
    valG = 0;
    valB = 0;
    r = 0;
    g = 0;
    h = 359;
    s = 100;
    b = 50;
    amp = 155;
    inc = 0.01;

    cube.style.width = `${windowWidth * 0.9}`;
    cube.style.height = `${windowWidth * 0.9}`;
    cube.style.display = "inline";
    //359,100,100
    //colorMode(HSB, 100);

}

function draw() {
    background(0, 0);
    clear();

    /*valR = 100+(sin(r += inc)) * amp;
    valB = 100+(sin(b += inc)) * amp;
    valG = 100+(sin(g += 0.08)) * amp;
    valR = dist(displayWidth / 2, displayHeight / 2, mouseX, mouseY);
    r = map(valR, 0, windowWidth * 0.9, 0, 255);

    valB = dist(displayWidth / 2, displayHeight / 2, mouseX, mouseY);
    b = map(valR, 0, windowWidth * 0.9, 255,0);*/

    if (windowWidth > windowHeight) {

        if (onMobile == true) {
            body.querySelector('#turn-phone').style.display = "flex";
            cube.style.display = "none";
        }

    } else {
        if (onMobile == true) {
            body.querySelector('#turn-phone').style.display = "none";
        }
        cube.style.display = "inline";

    }
    hipotenusa = dist(displayWidth / 2, displayHeight / 2, mouseX, mouseY);
    h = degrees(sin(y / hipotenusa));
    cube.style.background = `hsl(${h},${100}%,${50}%)`;
    
    x = (mouseX - windowWidth / 2)*1;
    y = (mouseY - windowHeight / 2)*-1;
    /*text("H: " + hipotenusa, mouseX + 50, mouseY + 30);
    text("X: " + x, mouseX + 50, mouseY + 50);
    text("Y: " + y, mouseX + 50, mouseY + 70);
    stroke(255);
    line(displayWidth / 2, displayHeight / 2, mouseX, mouseY);
    text(sin(y / hipotenusa), mouseX + 50, mouseY + 90);*/
    
    


    
    newCursor();

}

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

function windowResized() {
    resizeCanvas(displayWidth, displayHeight);

}

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10);
}