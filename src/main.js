//-- CONSTANTS --\\
const WIDTH = 600;
const HEIGHT = 800;

//-- INSTANCES --\\
player = new Player(WIDTH / 2 - 50, HEIGHT - 20);

var setup = function()
{
    createCanvas(WIDTH, HEIGHT);
    background(120);
    noStroke();
}

var draw = function()
{
    fill(60, 40, 40);
    player.draw(100, 20);
}
