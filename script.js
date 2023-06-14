const canvas = document.querySelector("canvas"),
toolBtns = document.querySelectorAll(".tool"),
fillColor = document.querySelector("#fill-color"),
ctx = canvas.getContext("2d");

let prevMouseX, prevMouseY, snapshot,
isDrawing = false,
selectedTool = "brush",
brushWidth = 5;

window.addEventListener("load", () => {
    // return viewable w and h off el
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
});

const drawRect = (e) => {
    if (!fillColor.checked) {
        return ctx.strokeRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);
    }
    ctx.fillRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);
};

const drawCircle = (e) => {
    ctx.beginPath();
    // get radius fo circle using pointer (sqrt = square root, pow method returns value of 'x' to power of 'y')
    let radius = Math.sqrt(Math.pow((prevMouseX - e.offsetX), 2) + Math.pow((prevMouseY - e.offsetY), 2))
    ctx.arc(prevMouseX, prevMouseY, radius, 50, 0, 2 * Math.PI);
    ctx.stroke();
};


const startDraw = (e) => {
    isDrawing = true;
    prevMouseX = e.offsetX;
    prevMouseY = e.offsetY;
    ctx.beginPath(); // begin new path when picking up brush 
    ctx.lineWidth = brushWidth;
    ctx.canvas.mozOpaque = true; // Add this line for Firefox compatibility
    ctx.willReadFrequently = true; // Set willReadFrequently attribute to improve performance
    snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
};

const drawing = (e) => {
    if(!isDrawing) return;
    ctx.putImageData(snapshot, 0, 0);

    if(selectedTool === "brush") {
        ctx.lineTo(e.offsetX, e.offsetY);  // create line with pointer
        ctx.stroke();  // fill line with color
    } else if (selectedTool === "rectangle") {
        drawRect(e);
    } else if (selectedTool === "circle") {
        drawCircle(e);
    }
    
};

toolBtns.forEach(btn =>{
    btn.addEventListener("click", () => {
        document.querySelector(".options .active").classList.remove("active");
        btn.classList.add("active");
        selectedTool = btn.id;
        console.log(btn.id);
    })
});

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => isDrawing = false);