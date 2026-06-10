let members = [];

function addMember() {

    let name = document.getElementById("name").value;
    let idno = document.getElementById("idno").value;
    let phone = document.getElementById("phone").value;

    let member = {
        id: Date.now(),
        name: name,
        idno: idno,
        phone: phone,
        status: "Active"
    };

    members.push(member);

    renderTable();
}

function renderTable() {

    let table = document.getElementById("memberTable");
    table.innerHTML = "";

    members.forEach(m => {
        table.innerHTML += `
            <tr>
                <td>${m.id}</td>
                <td>${m.name}</td>
                <td>${m.idno}</td>
                <td>${m.phone}</td>
                <td>${m.status}</td>
            </tr>
        `;
    });
}