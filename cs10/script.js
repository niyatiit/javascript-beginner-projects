
function calculateTotal(){

    // Prices stored in an array

    let prices = [250, 500, 150, 300, 450];

    let total = 0;

    // Loop to calculate total

    for(let i = 0; i < prices.length; i++){

        total = total + prices[i];

    }

    document.getElementById("result").style.display = "block";

    document.getElementById("result").innerHTML =

    `
        <h2>Shopping Cart</h2>

        <p><b>Item Prices :</b> ${prices.join(", ")}</p>

        <p><b>Total Items :</b> ${prices.length}</p>

        <p><b>Total Price :</b> ₹${total}</p>
    `;

}