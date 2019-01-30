class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.width;
        this.height;
    }

    draw(width, height) {
        rect(this.x, this.y, width, height);

        this.width = width;
        this.height = height;
    }
}
