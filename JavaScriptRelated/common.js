import { add, substract, multiply, division } from './calculate.js'


const inputDoc = document.getElementById("num")
const showDoc = document.getElementById("show")
const showVersion = document.getElementById("version")

const errorhandler = (errorMessage) => {
    throw new Error(errorMessage);
}

const num = inputDoc ? inputDoc : errorhandler("input element not found");
const display = showDoc ? showDoc : errorhandler("display element not found");
const version = showVersion ? showVersion : errorhandler("version element not found");

window.addEventListener('load', () => {
    version.textContent = "version: 0.3"
})

num.addEventListener('change', (event) => {
    handleUserInput(event.target.value);
})

function handleUserInput(value) {
    const doc = value.split(new RegExp(/\+|\-|\*|\//));
    console.log(doc);

    const x = +doc[0]
    const y = +doc[1]

    const regex = /\+|\-|\*|\//;
    const operator = value.match(regex);

    if (isNaN(x) || isNaN(y) || operator === null) {
        valiDateExpression("invalid expression, operation not recognized.");
    }
    else {
        handleCases(value, x, y)
    }

}

const valiDateExpression = (errorMessage) => {
    display.textContent = errorMessage;
}

function handleCases(value, x, y) {
    if (value.includes('+')) {
        display.textContent = add(x, y);
    }
    else if (value.includes('-')) {
        display.textContent = substract(x, y);
    }
    else if (value.includes('*')) {
        display.textContent = multiply(x, y);
    }
    else if (value.includes('/')) {
        display.textContent = division(x, y);
    }
}







