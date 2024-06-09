const print = (value) => {
    console.log(value)
}
const clear = () => {
    console.clear()
}
const sin = (value) => {
    return Math.sin(value)
}
const asin = (value) => {
    return Math.asin(value)
}
const sinh = (value) => {
    return Math.sinh(value)
}
const asinh = (value) => {
    return Math.asinh(value)
}
const cos = (value) => {
    return Math.cos(value)
}
const cosh = (value) => {
    return Math.cosh(value)
}
const acos = (value) => {
    return Math.acos(value)
}
const acosh = (value) => {
    return Math.acosh(value)
}
const tan = (value) => {
    return Math.tan(value)
}
const tanh = (value) => {
    return Math.tanh(value)
}
const atan = (value) => {
    return Math.atan(value)
}
const atan2 = (value) => {
    return Math.atan2(value)
}
const atanh = (value) => {
    return Math.atanh(value)
}
const ceil = (value) => {
    return Math.ceil(value)
}
const floor = (value) => {
    return Math.floor(value)
}
const sqrt = (value) => {
    return Math.sqrt(value)
}
const abs = (value) => {
    return Math.abs(value)
}
const pi = Math.PI

const random = (value) => {
    return Math.random()*value
}

const Angle = (angle) => {
    return ((2 * pi) / 360) * angle

}

let mouseX
let mouseY
document.addEventListener("mousemove",(e)=>{
    mouseX  = e.clientX
    mouseY  = e.clientY
})

const createCanvas = (width , height) =>{
    const canvas = document.createElement("canvas")
    document.body.appendChild(canvas)
    canvas.width = width
    canvas.height = height
    return canvas.getContext("2d")
}