//Simulador de prestamos hipotecarios

let monto = parseInt(prompt('Ingrese el monto de la propiedad'));

while (isNaN(monto)){
    monto = parseInt(prompt('Monto no válido, ingreselo nuevamente'));
} 

alert("De 0 a 12 años el TEA es de 5%, de 13 a 24 es de 10% y a partir de 25 es de 15%");
let anos = parseInt(prompt('Ingrese la cantidad de años en los que desea pagar'));

while (isNaN(anos)){
    anos = parseInt(prompt('Año no válido, ingreselo nuevamente'));
} 

let cantidadCuotas = anos * 12;
 
function PagoEnCuotas (mon,ans){
    if(ans <= 12){   
        pagototal = (mon*1.05)/cantidadCuotas
        alert('El monto a abonar por '+cantidadCuotas+' meses es de '+pagototal+'');
    } else if(ans <= 24){
        pagototal = (mon*1.1)/cantidadCuotas
        alert('El monto a abonar por '+cantidadCuotas+' meses es de '+pagototal+'');
    } else if (ans >=25){
        pagototal = (mon*1.15)/cantidadCuotas
        alert('El monto a abonar por '+cantidadCuotas+' meses es de '+pagototal+'');
    }
}

alert(PagoEnCuotas(monto,anos));

alert("Para calcular nuevamente por favor recarga la página");
