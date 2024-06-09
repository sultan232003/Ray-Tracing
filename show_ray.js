class Project {
    constructor() {
        this.position = vector.create(canvas_width / 2, canvas_height / 2);
        this.rays = [];
        for (let a = 0; a < 360; a += 1) {
            this.rays.push(new Ray(this.position, utils.degreesToRads(a)));
        }
    }

    update(x, y) {
        this.position.x = x
        this.position.y = y
    }

    look(walls) {
        for (let i = 0; i < this.rays.length; i++) {
            const ray = this.rays[i];
            let closest = null;
            let record = Infinity;
            for (let wall of walls) {
                const point = ray.cast(wall);
                if (point) {
                    const d = utils.distance(this.position, point);
                    if (d < record) {
                        record = d;
                        closest = point;
                    }
                }
            }
            if (closest) {
                drawline4val(this.position.x, this.position.y, closest.x, closest.y )
            }
        }
    }

    show() {
        drawCircle(this.position.x, this.position.y, 4)
        for (let ray of this.rays) {
            ray.show();
        }
    }
}