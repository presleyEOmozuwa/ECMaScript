class Schema {
    constructor() {
        this.version = "0.1"
    }
    handleUserInput(value) {
        var doc = value.split(new RegExp(/\+|\-|\*|\//));

        const x = +doc[0]
        const y = +doc[1]

        const regex = /\+|\-|\*|\//;
        const operator = value.match(regex);

        if (isNaN(x) || isNaN(y) || operator[0] === null) {
            this.valiDateExpression("invalid expression, operation not recognized.");
        }
        else {
            this.handleCases(value, x, y)
        }
    }

    valiDateExpression(errorMessage) {
        display.textContent = errorMessage;
    }

    add(x, y) {
        return x + y;
    }

    substract(x, y) {
        return x - y;
    }

    multiply(x, y) {
        return x * y;
    }

    division(x, y) {
        return x / y;
    }

    handleCases(value, x, y) {
        if (value.includes('+')) {
            display.textContent = this.add(x, y);
        }
        else if (value.includes('-')) {
            display.textContent = this.substract(x, y);
        }
        else if (value.includes('*')) {
            display.textContent = this.multiply(x, y);
        }
        else if (value.includes('/')) {
            display.textContent = this.division(x, y);
        }
    }

}

class AsyncSchema {
    constructor() { }
    async handleAsyncCalls(url) {
        try {
            const response = await fetch(url)
            return response;
        }
        catch (err) {
            console.log(err.message)
        }
    }

}


const sch = new Schema()
const { add, substract, multiply, division, fetchData } = sch;

const asySch = new AsyncSchema();
const { handleAsyncCalls } = asySch;

const errorhandler = () => {
    throw new Error("element not found");
}

const inputDoc = document.getElementById("num")
const showDoc = document.getElementById("show")

const num = inputDoc ? inputDoc : errorhandler();
const display = showDoc ? showDoc : errorhandler();

num.addEventListener('change', (event) => {
    const { handleUserInput } = sch;
    handleUserInput(event.target.value);

})

window.addEventListener('load', async () => {
    const data = await handleAsyncCalls("https://jsonplaceholder.typicode.com/users");
    console.log(data);
})

















