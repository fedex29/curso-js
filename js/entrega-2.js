//Simulador biblioteca

/*let opciones = parseInt(prompt('Seleccione la opción deseada \n 1 - Suscripción mensual a 3 libros \n 2 - Opcion de un libro \n 3 - Compra de libros'));

while (opciones!=1 && opciones!=2 && opciones!=3){
    opciones = parseInt(prompt('Opción no válida, ingrese nuevamente \n 1 - Suscripción mensual a 3 libros \n 2 - Opcion de un libro \n 3 - Compra de libros'));
} 

if (opciones===1){
   Opcion = "Suscripción mensual a 3 libros"
}else if (opciones===2){
   Opcion = "Opcion de un libro"
} else {
   Opcion = "Compra de libros"
}

alert("Has seleccionado: "+ Opcion);
console.log("Has seleccionado: "+ Opcion);
*/
//Colección de libros

class Libro {
    constructor(id,titulo,categoria,precio){
        this.id = id;
        this.titulo = titulo;
        this.categoria = categoria;
        this.precio = precio;
    }
}

const libro1 = new Libro (1,"Aprende a cocinar","Cocina",250);
const libro2 = new Libro (2,"Cocina for dummies","Cocina",150);
const libro3 = new Libro (3,"Historia del fobal","Deportes",300);
const libro4 = new Libro (4,"7 pasos para organizarse","Hogar",400);
const libro5 = new Libro (5,"La Copa Libertadores","Deportes",1000);
const libro6 = new Libro (6,"Carpinteria básica","Hogar",500);
const libro7 = new Libro (7,"Ignoto","Suspenso",650);
const libro8 = new Libro (8,"¿Quien se llevo a Juan?","Suspenso",850);

let libros = [libro1, libro2, libro3, libro4, libro5, libro6, libro7, libro8]

/*let categoria = parseInt(prompt('Seleccione la categoría \n 1- Cocina \n 2- Deportes \n 3- Hogar \n 4- Suspenso'));

while (categoria!=1 && categoria!=2 && categoria!=3 && categoria!=4){
    categoria = parseInt(prompt('Opción no válida, ingrese nuevamente \n 1- Cocina \n 2- Deportes \n 3- Hogar \n 4- Suspenso'));
} 


if (categoria===1){
    categoriaElegida = "Cocina" 
 }else if (categoria===2){
    categoriaElegida = "Deportes" 
 } else if (categoria===3){
    categoriaElegida = "Hogar" 
 } else{
    categoriaElegida = "Suspenso" 
}
*/

let inputTexto = document.getElementById("inputTexto");
let divResultadoCategorias = document.getElementById("divResultadoCategorias");

inputTexto.addEventListener('change', () => {
    let buscador = inputTexto.value
    console.log(buscador.toLowerCase())
    let librosFiltrados = libros.filter(libro => libro.categoria.includes(buscador.toLowerCase()))

    librosFiltrados.forEach(libro => {
        divResultadoCategorias.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">Titulo: ${libro.titulo}</h5>
                <p>Marca: ${libro.categoria} </p>
                <p>Precio: $${libro.precio} </p>
            </div>
        </div>
        `
    })
})

/*
alert("Has seleccionado: "+ categoriaElegida);
console.log("Has seleccionado: "+ categoriaElegida);

let librosFiltrados = libros.filter(libro => libro.categoria === categoriaElegida);

librosFiltrados.forEach((libroEnArray) => {
     alert('Libros disponible: \n' +libroEnArray.id+ " - " +libroEnArray.titulo);
})
console.log('Libros disponibles:')
librosFiltrados.forEach((libroEnArray) => {
    console.log(libroEnArray.id+ " - " +libroEnArray.titulo);
})




/*
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
*/