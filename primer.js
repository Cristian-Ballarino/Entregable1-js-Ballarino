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
