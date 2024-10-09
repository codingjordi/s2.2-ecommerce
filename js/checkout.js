
// Exercise 6
function validate() {
    event.preventDefault(); // Evita el envío del formulario

    var error = 0;

    // Obtener los campos de entrada
    var fName = document.getElementById("fName");
    var fEmail = document.getElementById("fEmail");
    var fAddress = document.getElementById("fAddress");
    var fLastN = document.getElementById("fLastN");
    var fPassword = document.getElementById("fPassword");
    var fPhone = document.getElementById("fPhone");

    // Limpiar mensajes de error anteriores
    [fName, fEmail, fAddress, fLastN, fPassword, fPhone].forEach(field => {
        field.classList.remove("is-invalid");
    });

    // Validar campo nombre
    if (fName.value.trim() === "" || fName.value.length < 3 || !/^[A-Za-z]+$/.test(fName.value)) {
        error++;
        fName.classList.add("is-invalid");  
    }

    // Validar campo email
    if (fEmail.value.trim() === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fEmail.value)) {
        error++;
        fEmail.classList.add("is-invalid");
    }

    // Validar campo dirección
    if (fAddress.value.trim() === "" || fAddress.value.length < 3) {
        error++;
        fAddress.classList.add("is-invalid");
    }

    // Validar campo apellido
    if (fLastN.value.trim() === "" || fLastN.value.length < 3 || !/^[A-Za-z]+$/.test(fLastN.value)) {
        error++;
        fLastN.classList.add("is-invalid");
    }

    // Validar campo contraseña
    if (fPassword.value.trim() === "" || fPassword.value.length < 4 || fPassword.value.length > 8 || !/(?=.*[A-Za-z])(?=.*\d)/.test(fPassword.value)) {
        error++;
        fPassword.classList.add("is-invalid");
    }

    // Validar campo numerod e telefono
    if (fPhone.value.trim() === "" || fPhone.value.length < 9 || !/^\d+$/.test(fPhone.value)) {
        error++;
        fPhone.classList.add("is-invalid");
    }

    // Mostrar results
    if (error > 0) {
        console.log("Hay " + error + (error = 1 ? " error en el formulario" : " errores en el formulario"));
    } else {
        alert("Formulario validado correctamente ✨🐬🍦🌈");
    }
}
