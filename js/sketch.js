const WIDTH = 100;
const HEIGHT = 100;

function setup() {
    createCanvas(320, 320);
}

function draw() {
    noStroke();

    rect(40, 40, WIDTH, HEIGHT, 10);

    rect(180, 40, WIDTH, HEIGHT, 10, 20);

    rect(180, 180, WIDTH, HEIGHT, 10, 20, 30);

    rect(40, 180, WIDTH, HEIGHT, 10, 20, 30, 40);
}
