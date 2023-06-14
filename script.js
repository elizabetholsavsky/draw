const canvas = document.querySelector("canvas"),
toolBtns = document.querySelectorAll(".tool"),
ctx = canvas.getContext("2d");

let prevMouseX, prevMouseY,
isDrawing = false,
selectedTool = "brush",
brushWidth = 5;

window.addEventListener("load", () => {
    // return viewable w and h off el
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
})

const drawRect = (e) => {
    ctx.fillRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);
}


const startDraw = (e) => {
    isDrawing = true;
    ctx.beginPath(); // begin new path when picking up brush 
    prevMouseX = e.offsetX;
    prevMouseY = e.offsetY;
    ctx.lineWidth = brushWidth;
}

const drawing = (e) => {
    if(!isDrawing) return;

    if(selectedTool === "brush") {
        ctx.lineTo(e.offsetX, e.offsetY);  // create line with pointer
        ctx.stroke();  // fill line with color
    } else if (selectedTool === "rectangle") {
        drawRect(e);
    }
    
}

toolBtns.forEach(btn =>{
    btn.addEventListener("click", () => {
        document.querySelector(".options .active").classList.remove("active");
        btn.classList.add("active");
        selectedTool = btn.id;
        console.log(btn.id);
    })
})
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => isDrawing = false);