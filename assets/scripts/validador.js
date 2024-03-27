function validarRespuesta() {
    var respuestaCorrecta = "budapest";
    var respuestaUsuario = document.getElementById("respuesta").value.toLowerCase();

    if (respuestaUsuario === respuestaCorrecta) {
        document.getElementById("feedback").innerHTML = "¡Correcto! Aquí va la siguiente pista: Añade a 192.168. los 3 primeros números de las coordenadas de la ciudad que has averiguado antes";;
        var candado = document.querySelector("#prueba2 .candado");
        candado.innerHTML = "🔓 Prueba 2"; // Cambia el ícono a un candado abierto
        candado.style.backgroundColor = "green"; // Cambia el fondo a verde
        candado.disabled = false; // Activa el botón si estaba desactivado
    } else {
        document.getElementById("feedback").innerHTML = "Respuesta incorrecta, intenta de nuevo.";
    }
}

function validarRespuestaPrueba2() {
    var respuestaCorrectaPrueba2 = "192.168.47.29/54"; // Asumiendo que esta es la respuesta correcta
    var respuestaUsuarioPrueba2 = document.getElementById("respuestaPrueba2").value;

    if (respuestaUsuarioPrueba2 === respuestaCorrectaPrueba2) {
        document.getElementById("feedbackPrueba2").innerHTML = "¡Correcto! La Prueba 3 está desbloqueada.";
        desbloquearPrueba(3);
    } else {
        document.getElementById("feedbackPrueba2").innerHTML = "Respuesta incorrecta, intenta de nuevo.";
    }
}


function desbloquearPrueba(numPrueba) {
    var seccionPruebaActual = document.getElementById("prueba" + numPrueba);
    var botonCandado = seccionPruebaActual.querySelector(".candado");

    // Cambia el texto del botón para indicar que se puede abrir la prueba
    botonCandado.innerHTML = "🔓 Prueba " + numPrueba;
    botonCandado.style.backgroundColor = "green"; // Cambia el color de fondo a verde
    botonCandado.onclick = function() { mostrarContenidoPrueba(numPrueba); }; // Actualiza el evento onclick para mostrar el contenido
}

function mostrarContenidoPrueba(numPrueba) {
    var seccionPruebaActual = document.getElementById("prueba" + numPrueba);
    var contenidoPrueba = seccionPruebaActual.querySelector(".contenido-prueba" + numPrueba);

    // Muestra el contenido de la prueba y esconde el botón del candado
    contenidoPrueba.style.display = "block";
    seccionPruebaActual.querySelector(".candado").style.display = "none";
}