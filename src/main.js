//-- CONSTANTS --\\
const WIDTH = 600;
const HEIGHT = 800;

//-- INSTANCES --\\
player = new Player(WIDTH / 2 - 50, HEIGHT - 20);

var setup = function()
{
    createCanvas(WIDTH, HEIGHT);
    noStroke();
}

var draw = function()
{
    background(120);
    fill(60, 40, 40);
    player.draw(100, 20);
    player.update();
}
