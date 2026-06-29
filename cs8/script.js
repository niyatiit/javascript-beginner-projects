function generateTable(){

    let number = Number(document.getElementById("number").value);

    let output = "";

    // for loop

    for(let i = 1; i <= 10; i++){

        output += `${number} × ${i} = ${number * i}<br>`;

    }

    document.getElementById("result").style.display = "block";

    document.getElementById("result").innerHTML =

    `
        <h2>Multiplication Table of ${number}</h2>

        ${output}
    `;

}