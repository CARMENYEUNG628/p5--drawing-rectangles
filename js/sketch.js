const WIDTH = 100;
const HEIGHT = 100;

function setup() {
    createCanvas(320, 320);
}

function draw() {
    noStroke();

    fill(20, 20, 255);
    rect(40, 40, WIDTH, HEIGHT, 10);

    fill(255, 20, 20);
    rect(180, 40, WIDTH, HEIGHT, 10, 20);

    fill(20, 127, 20);
    rect(180, 180, WIDTH, HEIGHT, 10, 20, 30);

    fill(20, 20, 20);
    rect(40, 180, WIDTH, HEIGHT, 10, 20, 30, 40);
}
