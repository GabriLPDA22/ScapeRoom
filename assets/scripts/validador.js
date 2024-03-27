function validarRespuesta() {
    var respuestaCorrecta = "Budapest";
    var respuestaUsuario = document.getElementById("respuesta").value;

    if(respuestaUsuario.toLowerCase() === respuestaCorrecta.toLowerCase()) {
        document.getElementById("feedback").innerHTML = "¡Correcto! Aquí va la siguiente pista...";
    } else {
        document.getElementById("feedback").innerHTML = "Respuesta incorrecta, intenta de nuevo.";
    }
}