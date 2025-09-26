// calculator.js

const readline = require("readline");

// Setup input interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Functions
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return b === 0 ? "Error: Cannot divide by zero!" : a / b; }
function average(a, b) { return (a + b) / 2; }

// Menu
function showMenu() {
  console.log("\n=== Calculator Menu ===");
  console.log("1. Add");
  console.log("2. Subtract");
  console.log("3. Multiply");
  console.log("4. Divide");
  console.log("5. Average");
  console.log("6. Exit");
}

// Main calculator loop
function startCalculator() {
  showMenu();
  rl.question("Choose an option (1-6): ", (choice) => {
    if (choice === "6") {
      console.log("Goodbye!");
      rl.close();
      return;
    }

    rl.question("Enter first number: ", (num1) => {
      rl.question("Enter second number: ", (num2) => {
        let a = parseFloat(num1);
        let b = parseFloat(num2);

        if (isNaN(a) || isNaN(b)) {
          console.log("❌ Error: Please enter valid numbers.");
          return startCalculator();
        }

        switch (choice) {
          case "1": console.log(`Result: ${add(a, b)}`); break;
          case "2": console.log(`Result: ${subtract(a, b)}`); break;
          case "3": console.log(`Result: ${multiply(a, b)}`); break;
          case "4": console.log(`Result: ${divide(a, b)}`); break;
          case "5": console.log(`Result: ${average(a, b)}`); break;
          default: console.log("❌ Invalid option. Try again.");
        }

        // Loop back to menu
        startCalculator();
      });
    });
  });
}

// Start program
startCalculator();
