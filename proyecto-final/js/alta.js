//Alta libros en biblioteca

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

//Libros Dummy
const libro1 = new Libro ("Aprende a cocinar","Cocina",250);
const libro2 = new Libro ("Cocina for dummies","Cocina",150);
const libro3 = new Libro ("Historia del fobal","Deportes",300);
const libro4 = new Libro ("7 pasos para organizarse","Hogar",400);
const libro5 = new Libro ("La Copa Libertadores","Deportes",1000);
const libro6 = new Libro ("Carpinteria básica","Hogar",500);
const libro7 = new Libro ("Ignoto","Suspenso",650);
const libro8 = new Libro ("¿Quien se llevo a Juan?","Suspenso",850);

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
    console.log(libros)
    localStorage.setItem('Libros', JSON.stringify(libros))
    alert('Libros dummy cargados correctamente');
    window.location.reload();
})

let altaLibro = document.querySelector('#altaLibro')

altaLibro.addEventListener('submit', (e) => {
    e.preventDefault()
    let altaForm = new FormData(e.target)
    const libro = new Libro(altaForm.get('titulo'), altaForm.get('categoria'), altaForm.get('paginas'))
    libros.push(libro)
    Swal.fire(
        altaForm.get('titulo'),
        'Se dio de alta correctamente',
        'success'
      )
    localStorage.setItem('Libros', JSON.stringify(libros))
    altaLibro.reset()
})


let borrarLibros = document.querySelector('#borrarLibros')

borrarLibros.addEventListener('click', () => {
    window.localStorage.clear();
    Swal.fire(
        'Libros eliminados',
        '',
        'error'
      )
})