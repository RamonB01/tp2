const formulario = $("formulario");
const mensaje = $("mensaje");
const edad = $("edad");
const correo = $("correo");

formulario.addEventListener("focusout", () => {
    mensaje.style.color = "red";
    if (formulario["nombre"].value === "") {
        mensaje.textContent = "Nombre vacío";
    } else if (formulario["apellido"].value === "") {
        mensaje.textContent = "Apellido vacío";
    } else if (formulario["edad"].value < 0) {
        mensaje.textContent = "La edad es negativa";
    } else if (formulario["edad"].value === "") {
        mensaje.textContent = "La edad está vacía";
    } else if (formulario["edad"].value < 18) {
        mensaje.textContent = "No valido a menores de edad";
    } else if (formulario["correo"].value === "") {
        mensaje.textContent = "Correo electrónico vacío";
    } else if (!formulario["correo"].value.includes("@")) {
        mensaje.textContent = "el correo debe tener '@'";
    } else {
        mensaje.textContent = "Datos correctos";
        mensaje.style.color = "green";
    }
});


function $(elemento) {
    return document.getElementById(elemento);
}