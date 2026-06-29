function analyzeNumber() {

    let number = Number(document.getElementById("number").value);

    let sign;
    let type;

    // Check Positive / Negative / Zero

    if (number > 0) {

        sign = "Positive";

    }
    else if (number < 0) {

        sign = "Negative";

    }
    else {

        sign = "Zero";

    }

    // Check Even / Odd using Modulus Operator

    if (number % 2 == 0) {

        type = "Even";

    }
    else {

        type = "Odd";

    }

    document.getElementById("result").style.display = "block";

    document.getElementById("result").innerHTML = `

        <h2>Result</h2>

        <p><b>Entered Number :</b> ${number}</p>

        <p><b>Number Type :</b> ${sign}</p>

        <p><b>Even / Odd :</b> ${type}</p>

    `;

}