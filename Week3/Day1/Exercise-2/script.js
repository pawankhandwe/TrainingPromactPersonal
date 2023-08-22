// Task 1: Greeting Script
function showGreeting() {
    console.log("dfgd");
    const userName = prompt("What's your name?");
    if (userName) {
        alert(`Hello, ${userName} Welcome`);
    }
}

function calculateSum() {
    const firstNumber = prompt("Enter the first number:");
    const secondNumber = prompt("Enter the second number:");

    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        const sum = parseFloat(firstNumber) + parseFloat(secondNumber);
        alert(`The sum of ${firstNumber} and ${secondNumber} is ${sum}.`);
    } else {
        alert("Invalid input. Please enter valid numbers.");
    }
}
