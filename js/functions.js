// ===============================================
// functions.js - Preset functions with their derivatives
// ===============================================

// ===============================================
// Function library
// ===============================================
const functionLibrary = {

    // -------------------------------------------
    // sin(x)
    // -------------------------------------------
    sin: {
        name: "sin",
        f: x => Math.sin(x),
        derivatives: [
            x => Math.sin(x),
            x => Math.cos(x),
            x => -Math.sin(x),
            x => -Math.cos(x),
            x => Math.sin(x)   // repeats every 4
        ],
        domain: [-10, 10]
    },

    // -------------------------------------------
    // cos(x)
    // -------------------------------------------
    cos: {
        name: "cos",
        f: x => Math.cos(x),
        derivatives: [
            x => Math.cos(x),
            x => -Math.sin(x),
            x => -Math.cos(x),
            x => Math.sin(x),
            x => Math.cos(x)   // repeats every 4
        ],
        domain: [-10, 10]
    },

    // -------------------------------------------
    // e^x
    // -------------------------------------------
    exp: {
        name: "exp",
        f: x => Math.exp(x),
        derivatives: [
            x => Math.exp(x),
            x => Math.exp(x),
            x => Math.exp(x),
            x => Math.exp(x),
            x => Math.exp(x)
        ],
        domain: [-5, 5]
    },

    // -------------------------------------------
    // ln(1 + x)
    // -------------------------------------------
    ln1x: {
        name: "ln1x",
        f: x => Math.log(1 + x),
        derivatives: [
            x => Math.log(1 + x),
            x => 1 / (1 + x),
            x => -1 / Math.pow(1 + x, 2),
            x => 2 / Math.pow(1 + x, 3),
            x => -6 / Math.pow(1 + x, 4)
        ],
        domain: [-0.9, 5]   // avoid x = -1
    },

    // -------------------------------------------
    // 1 / (1 + x)
    // -------------------------------------------
    inv1x: {
        name: "inv1x",
        f: x => 1 / (1 + x),
        derivatives: [
            x => 1 / (1 + x),
            x => -1 / Math.pow(1 + x, 2),
            x => 2 / Math.pow(1 + x, 3),
            x => -6 / Math.pow(1 + x, 4),
            x => 24 / Math.pow(1 + x, 5)
        ],
        domain: [-0.9, 5]   // avoid x = -1
    },

    logistic: {
        name: "logistic",
        f: x => 1 / (1 + Math.exp(-x)),
        derivatives: [
            x => 1 / (1 + Math.exp(-x)),                        // f(x)
            x => Math.exp(-x) / Math.pow(1 + Math.exp(-x), 2),  // f'(x)
            x => Math.exp(-x) * (1 - Math.exp(-x)) / Math.pow(1 + Math.exp(-x), 3), // f''(x)
            x => Math.exp(-x) * (1 - 4 * Math.exp(-x) + Math.exp(-2 * x)) / Math.pow(1 + Math.exp(-x), 4), // f'''(x)
            x => Math.exp(-x) * (1 - 11 * Math.exp(-x) + 11 * Math.exp(-2 * x) - Math.exp(-3 * x)) / Math.pow(1 + Math.exp(-x), 5) // f''''(x)
        ]
    }
};

// ===============================================
// Lookup function
// ===============================================
export function getFunctionByName(name) {
    return functionLibrary[name];
}
