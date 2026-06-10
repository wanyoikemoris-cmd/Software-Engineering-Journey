function login() {

    // GET INPUT VALUES
    let username = document.getElementById("username").value;

    let password = document.getElementById("password").value;

    // ADMIN LOGIN
    if (username === "admin" && password === "1234") {

        localStorage.setItem("role", "admin");

        window.location.href = "dashboard.html";
    }

    // TELLER LOGIN
    else if (username === "teller" && password === "1234") {

        localStorage.setItem("role", "teller");

        window.location.href = "dashboard.html";
    }

    // OFFICER LOGIN
    else if (username === "officer" && password === "1234") {

        localStorage.setItem("role", "officer");

        window.location.href = "dashboard.html";
    }

    // INVALID LOGIN
    else {

        alert("Invalid username or password");
    }

}