// Array of Objects

let students = [

    {
        name: "Niyati",
        age: 20,
        marks: 95
    },

    {
        name: "Riya",
        age: 21,
        marks: 88
    },

    {
        name: "Amit",
        age: 19,
        marks: 76
    },

    {
        name: "Priya",
        age: 20,
        marks: 91
    }

];

// Function

function showStudents(){

    let output = "";

    // for Loop

    for(let i = 0; i < students.length; i++){

        output +=

        `
        <div class="student">

            <h3>Student ${i+1}</h3>

            <p><b>Name :</b> ${students[i].name}</p>

            <p><b>Age :</b> ${students[i].age}</p>

            <p><b>Marks :</b> ${students[i].marks}</p>

        </div>

        `;

    }

    document.getElementById("result").innerHTML = output;

}