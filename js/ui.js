// ===============================================
// ui.js - UI helpers and event wiring
// ===============================================

// Cache DOM elements
const functionSelect = document.getElementById("functionSelect");
const orderSlider = document.getElementById("orderSlider");
const orderValue = document.getElementById("orderValue");
const resetBtn = document.getElementById("resetBtn");

// ===============================================
// Event registration
// ===============================================
export function onFunctionChange(callback) {
    functionSelect.addEventListener("change", callback);
}

export function onReset(callback) {
    resetBtn.addEventListener("click", callback);
}

export function onOrderChange(callback) {
    orderSlider.addEventListener("input", () => {
        orderValue.textContent = orderSlider.value;
        callback();
    });
}
// ===============================================
// UI getters
// ===============================================
export function getSelectedFunctionName() {
    return functionSelect.value;
}

export function getTaylorOrder() {
    return Number.parseInt(orderSlider.value);
}
