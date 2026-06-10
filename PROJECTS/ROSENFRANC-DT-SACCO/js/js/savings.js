let savings = [];

function postTransaction() {

    let memberId = document.getElementById("memberId").value;
    let type = document.getElementById("type").value;
    let amount = parseFloat(document.getElementById("amount").value);

    let transaction = {
        memberId: memberId,
        type: type,
        amount: amount,
        date: new Date().toLocaleString()
    };

    savings.push(transaction);

    renderSavings();
}

function renderSavings() {

    let table = document.getElementById("savingsTable");
    table.innerHTML = "";

    savings.forEach(s => {
        table.innerHTML += `
            <tr>
                <td>${s.memberId}</td>
                <td>${s.type}</td>
                <td>${s.amount}</td>
                <td>${s.date}</td>
            </tr>
        `;
    });
}
let balances = {};
function postTransaction() {

    let memberId = document.getElementById("memberId").value;
    let type = document.getElementById("type").value;
    let amount = parseFloat(document.getElementById("amount").value);

    if (!balances[memberId]) {
        balances[memberId] = 0;
    }

    if (type === "Deposit") {
        balances[memberId] += amount;
    } 
    else if (type === "Withdrawal") {
        balances[memberId] -= amount;
    }

    let transaction = {
        memberId: memberId,
        type: type,
        amount: amount,
        date: new Date().toLocaleString(),
        balance: balances[memberId]
    };

    savings.push(transaction);

    renderSavings();
}
function renderSavings() {

    let table = document.getElementById("savingsTable");
    table.innerHTML = "";

    savings.forEach(s => {
        table.innerHTML += `
            <tr>
                <td>${s.memberId}</td>
                <td>${s.type}</td>
                <td>${s.amount}</td>
                <td>${s.date}</td>
                <td>${s.balance}</td>
            </tr>
        `;
    });
}