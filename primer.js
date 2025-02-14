console.log("esto es un mensaje")

function saludar() {
    console.log("¡Hola!");
}
saludar();

// Solicitar al usuario que ingrese una contraseña
let contraseña = prompt("Por favor, ingresa tu contraseña:");

// Verificar la contraseña ingresada
if (contraseña === "1234") {
    alert("¡Acceso concedido!");
} else {
    alert("¡Contraseña incorrecta!.");
}

// Función para mostrar la fecha y hora actual en Buenos Aires
function mostrarFechaHora() {
    let fechaActual = new Date();
    let opciones = {
        timeZone: 'America/Argentina/Buenos_Aires',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    };
    let formateador = new Intl.DateTimeFormat('es-AR', opciones);
    document.getElementById('fechaHora').textContent = formateador.format(fechaActual);
}

// Llamar a la función para mostrar la fecha y hora
mostrarFechaHora();

// Actualizar la fecha y hora cada segundo
setInterval(mostrarFechaHora, 1000);

// Función para el botón 1
document.getElementById('boton1').addEventListener('click', function() {
    alert('¡primer botón !');
});

// Función para el botón 2
document.getElementById('boton2').addEventListener('click', function() {
    alert('¡segundo botón!');
});

// Función para el botón 3
document.getElementById('boton3').addEventListener('click', function() {
    alert('tercer botón!');
});
