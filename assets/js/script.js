//VALIDADOR  DE FORMULARIO BÁSICO EN CONSOLA ===
//==============================================

// Captura de datos con prompt().
const fullname = prompt("Ingresa tu nombre completo:");
const email = prompt("Ingresa tu correo electrónico:");
const password = prompt("Ingresa tu contraseña (mínimo 8 caracteres):");



// Validación de campos obligatorios ==
//=====================================

// VALIDACIÓN FULLNAME
if (
    fullname === null || //comprueba si la variable es exactamente null.
    fullname === undefined || //comprueba si la variable no ha sido definida.
    fullname.trim() === "" || //comprueba si la cadena está vacía o solo contiene espacios en blanco. Usamos .trim() para eliminar espacios antes de verificar si está vacía.
    /\d/.test(fullname) // <-- Detecta si tiene números. Este código comprueba si en el valor de fullname hay al menos un número.
) {
    console.log("❌ Error: El campo 'nombre' no puede estar vacío ni contener números.");
}

// VALIDACIÓN EMAIL
else if (
    email === null ||
    email === undefined ||
    email.trim() === "" ||
    !email.includes("@") //Este código generalmente se usa en validaciones para comprobar si una dirección de correo electrónico es inválida por no tener el carácter "@".
) {
    console.log("❌ Error: El campo 'email' no debe estar vacío y debe contener un '@'.");
}

// VALIDACIÓN PASSWORD
else if (
    password === null ||
    password === undefined ||
    password.trim() === "" ||
    password.length < 8  // Verifica si la longitud de la cadena almacenada en la variable password es menor que 8. Es decir, comprueba si la contraseña tiene menos de 8 caracteres.
) {
    console.log("❌ Error: El campo 'password' debe tener al menos 8 caracteres.");
}

else {
    console.log(`✅ Registro exitoso. ¡Bienvenido, ${fullname}!`);
}

