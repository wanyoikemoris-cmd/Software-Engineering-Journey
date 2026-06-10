function protectPage(allowedRoles) {

    let role = localStorage.getItem("role");

    // If no role found → not logged in
    if (!role) {
        window.location.href = "login.html";
        return;
    }

    // If role not allowed → block access
    if (!allowedRoles.includes(role)) {
        alert("You are not authorized to access this page.");
        window.location.href = "login.html";
    }
}