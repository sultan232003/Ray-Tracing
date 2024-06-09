class Boundary {
    constructor(x1, y1, x2, y2) {
        this.a = vector.create(x1, y1);
        this.b = vector.create(x2, y2);
    }

    show() {
        drawline(this.a, this.b)
    }
}