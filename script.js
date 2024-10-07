// Simulación de datos de ejemplo
let proyectos = ["Proyecto de Matemáticas", "Estudio de Física", "Desarrollo Web"];
let recursos = ["Guía de Álgebra", "Material de Biología", "PDF sobre Historia"];
let mensajesForo = ["Bienvenidos al foro!", "¿Alguien tiene recursos sobre química?", "Me gustaría colaborar en un proyecto."];

// Función para mostrar proyectos
function mostrarProyectos() {
    let listaProyectos = document.getElementById("proyectos-lista");
    listaProyectos.innerHTML = "";
    proyectos.forEach(proyecto => {
        let item = document.createElement("div");
        item.className = "col-md-4 mb-3";
        item.innerHTML = `<div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${proyecto}</h5>
                            </div>
                          </div>`;
        listaProyectos.appendChild(item);
    });
}

// Función para mostrar recursos
function mostrarRecursos() {
    let listaRecursos = document.getElementById("recursos-lista");
    listaRecursos.innerHTML = "";
    recursos.forEach(recurso => {
        let item = document.createElement("div");
        item.className = "col-md-4 mb-3";
        item.innerHTML = `<div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${recurso}</h5>
                            </div>
                          </div>`;
        listaRecursos.appendChild(item);
    });
}

// Función para mostrar mensajes en el foro
function mostrarMensajesForo() {
    let listaForo = document.getElementById("foro-lista");
    listaForo.innerHTML = "";
    mensajesForo.forEach(mensaje => {
        let item = document.createElement("div");
        item.className = "alert alert-secondary";
        item.textContent = mensaje;
        listaForo.appendChild(item);
    });
}

// Función para publicar un mensaje en el foro
function publicarMensaje() {
    let mensaje = document.getElementById("mensaje-foro").value;
    if (mensaje.trim() !== "") {
        mensajesForo.push(mensaje);
        mostrarMensajesForo();
        document.getElementById("mensaje-foro").value = "";
    }
}

// Inicializar los datos en la página
document.addEventListener("DOMContentLoaded", function () {
    mostrarProyectos();
    mostrarRecursos();
    mostrarMensajesForo();
});
