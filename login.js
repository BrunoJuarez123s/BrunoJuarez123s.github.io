
 function validateForm() {
    var username = document.getElementById("username").value;
     var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    if (username === "" || password === "") {
         errorMessage.textContent = "Los campos están vacíos. Por favor, complete todos los campos.";
     return false;
    } else {
      errorMessage.textContent = "";
     return true;
         }
}
