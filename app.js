// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el elemento de entrada y la lista de amigos
    const inputAmigo = document.getElementById('amigo');
    const listaAmigos = document.getElementById('listaAmigos');
    const resultado = document.getElementById('resultado');
    
    // Limpiar cualquier resultado anterior
    resultado.innerHTML = '';
    
    // Obtener el nombre del input y eliminar espacios en blanco
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar que el nombre no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingrese un nombre válido');
        return;
    }
    
    // Verificar que el nombre no esté duplicado
    if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya ha sido agregado');
        inputAmigo.value = '';
        return;
    }
    
    // Agregar el nombre al array de amigos
    amigos.push(nombreAmigo);
    
    // Crear un nuevo elemento de lista
    const li = document.createElement('li');
    li.textContent = nombreAmigo;
    li.classList.add('friend-item');
    
    // Crear un botón de eliminar para cada nombre
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = '✖';
    botonEliminar.classList.add('delete-button');
    botonEliminar.addEventListener('click', () => {
        // Eliminar el nombre del array y de la lista
        const index = amigos.indexOf(nombreAmigo);
        if (index > -1) {
            amigos.splice(index, 1);
        }
        listaAmigos.removeChild(li);
    });
    
    // Agregar el botón de eliminar al elemento de lista
    li.appendChild(botonEliminar);
    
    // Agregar el elemento a la lista
    listaAmigos.appendChild(li);
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    
    // Validar que haya al menos dos amigos en la lista
    if (amigos.length < 2) {
        alert('Debe agregar al menos dos amigos para realizar un sorteo');
        return;
    }
    
    // Limpiar resultados anteriores
    resultado.innerHTML = '';
    
    // Seleccionar un amigo aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    const resultadoTexto = document.createElement('li');
    resultadoTexto.textContent = `¡El amigo secreto es: ${amigoSecreto}!`;
    resultadoTexto.classList.add('result-item');
    
    resultado.appendChild(resultadoTexto);
}

// Evento para permitir agregar amigos presionando Enter
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        agregarAmigo();
    }
});