// Addition Function
function add(a, b) {

    return a + b;

}

// Subtraction Function
function subtract(a, b) {

    return a - b;

}

// Multiplication Function
function multiply(a, b) {

    return a * b;

}

// Division Function
function divide(a, b) {

    if (b == 0) {

        return "Cannot divide by zero";

    }

    return a / b;

}

// Main Function
function calculate() {

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let operation = document.getElementById("operation").value;

    let answer;

    switch(operation){

        case "+":
            answer = add(num1,num2);
            break;

        case "-":
            answer = subtract(num1,num2);
            break;

        case "*":
            answer = multiply(num1,num2);
            break;

        case "/":
            answer = divide(num1,num2);
            break;

        default:
            answer = "Invalid Operation";

    }

    document.getElementById("result").style.display="block";

    document.getElementById("result").innerHTML=

    `
    <h2>Result</h2>

    <p><b>First Number :</b> ${num1}</p>

    <p><b>Second Number :</b> ${num2}</p>

    <p><b>Operation :</b> ${operation}</p>

    <p><b>Answer :</b> ${answer}</p>

    `;

}