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

//primer boton
document.getElementById('miboton').addEventListener('click', function() {
    alert('¡primer boton!');
});
