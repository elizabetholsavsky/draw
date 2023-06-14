const canvas = document.querySelector("canvas"),
toolBtns = document.querySelectorAll(".tool"),
ctx = canvas.getContext("2d");

let isDrawing = false,
brushWidth = 5;

window.addEventListener("load", () => {
    // return viewable w and h off el
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
})

const startDraw = () => {
    isDrawing = true;
    ctx.beginPath(); // begin new path when picking up brush 
    ctx.lineWidth = brushWidth;
}
const drawing = (e) => {
    if(!isDrawing) return;
    ctx.lineTo(e.offsetX, e.offsetY);  // create line with pointer
    ctx.stroke();  // fill line with color
}

toolBtns.forEach(btn =>{
    btn.addEventListener("click", () => {
        document.querySelector(".options .active").classList.remove("active");
        btn.classList.add("active");
        console.log(btn.id);
    })
})
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => isDrawing = false);