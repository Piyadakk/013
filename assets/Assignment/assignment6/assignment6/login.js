window.onload = function() {
};

function checkLogin() {
    var enteredUsername = document.getElementById("username").value;
    var enteredPassword = document.getElementById("password").value;

    var registeredUsername = localStorage.getItem("registeredUsername");
    var registeredPassword = localStorage.getItem("registeredPassword");

    if (enteredUsername === registeredUsername && enteredPassword === registeredPassword) {
        alert("Login successful!");
        return true; 
    } else {
        alert("Username หรือ Password ไม่ถูกต้อง! กรุณากรอกใหม่.");
        return false; 
    }
}
