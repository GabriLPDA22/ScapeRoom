
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

// Mensajes de retroalimentación para respuestas incorrectas
var mensajesIncorrectos = [
    "Respuesta incorrecta, intenta de nuevo.",
    "¡Casi! Pero esa no es la respuesta correcta. Inténtalo de nuevo.",
    "Esa no es la respuesta correcta. Sigue intentándolo.",
    "Oh no, esa no es la respuesta. Pero no te rindas, puedes hacerlo."
];

function validarRespuestaPrueba4() {
    var respuestaCorrectaPrueba4 = "clase c y 8 bits"; // Asumiendo que esta es la respuesta correcta
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
            setTimeout(function () {
                var intentarDenuevoBtn = document.createElement("button");
                intentarDenuevoBtn.id = "intentarDenuevoBtn";
                intentarDenuevoBtn.textContent = "Intentar de Nuevo";
                intentarDenuevoBtn.onclick = function () {
                    window.location.reload(); // Recargar la página
                };
                gameOverDiv.insertAdjacentElement("afterend", intentarDenuevoBtn);
            }, 1500);
        } else {
            // Mensaje de retroalimentación aleatorio para respuestas incorrectas
            var mensajeAleatorio = mensajesIncorrectos[Math.floor(Math.random() * mensajesIncorrectos.length)];
            document.getElementById("feedbackPrueba4").innerHTML = mensajeAleatorio;
        }
    }
}

function validarRespuestaPrueba5() {
    var respuestaCorrectaPrueba5 = "el castillo de buda es impresionante"; // Asumiendo que esta es la respuesta correcta
    var respuestaUsuarioPrueba5 = document.getElementById("respuestaPrueba5").value.toLowerCase();

    if (respuestaUsuarioPrueba5 === respuestaCorrectaPrueba5) {
        document.getElementById("feedbackPrueba5").innerHTML = "¡Correcto! La Prueba 6 está desbloqueada.";
        desbloquearPrueba(6);
    } else {
        document.getElementById("feedbackPrueba5").innerHTML = "Respuesta incorrecta, intenta de nuevo.";
    }
}


function validarRespuestaPrueba6() {
    var respuestasCorrectasPrueba6 = ["procesador", "placa base"]; // Lista de respuestas correctas
    var respuestaUsuarioPrueba6 = document.getElementById("respuestaPrueba6").value.toLowerCase();

    if (respuestasCorrectasPrueba6.includes(respuestaUsuarioPrueba6)) {
        document.getElementById("feedbackPrueba6").innerHTML = "¡Correcto!";
        //desbloquearPrueba(6);
        mostrarMensajeExitoConRetraso(); // Aquí se llama a la función para mostrar el mensaje de éxito con retraso
    } else {
        document.getElementById("feedbackPrueba6").innerHTML = "Respuesta incorrecta, intenta de nuevo.";
    }
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
    seccionPruebaActual.addEventListener("click", function () {
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


/**
 * EXITO
 * 
 */

// Función para mostrar el mensaje de éxito
function mostrarMensajeExito() {
    document.getElementById("exitoPrueba6").style.display = "flex";
}

// Función para cerrar el mensaje de éxito y continuar con el escape room
function cerrarMensajeExito() {
    document.getElementById("exitoPrueba6").style.display = "none";
    // Aquí puedes agregar cualquier otra lógica que necesites ejecutar
    // cuando el usuario cierra el mensaje de éxito.
}


// Función para mostrar el mensaje de éxito con retraso
function mostrarMensajeExitoConRetraso() {
    setTimeout(function () {
        document.getElementById("exitoPrueba6").style.display = "flex";
    }, 2000); // 2000 milisegundos = 2 segundos
}