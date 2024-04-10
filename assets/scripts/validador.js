
/**
 * VALIDACIONS DE RESPUESTAS
 */

function validarRespuesta() {
    var respuestaCorrecta = "budapest";
    var respuestaUsuario = document.getElementById("respuesta").value.toLowerCase();

    if (respuestaUsuario === respuestaCorrecta) {
        document.getElementById("feedback").innerHTML = "¡Correcto! Aquí va el acertijo para averiguar la prueba 2: Añade a 192.168. los 3 primeros números de las coordenadas de la ciudad que has averiguado antes";;
        // var candado = document.querySelector("#prueba2 .candado");
        // candado.innerHTML = "🔓 Prueba 2"; // Cambia el ícono a un candado abierto
        // candado.style.backgroundColor = "green"; // Cambia el fondo a verde
        // candado.disabled = false; // Activa el botón si estaba desactivado
        desbloquearPrueba(2);
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


function validarRespuestaPrueba3() {
    var respuestaCorrectaPrueba3 = "prueba tres acertada"; // Asumiendo que esta es la respuesta correcta
    var respuestaUsuarioPrueba3 = document.getElementById("respuestaPrueba3").value.toLowerCase();

    if (respuestaUsuarioPrueba3 === respuestaCorrectaPrueba3) {
        document.getElementById("feedbackPrueba3").innerHTML = "¡Correcto! La Prueba 4 está desbloqueada.";
        desbloquearPrueba(4);
    } else {
        document.getElementById("feedbackPrueba3").innerHTML = "Respuesta incorrecta, intenta de nuevo.";
    }
}

var intentosFallidos = 0; // Contador de intentos fallidos

function validarRespuestaPrueba4() {
    var respuestaCorrectaPrueba4 = "clase c, bits 8"; // Asumiendo que esta es la respuesta correcta
    var respuestaUsuarioPrueba4 = document.getElementById("respuestaPrueba4").value.toLowerCase();

    if (respuestaUsuarioPrueba4 === respuestaCorrectaPrueba4) {
        document.getElementById("feedbackPrueba4").innerHTML = "¡Correcto! La Prueba 5 está desbloqueada.";
        desbloquearPrueba(5);
    } else {
        // Incrementar el contador de intentos fallidos
        intentosFallidos++;

        // Verificar si se han excedido los tres intentos
        if (intentosFallidos >= 3) {
            // Crear el div para el fondo oscuro transparente
            var overlay = document.createElement("div");
            overlay.id = "overlay";
            document.body.appendChild(overlay);

            // Crear el div para el mensaje de "GAME OVER"
            var gameOverDiv = document.createElement("div");
            gameOverDiv.id = "gameOver";
            gameOverDiv.textContent = "GAME OVER";
            document.body.appendChild(gameOverDiv);

            // Crear el botón para intentar de nuevo
            var intentarDenuevoBtn = document.createElement("button");
            intentarDenuevoBtn.textContent = "Intentar de Nuevo";
            intentarDenuevoBtn.onclick = function() {
                reiniciarEscapeRoom(); // Función para reiniciar el escape room
            };
            document.body.appendChild(intentarDenuevoBtn);

            // Mover el botón debajo del mensaje de "GAME OVER"
            gameOverDiv.insertAdjacentElement("afterend", intentarDenuevoBtn);
        } else {
            document.getElementById("feedbackPrueba4").innerHTML = "Respuesta incorrecta, intenta de nuevo.";
        }
    }

    setTimeout(function() {
        document.getElementById("intentarDenuevoBtn").style.display = "block";
    }, 10000);
    
}

/**
 * REINICIO
 */

function reiniciarEscapeRoom() {
    // Ocultar el mensaje de "GAME OVER" y el botón "Intentar de Nuevo"
    document.getElementById("gameOver").style.display = "none";
    document.getElementById("intentarDenuevoBtn").style.display = "none";

    // Reiniciar el contador de intentos fallidos
    intentosFallidos = 0;

    // Restaurar cualquier otro estado que necesite ser restablecido
    // Por ejemplo, puedes reiniciar el contenido de los campos de texto o restablecer el progreso del juego
}

/**
 * DESBLOQUEAR PRUEBAS
 */

function desbloquearPrueba(numPrueba) {
    var seccionPruebaActual = document.getElementById("prueba" + numPrueba);
    var botonCandado = seccionPruebaActual.querySelector(".candado");

    // Actualiza el texto y el estilo del botón candado para indicar que la sección puede ser desbloqueada
    seccionPruebaActual.style.backgroundColor = "green";

    botonCandado.innerHTML = "🔓 Prueba " + numPrueba + " Desbloqueada - Haz clic para abrir";
    botonCandado.style.backgroundColor = "green";
    botonCandado.style.color = "black"; // Cambia el color del texto a negro
    botonCandado.disabled = false;

    // Añade un evento de clic al botón del candado para desbloquear la prueba    
    seccionPruebaActual.addEventListener("click", function() {                
        mostrarContenidoPrueba(numPrueba);
    });
}


/**
 * MOSTRAR CONTENIDOS DE LAS PRUEBAS
 */

function mostrarContenidoPrueba(numPrueba) {    
    var seccionPruebaActual = document.getElementById("prueba" + numPrueba);
    var botonCandado = seccionPruebaActual.querySelector(".candado");
    var contenidoPrueba = seccionPruebaActual.querySelector(".contenido-prueba" + numPrueba);

    // Muestra el contenido de la prueba y cambia el estilo del botón candado
    seccionPruebaActual.style.backgroundColor = "white";
    botonCandado.style.display = "none";
    contenidoPrueba.style.display = "block";
}


