// Definir las preguntas y respuestas del cuestionario
var preguntas = [
    "¿Cuál es la capital de Francia?",
    "¿En qué año se fundó Google?",
    "¿Quién pintó La Mona Lisa?"
];
var respuestas = [];

// Función para iniciar el cuestionario
function iniciarCuestionario() {
    respuestas = []; // Reiniciar las respuestas

    // Mostrar las preguntas y capturar las respuestas
    var cuestionarioContainer = document.getElementById("cuestionarioContainer");
    cuestionarioContainer.innerHTML = "";
    
    for (var i = 0; i < preguntas.length; i++) {
        var pregunta = preguntas[i];
        var respuesta = prompt(pregunta);
        respuestas.push(respuesta);
    }
}

// Función para visualizar los resultados en otra ventana
function visualizarResultados() {
    var resultadosVentana = window.open("", "Resultados", "width=400, height=300");
    var contenidoResultados = "<h2>Resultados del Cuestionario</h2>";
    
    for (var i = 0; i < respuestas.length; i++) {
        contenidoResultados += "<p><strong>Pregunta " + (i + 1) + ":</strong> " + preguntas[i] + "</p>";
        contenidoResultados += "<p><strong>Respuesta:</strong> " + respuestas[i] + "</p>";
    }
    
    resultadosVentana.document.write(contenidoResultados);
    resultadosVentana.document.close();
}
