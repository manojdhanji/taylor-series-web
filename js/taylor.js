import { factorial } from './utils.js';
// ===============================================
// Build Taylor polynomial T_n(x)
// f: base function
// derivatives: array of derivative functions
// n: order
// x0: expansion point (Maclaurin = 0)
// ===============================================
export function buildTaylorPolynomial(f, derivatives, n, x0 = 0) {

    return function(x) {
        let sum = 0;

        for (let k = 0; k <= n; k++) {
            const dk = derivatives[k](x0);   // k-th derivative evaluated at x0
            const term = dk * Math.pow(x - x0, k) / factorial(k);
            sum += term;
        }

        return sum;
    };
}
