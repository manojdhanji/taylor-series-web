// ===============================================
// main.js - App initialization + orchestration
// ===============================================

import {
    initCanvas,
    drawAxes,
    plotFunction,
    setBounds
} from "./plot.js";

import { getFunctionByName } from "./functions.js";
import { buildTaylorPolynomial } from "./taylor.js";

import {
    onFunctionChange,
    onOrderChange,
    onReset,
    getSelectedFunctionName,
    getTaylorOrder
} from "./ui.js";

// Canvas reference
let canvas;

// Current function & Taylor polynomial
let currentFunction = null;
let currentTaylor = null;

// ===============================================
// Initialize everything
// ===============================================
window.addEventListener("DOMContentLoaded", () => {
    canvas = document.getElementById("plotCanvas");

    initCanvas(canvas);
    drawAxes();

    // UI wiring
    onFunctionChange(updateFunction);
    onOrderChange(updateTaylorOrder);
    onReset(resetView);

    updateFunction(); // initial load
});

// ===============================================
// Load selected function
// ===============================================
function updateFunction() {
    const name = getSelectedFunctionName();
    currentFunction = getFunctionByName(name);

    updateTaylorOrder();

}

// ===============================================
// Update Taylor order
// ===============================================
function updateTaylorOrder() {
    const n = getTaylorOrder();

    if (currentFunction) {
        currentTaylor = buildTaylorPolynomial(
            currentFunction.f,
            currentFunction.derivatives,
            n,
            0
        );
    }

    redraw();
}

// ===============================================
// Redraw everything
// ===============================================
function redraw() {
    drawAxes();

    if (currentFunction) {
        plotFunction(currentFunction.f, "#00ff00", 0.01);
    }

    if (currentTaylor) {
        plotFunction(currentTaylor, "#ff8800", 0.01);
    }
}

// ===============================================
// Reset view
// ===============================================
function resetView() {
    //setBounds(-10, 10, -10, 10);
    //redraw();
    // Reset bounds
    setBounds(-10, 10, -10, 10);

    // Reset slider
    orderSlider.value = 0;
    orderValue.textContent = "0";

    // Reset function dropdown
    functionSelect.selectedIndex = 0;

    // Recompute the Taylor polynomial
    updateFunction();
}
