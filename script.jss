
let total = 0;

const nameInput = document.getElementById("name");
const amountInput = document.getElementById("amount");
const addButton = document.getElementById("addButton");
const totalDisplay = document.getElementById("total");
const expenses = document.getElementById("expenses");

addButton.addEventListener("click", function () {

    const name = nameInput.value;
    const amount = Number(amountInput.value);

    if (name === "" || amount <= 0) {
        alert("Please enter a name and amount");
        return;
    }

    total = total + amount;

    totalDisplay.textContent = total;

    const expense = document.createElement("div");

    expense.className = "expense";

    expense.textContent = name + " - ₹" + amount;

    expenses.appendChild(expense);

    nameInput.value = "";
    amountInput.value = "";
});
