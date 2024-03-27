

const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")

confirmPassword.addEventListener("focusout", validatePassword);

function validatePassword() {
    // var password = document.getElementById("password").value;
    // var confirmPassword = document.getElementById("confirmPassword").value;
    // var submitButton = document.getElementById("submitButton");
    // if (password != confirmPassword) {
    //     alert("Passwords do not match.");
    //     submitButton.disabled = true;
    //     return false;
    // }
    // return true;
     if (password.value != confirmPassword.value) {
        alert("Passwords do not match.");
        password.value = "";
        confirmPassword.value = "";
        return false;
    }
    return true;
    
}
