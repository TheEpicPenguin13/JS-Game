class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.speed = 5;

        this.width;
        this.height;
    }

    draw(width, height) {
        rect(this.x, this.y, width, height);

        this.width = width;
        this.height = height;
    }

    update() {
        // Check key input
        if (keyCode === RIGHT_ARROW) {
            this.speed = 5;
            this.x += this.speed;
        } else if (keyCode === LEFT_ARROW) {
            this.speed = 5;
            this.x -= this.speed;
        }
    }
}
