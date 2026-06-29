function manipulateString() {

    // Get Input
    let text = document.getElementById("text").value;

    // Convert to Uppercase
    let upper = text.toUpperCase();

    // Find Length
    let length = text.length;

    // Reverse using for loop
    let reverse = "";

    for(let i = text.length - 1; i >= 0; i--){

        reverse = reverse + text[i];

    }

    // Display Result
    document.getElementById("result").style.display = "block";

    document.getElementById("result").innerHTML =

    `
        <h2>Result</h2>

        <p><b>Original String :</b> ${text}</p>

        <p><b>Uppercase :</b> ${upper}</p>

        <p><b>Length :</b> ${length}</p>

        <p><b>Reverse :</b> ${reverse}</p>
    `;

}