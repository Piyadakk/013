window.onload = function() {
    document.getElementById("myRegister").onsubmit = validateForm;
};

function validateForm() {
    var password = document.forms["myRegister"]["password"].value;
    var retypePassword = document.forms["myRegister"]["retypePassword"].value;

    if (password !== retypePassword) {
        document.getElementById("errormsg").innerText = "Password ไม่ตรงกัน";
        return false; 
    }

    var username = document.forms["myRegister"]["username"].value;
    localStorage.setItem("registeredUsername", username);
    localStorage.setItem("registeredPassword", password);

    alert("OK"); 
    return true;
}
