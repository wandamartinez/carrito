const carrito = document.querySelector('#carrito');
const conntenedorCarrito = document.querySelector('#lita-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCurso = document.querySelector('#lista-curso');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners(){
    //cuando agregas un curso presionar 'agregar al carrito'
    listaCurso.addEventListener('click', agregarCurso);

    //funciones
    function agregarCurso(e){
        e.preventdefault();
        if(e.target.classList.contains('agregar-carrito')){
            const cursoSeleccionado = e.target.parentElement.parentElement;
            leerDatosCurso(cursoSeleccionado);
        }
    }
}

//lee el contenido de HTML al que le dimos click y extrae la informacion del curso
function leerDatosCurso(curso){
    //crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: listaCurso.querySelector('a').getAttribute('dats-id'),
        cantidad: 1
    }
    //agrega elementos al arreglo del carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
    carritoHTML();
    console.log(articulosCarrito);
}

//MUESTRA EL CARRITO DE COMPRAS EN EL HTML
function carritoHTML(){
    articulosCarrito.forEach(carrito => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            ${carrito.titulo}
        </td>`
        //agregar el html del carrito al tbody
        conntenedorCarrito.appendChild(row)
    });
}