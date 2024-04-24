class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}

// Usage
const calculator = new Calculator();
console.log(calculator.add(5, 3));      // Outputs: 8
console.log(calculator.subtract(5, 3)); // Outputs: 2
console.log(calculator.multiply(5, 3)); // Outputs: 15
console.log(calculator.divide(6, 3));   // Outputs: 2

// FILEPATH: /workspaces/skills-copilot-codespaces-vscode/test.js
const { divide } = require('./calculator'); // assuming your function is exported from a file named calculator.js

describe('divide', () => {
    test('divides positive numbers correctly', () => {
        expect(divide(10, 2)).toBe(5);
    });

    test('divides negative numbers correctly', () => {
        expect(divide(-10, -2)).toBe(5);
    });

    test('divides when dividend is zero', () => {
        expect(divide(0, 5)).toBe(0);
    });

    test('throws error when divisor is zero', () => {
        expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
    });
});