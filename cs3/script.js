function login() {

    // Variables
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Correct Username and Password
    let correctUsername = "admin";
    let correctPassword = "12345";

    // Condition
    if (username === correctUsername && password === correctPassword) {

        alert("✅ Login Successful");

    }
    else {

        alert("❌ Invalid Login");

    }

}