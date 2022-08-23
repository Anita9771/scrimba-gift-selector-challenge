document.getElementById("btn").addEventListener("click", calculate)
let costEl = document.getElementById("cost-el")
 

function calculate() {
    // 1. Write the JavaScript to calculate the total cost of the selected options from the form.
    
    // for food
    var getFoodValue = document.getElementById("food-select");
    var foodValue = getFoodValue.options[getFoodValue.selectedIndex].value;
    var foodValueToNumber = parseInt(foodValue);
    
    // for transport
    var getTransportValue = document.getElementById("transport-select");
    var transportValue = getTransportValue.options[getTransportValue.selectedIndex].value;
    var transportValueToNumber = parseInt(transportValue);
    
    // total gift cost
    var totalCost = foodValueToNumber + transportValueToNumber;
    
    // 2. Display the total cost in the cost-el span.
    costEl.innerHTML = totalCost;
}
 