// ===============================================
// plot.js - Responsive, aspect‑ratio‑preserving canvas engine
// ===============================================

// Canvas & context
let canvas, ctx;

// Pixel dimensions
let width = 0;
let height = 0;

// World bounds (math space)
let xmin = -10;
let xmax = 10;
let ymin = -10;
let ymax = 10;

// Grid spacing (math units)
const gridSpacing = 1;

// Transform variables (computed on resize)
let scale = 1;
let offsetX = 0;
let offsetY = 0;

// ===============================================
// Initialization
// ===============================================
export function initCanvas(canvasElement) {
    canvas = canvasElement;
    ctx = canvas.getContext("2d");

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
}

// ===============================================
// Resize canvas + recompute transforms
// ===============================================
function resizeCanvas() {
    width = canvas.clientWidth;
    height = canvas.clientHeight;

    canvas.width = width;
    canvas.height = height;

    // Compute aspect ratio
    const aspect = width / height;

    // Choose a base vertical range (math units)
    const baseY = 10;

    // Horizontal range matches aspect ratio
    const baseX = baseY * aspect;

    // Update world bounds
    xmin = -baseX;
    xmax = baseX;
    ymin = -baseY;
    ymax = baseY;

    // Compute uniform scale (square grid cells)
    scale = Math.min(
        width / (xmax - xmin),
        height / (ymax - ymin)
    );

    // Center the math region inside the canvas
    offsetX = (width - (xmax - xmin) * scale) / 2;
    offsetY = (height - (ymax - ymin) * scale) / 2;

    drawAxes();
}

// ===============================================
// Coordinate transforms
// ===============================================
function toCanvasX(x) {
    return offsetX + (x - xmin) * scale;
}

function toCanvasY(y) {
    return height - offsetY - (y - ymin) * scale;
}

// ===============================================
// Clear canvas
// ===============================================
export function clearCanvas() {
    ctx.clearRect(0, 0, width, height);
}

// ===============================================
// Draw grid + axes
// ===============================================
export function drawAxes() {
    clearCanvas();

    ctx.lineWidth = 1;
    ctx.strokeStyle = "#333";

    // ----- Vertical grid lines -----
    for (let x = xmin; x <= xmax; x += gridSpacing) {
        const px = toCanvasX(x);
        if (px >= 0 && px <= width) {
            ctx.beginPath();
            ctx.moveTo(px, 0);
            ctx.lineTo(px, height);
            ctx.stroke();
        }
    }

    // ----- Horizontal grid lines -----
    for (let y = ymin; y <= ymax; y += gridSpacing) {
        const py = toCanvasY(y);
        if (py >= 0 && py <= height) {
            ctx.beginPath();
            ctx.moveTo(0, py);
            ctx.lineTo(width, py);
            ctx.stroke();
        }
    }

    // ----- Axes -----
    ctx.strokeStyle = "#888";
    ctx.lineWidth = 2;

    // x-axis
    const y0 = toCanvasY(0);
    ctx.beginPath();
    ctx.moveTo(0, y0);
    ctx.lineTo(width, y0);
    ctx.stroke();

    // y-axis
    const x0 = toCanvasX(0);
    ctx.beginPath();
    ctx.moveTo(x0, 0);
    ctx.lineTo(x0, height);
    ctx.stroke();
}

// ===============================================
// Plot a function f(x)
// ===============================================
export function plotFunction(f, color = "#00ff00", step = 0.01) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;

    ctx.beginPath();
    let firstPoint = true;

    for (let x = xmin; x <= xmax; x += step) {
        const y = f(x);
        if (!Number.isFinite(y)) continue;

        const px = toCanvasX(x);
        const py = toCanvasY(y);

        if (firstPoint) {
            ctx.moveTo(px, py);
            firstPoint = false;
        } else {
            ctx.lineTo(px, py);
        }
    }

    ctx.stroke();
}

// ===============================================
// Reset bounds (optional external call)
// ===============================================
export function setBounds(xminNew, xmaxNew, yminNew, ymaxNew) {
    xmin = xminNew;
    xmax = xmaxNew;
    ymin = yminNew;
    ymax = ymaxNew;

    // Recompute scale + offsets with new bounds
    scale = Math.min(
        width / (xmax - xmin),
        height / (ymax - ymin)
    );

    offsetX = (width - (xmax - xmin) * scale) / 2;
    offsetY = (height - (ymax - ymin) * scale) / 2;

    drawAxes();
}
