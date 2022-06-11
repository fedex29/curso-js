//Simulador biblioteca

class Libro {
    constructor(titulo,categoria,paginas){
        this.titulo = titulo;
        this.categoria = categoria;
        this.paginas = paginas;
    }
}

let libros = [];

if(localStorage.getItem('Libros')) {
    libros = JSON.parse(localStorage.getItem('Libros'))
} else {
    localStorage.setItem('Libros', JSON.stringify(libros))
}

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
            </div>
        </div>
        `
    })
})


//Uso de API para obtener cotización del dolar en Uruguay
//Fuente: https://github.com/gmanriqueUy/cotizaciones-brou

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
    Compra: $${buy}<br>
    Venta: $${sell}
    `
})