function calculateMarks() {

    let mark1 = Number(document.getElementById("sub1").value);
    let mark2 = Number(document.getElementById("sub2").value);
    let mark3 = Number(document.getElementById("sub3").value);
    let mark4 = Number(document.getElementById("sub4").value);
    let mark5 = Number(document.getElementById("sub5").value);

    // Validation
    if (
        mark1 === 0 && document.getElementById("sub1").value === "" ||
        mark2 === 0 && document.getElementById("sub2").value === "" ||
        mark3 === 0 && document.getElementById("sub3").value === "" ||
        mark4 === 0 && document.getElementById("sub4").value === "" ||
        mark5 === 0 && document.getElementById("sub5").value === ""
    ) {
        alert("Please enter marks for all subjects.");
        return;
    }

    let total = mark1 + mark2 + mark3 + mark4 + mark5;

    let average = total / 5;

    let grade;

    if (average >= 90) {
        grade = "A+";
    }
    else if (average >= 80) {
        grade = "A";
    }
    else if (average >= 70) {
        grade = "B";
    }
    else if (average >= 60) {
        grade = "C";
    }
    else if (average >= 50) {
        grade = "D";
    }
    else {
        grade = "Fail";
    }

    const result = document.getElementById("result");

    result.style.display = "block";

    result.innerHTML = `
        <h2>📋 Result</h2>
        <p><strong>Total Marks:</strong> ${total}</p>
        <p><strong>Average:</strong> ${average.toFixed(2)}</p>
        <p><strong>Grade:</strong> ${grade}</p>
    `;
}