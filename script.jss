
let total = 0;

function addExpense() {
    let name = document.getElementById("expenseName").value;
    let amount = Number(document.getElementById("amount").value);

    if (name === "" || amount <= 0) {
        alert("Please enter a valid expense");
        return;
    }

    total = total + amount;

    document.getElementById("total").textContent = total;

    let list = document.getElementById("expenseList");

    let item = document.createElement("li");
    item.textContent = name + " - ₹" + amount;

    list.appendChild(item);

    document.getElementById("expenseName").value = "";
    document.getElementById("amount").value = "";
}
