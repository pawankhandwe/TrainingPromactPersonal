function showAlert() {
    alert("Button Clicked!");
}

function calculateSum() {
    const firstInputValue = parseFloat(document.getElementById('firstInput').value);
    const secondInputValue = parseFloat(document.getElementById('secondInput').value);

    if (!isNaN(firstInputValue) && !isNaN(secondInputValue)) {
        const sum = firstInputValue + secondInputValue;
        alert(`The sum of ${firstInputValue} and ${secondInputValue} is ${sum}.`);
    } else {
        alert("Invalid input. Please enter valid numbers.");
    }
}
