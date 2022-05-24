//Simulador biblioteca

let divCotizacionDolar = document.getElementById("divCotizacionDolar");

fetch("https://cotizaciones-brou.herokuapp.com/api/currency/latest")
.then(response => response.json())
.then(data => {
    //Filtro solo por los rates
    let {rates} = data
    //Obtengo solo USD
    let {USD} = rates
    //Obtengo el valor de venta
    let {sell, buy} = USD
    divCotizacionDolar.innerHTML += `
    <h3>Cotizaciones</h3>
    Dolar a la compra: $${buy}<br>
    Dolar a la venta: $${sell}
    `
})


class Libro {
    constructor(titulo,categoria,paginas,precio){
        this.titulo = titulo;
        this.categoria = categoria;
        this.paginas = paginas;
        this.precio = precio;
    }
}

let libros = [];

if(localStorage.getItem('Libros')) {
    libros = JSON.parse(localStorage.getItem('Libros'))
} else {
    localStorage.setItem('Libros', JSON.stringify(libros))
}

//Libros Dummy
const libro1 = new Libro ("Aprende a cocinar","Cocina",250,400);
const libro2 = new Libro ("Cocina for dummies","Cocina",150,320);
const libro3 = new Libro ("Historia del fobal","Deportes",300,4500);
const libro4 = new Libro ("7 pasos para organizarse","Hogar",400,100);
const libro5 = new Libro ("La Copa Libertadores","Deportes",1000,7890);
const libro6 = new Libro ("Carpinteria básica","Hogar",500,250);
const libro7 = new Libro ("Ignoto","Suspenso",650,300);
const libro8 = new Libro ("¿Quien se llevo a Juan?","Suspenso",850,450);

let librosDummy = document.querySelector("#librosDummy");

librosDummy.addEventListener('click', () => {
    libros.push(libro1)
    libros.push(libro2)
    libros.push(libro3)
    libros.push(libro4)
    libros.push(libro5)
    libros.push(libro6)
    libros.push(libro7)
    libros.push(libro8)
    console.log(libros);
    Swal.fire(
        '',
        'Libros dummy agregados',
        'info'
      )
})

let inputTexto = document.getElementById("inputTexto");
let divResultadoCategorias = document.getElementById("divResultadoCategorias");

inputTexto.addEventListener('change', () => {
    let buscador = inputTexto.value
    console.log(buscador)
    let librosFiltrados = JSON.parse(localStorage.getItem('Libros')).filter(libro => libro.categoria.includes(buscador))
    librosFiltrados.forEach(libro => {
        divResultadoCategorias.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${libro.titulo}</h5>
                <p>Categoria: ${libro.categoria} </p>
                <p>Páginas: ${libro.paginas} </p>
                <p>Precio en $: ${libro.precio} </p>
                <p>Precio en USD: ${libro.precio} </p>
            </div>
        </div>
        `
    })
})

let altaLibro = document.querySelector('#altaLibro')

altaLibro.addEventListener('submit', (e) => {
    e.preventDefault()
    let altaForm = new FormData(e.target)
    const libro = new Libro(altaForm.get('titulo'), altaForm.get('categoria'), altaForm.get('paginas'), altaForm.get('precio'))
    libros.push(libro)
    Swal.fire(
        altaForm.get('titulo'),
        'Se dio de alta correctamente',
        'success'
      )
    //alert('El libro '+altaForm.get('titulo')+' se dio de alta correctamente')
    localStorage.setItem('Libros', JSON.stringify(libros))
    altaLibro.reset()
})


