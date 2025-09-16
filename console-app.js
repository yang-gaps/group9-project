const prompt = require('prompt-sync')({ sigint: true });

console.log("-----------------------------------------");
console.log("         CALCULATOR CONSOLE APP");
console.log("-----------------------------------------");

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b === 0){
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

function avg(a, b){
    return (a + b) / 2; 
}

let again = "yes";

while(again.toLowerCase() === "yes"){
    let num1 = parseFloat(prompt("Enter first number: "));
    let num2 = parseFloat(prompt("Enter second number: "));

    if(isNaN(num1) || isNaN(num2)){
        console.log("Invalid input. Please enter numbers only.");
    } else {
        console.log("-----------------------------------------");
        console.log("RESULTS");
        console.log(`Addition: ${add(num1, num2)}`);
        console.log(`Subtraction: ${subtract(num1, num2)}`);
        console.log(`Multiplication: ${multiply(num1, num2)}`);
        
        try {
            console.log(`Division: ${divide(num1, num2)}`);
        } catch (error) {
            console.log(`Division: ${error.message}`);
        }
        console.log(`Average: ${avg(num1, num2)}`);
    }
    console.log("-----------------------------------------");
    while (true) {
        again = prompt("Do you want to try again? (yes/no): ").toLowerCase();
        if (again === "yes" || again === "no") {
            break; 
        }
        console.log("Invalid input. Please type 'yes' or 'no'.");
    }
    console.log("-----------------------------------------");
}

console.log("Console app ended.");