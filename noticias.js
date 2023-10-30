function enviarFormulario() {
    // Obtener los valores de los campos
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var mensaje = document.getElementById("mensaje").value;

    

    // Validar que todos los campos estén llenos
    if (nombre === "" || email === "" || telefono === "" || mensaje === "") {
        alert("Por favor, complete todos los campos.");
    } else {
        // Aquí puedes enviar el formulario o realizar otras acciones necesarias
        alert("Gracias, " + nombre + ". Te contactaremos pronto.");

        // Limpiar los campos del formulario
        document.getElementById("formulario-contacto").reset();
    }
}

function menssem(){
    let ema = document.getElementById("email").value;
    window.alert("Gracias, le enviaremos lo ultimo sobre Nvidia a su correo: "+ema);
}