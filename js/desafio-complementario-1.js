// Ejemplo 1

let numeroRep = parseInt(prompt("Ingresa un valor"));

let cantidadRep = parseInt(prompt("Ingresa la cantidad de veces que quieras sumarle 3"));

for (let i=1; i <= cantidadRep; i++){
    if (i===10) break;
    x = 3 * i;
    suma = numeroRep + x;
    alert(suma);
}

// Ejemplo 2

let entrada = prompt("Ingresar la clave mágica");

while(entrada != "ESC" ){
    let y = " Negativo";
    entradaConc = entrada + y;
    alert(entradaConc);
    console.log(entradaConc);
    entrada = prompt(entrada + " no era la clave mágica, intenta nuevamente");
}

// Ejemplo 3

let HolaRep = parseInt(prompt("Ingresa la cantidad de veces que quieras ver Hola"));

if (isNaN(HolaRep)){
    alert("Tenias que ingresar un numero, recarga e intentalo nuevamente");
    console.log("Tenias que ingresar un numero, recarga e intentalo nuevamente");
}else{
    for (let i=1; i <= HolaRep; i++){
        alert("Hola");
    }
}
