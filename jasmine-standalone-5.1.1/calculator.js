
class Calculator {
    constructor() { }
    add(x, y) {
        return x + y;
    }

    substract(x, y) {
        return x - y;
    }

    multiply(x, y) {
        return x * y;
    }

    divide(x, y) {
        if (x === 0 || y === 0) {
            throw new Error("parameter cannot be zero");
        }
        return x / y;
    }
}

