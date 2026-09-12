
let total = 0;

function addExpense() {
    let name = document.getElementById("expenseName").value;
    let amount = Number(document.getElementById("amount").value);

    if (name === "" || amount <= 0) {
        alert("Please enter expense name and amount");
        return;
    }

    total += amount;

    document.getElementById("total").textContent = total;

    let item = document.createElement("li");
    item.textContent = name + " - ₹" + amount;

    document.getElementById("expenseList").appendChild(item);

    document.getElementById("expenseName").value = "";
    document.getElementById("amount").value = "";
}
