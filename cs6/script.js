function showTime() {

    // Create Date Object
    let today = new Date();

    // Get Hours, Minutes and Seconds
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    // Add Leading Zero
    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // Display Time
    document.getElementById("clock").innerHTML =
        hours + " : " + minutes + " : " + seconds;

    // Display Date
    document.getElementById("date").innerHTML =
        today.toDateString();

}

// Update every second
setInterval(showTime, 1000);

// Show immediately
showTime();