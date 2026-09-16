// ===============================================
// utils.js - Small reusable helpers
// ===============================================

// Clamp a value between min and max
export function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

// Map a value from one range to another
export function mapRange(value, inMin, inMax, outMin, outMax) {
    return outMin + (outMax - outMin) * ((value - inMin) / (inMax - inMin));
}

// Format numbers nicely for UI or debugging
export function fmt(x, decimals = 4) {
    return Number.parseFloat(x).toFixed(decimals);
}

// ===============================================
// taylor.js - Build Taylor polynomial T_n(x)
// ===============================================

// Factorial (recursive)
export function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}