// class Ray {
//     constructor(pos_x, pos_y, angle) {
//         this.x = pos_x
//         this.y = pos_y
//         this.facingTO = facing(angle, canvas_width, this.x, this.y)
//     }

//     // show() {
//     //     ctx.moveTo(this.x, this.y)
//     //     ctx.lineTo(this.facingTO.x, this.facingTO.y)
//     //     ctx.lineWidth = 0.1
//     //     ctx.stroke()
//     // }

//     cast(wall) {
//         // for(let k = 0; k < ray.length; k++){
//             let intersect
//             let index_val
//             let collect = []
//             let collect_coordinate = []
//             for (let j = 0; j < wall_count; j++) {

//             intersect = segmentIntersect(this.x, this.y, this.facingTO.x, this.facingTO.y, wall[j].a.x, wall[j].a.y, wall[j].b.x, wall[j].b.y);
//             if (intersect) {
//                 collect_coordinate.push(intersect)
//                 let gap = utils.distanceXY(this.x ,this.y , intersect.x , intersect.y)
//                 collect.push(gap)
//                 if(collect_coordinate.length == 1){

//                     // collect.push(intersect)
//                     ctx.beginPath();
//                     // ctx.arc(this.intersect.x, this.intersect.y, 20, 0, Math.PI * 2, false);
//                     ctx.moveTo(this.x, this.y)
//                     ctx.lineTo(intersect.x, intersect.y)
//                     ctx.strokeStyle = "white"
//                     ctx.lineWidth = 0.5
//                     ctx.stroke();
//                 } else if(collect_coordinate.length > 1)
//                 {

//                     print("2")
//                     index_val = collect.indexOf(Math.min(...collect))
//                     ctx.beginPath();
//                     // ctx.arc(this.intersect.x, this.intersect.y, 20, 0, Math.PI * 2, false);
//                     ctx.moveTo(this.x, this.y)
//                     ctx.lineTo(collect_coordinate[index_val].x, collect_coordinate[index_val].y)
//                     ctx.strokeStyle = "white"
//                     ctx.lineWidth = 0.5
//                     ctx.stroke();
//                     ctx.closePath()
//                 }
//                 // ctx.closePath()
//             // } else if(intersect == true && collect_coordinate.length > 1){
//                 // ctx.beginPath();
//                 // ctx.moveTo(this.x, this.y)
//                 // ctx.lineTo(this.facingTO.x, this.facingTO.y)
//                 // ctx.strokeStyle = "red"
//                 // ctx.lineWidth = 0.5
//                 // ctx.stroke()
//                 // ctx.closePath()
//             // }
//         }
//         // index_val = collect.indexOf(Math.min(...collect))
//         // if(intersect){

//             // print(collect)
//             // print(index_val)

//             // print(collect_coordinate[index_val].x)
//             // ctx.beginPath();
//             // // ctx.arc(this.intersect.x, this.intersect.y, 20, 0, Math.PI * 2, false);
//             // ctx.moveTo(this.x, this.y)
//             // ctx.lineTo(collect_coordinate[index_val].x, collect_coordinate[index_val].y)
//             // ctx.strokeStyle = "white"
//             // ctx.lineWidth = 0.5
//             // ctx.stroke();
//             // ctx.closePath()
//         // }
//     }
// }
// }






class Ray {
    constructor(position, angle) {
        this.position = position;
        this.direction = facing(angle , canvas_width , this.position.x , this.position.y);
    }

    show() {
        drawline4val(this.x, this.y, this.direction.x, this.direction.y)
        ctx.strokeStyle = "white"
    }

    cast(wall) {
        const x1 = wall.a.x;
        const y1 = wall.a.y;
        const x2 = wall.b.x;
        const y2 = wall.b.y;

        const x3 = this.position.x;
        const y3 = this.position.y;
        const x4 = this.position.x + this.direction.x;
        const y4 = this.position.y + this.direction.y;

        const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
        if (den == 0) {
            return;
        }

        const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
        const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;
        if (t > 0 && t < 1 && u > 0) {
            const point = vector.create();
            point.x = x1 + t * (x2 - x1);
            point.y = y1 + t * (y2 - y1);
            return point;
        } else {
            return;
        }
    }
}