// app.js

function sum(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

// call sum function example 
console.log("The sum of 3 and 5 is:", sum(3, 5));

// call multiply function example 
console.log("The multiplication of 3 and 5 is:", multiply(3, 5));

// call divide function example 
console.log("The division of 10 by 2 is:", divide(10, 2));