function texto() {
    var textomemeElement = document.getElementById("textomeme"); // Obtenemos el elemento del input de texto
    var tituloElement = document.querySelector(".titulo"); // Obtenemos el elemento <p class="titulo">
    
    tituloElement.textContent = textomemeElement.value; // Cambiamos el contenido de <p class="titulo">
}
function cambioCL(color) {
    var tituloElement = document.querySelector(".titulo");
    tituloElement.style.color = color;
}
function cambioImagen(valor) {
    var imagenElement = document.getElementById("imagen"); // Obtenemos el elemento de la imagen

    switch (valor) {
        case "imagen1":
            imagenElement.src = "kanye.jpg";
            break;
        case "imagen2":
            imagenElement.src = "kendrick.jpg";
            break;
        case "imagen3":
            imagenElement.src = "milemorale.jpg";
            break;
        default:
            break;
    }
}

function cambioColor(color) {
    var tituloElement = document.querySelector(".titulo"); // Obtenemos el elemento del título
    tituloElement.style.backgroundColor = color; // Cambiamos el color de fondo del título
}
function enviarNombreFecha() {
    var nombreCompletoElement = document.getElementById("nombreCompleto"); // Obtenemos el elemento del nombre completo
    var fechaElement = document.getElementById("fecha"); // Obtenemos el elemento de la fecha
    var resultadoNombreFechaElement = document.getElementById("resultadoNombreFecha"); // Obtenemos el elemento para mostrar el resultado
    
    var nombreCompleto = nombreCompletoElement.value;
    var fecha = fechaElement.value;
    
    resultadoNombreFechaElement.textContent = "Nombre Completo: " + nombreCompleto + " - Fecha: " + fecha;
}