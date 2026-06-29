function validateForm(){

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    let result = document.getElementById("result");

    result.style.display = "block";

    // Name Validation

    if(name.trim() == ""){

        result.innerHTML = "❌ Error : Name should not be empty.";
        return;

    }

    // Age Validation

    if(age.trim() == ""){

        result.innerHTML = "❌ Error : Age is required.";
        return;

    }

    if(isNaN(age)){

        result.innerHTML = "❌ Error : Age must be a number.";
        return;

    }

    result.innerHTML =

    `
        ✅ Form Submitted Successfully.

        <br><br>

        <b>Name :</b> ${name}

        <br>

        <b>Age :</b> ${age}
    `;

}