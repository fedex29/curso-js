let nombre = prompt("Ingresa tu nombre");

let bienvenida = "Hola, "+nombre+"!";

if (nombre) {
    alert(bienvenida); 
} else {
    alert("No se ingreso nombre");
}

let numero = parseInt(prompt("Ingresa un valor"));

if (numero > 1000){
    alert("El numero ingresado es superior a 1000");
} else {
    console.log("El numero ingresado esta dentro de los parametros normales");
}

let numeronuevo = parseInt(prompt("Ingresa otro numero"));

if ((numeronuevo > 10) && (numeronuevo < 50)){
    alert("El numero ingresado esta entre 10 y 50");
} else {
    console.log("El numero ingresado esta fuera de rango");
}