// OBJETOS ///////////////////////////////////////

class Hostel {
    constructor (id, nombre, ubicacion, precio, estrellas, habitacionDisponible, cantidadPersonas){
        this.id = id
        this.nombre = nombre
        this.ubicacion = ubicacion
        this.precio = precio
        this.estrellas = estrellas
        this.habitacionDisponible = habitacionDisponible
        this.cantidadPersonas = cantidadPersonas
    }
    calcularPrecio (){
        return this.cantidadPersonas * this.precio;
    }
}

class Persona {
    constructor (nombre, email) {
    this.nombre = nombre
    this.email = email
}}


// ARRAYS ///////////////////////////////////////

const hostel1 = new Hostel (1, "Trovatex Ferradurinha", "Brasil", 90, 7.5, ["con vista al mar", "terraza", "baño compartido"])
const hostel2 = new Hostel (2, "Trovatex Potrero", "Costa Rica", 60, 8, ["con vista al mar", "balcon", "cocina individual"])
const hostel3 = new Hostel (3, "Trovatex Cinque Terre", "Italia", 150, 9.2, ["con vista al mar", "terraza", "desayuno incluido"])
const hostel4 = new Hostel (4, "Trovatex Barcelona", "España", 100, 9.5, ["con vista al mar", "balcon", "con jacuzzi"])

const hostels = [hostel1, hostel2, hostel3, hostel4]


const personas = [];

//  DOM //////////////////////////////////////

//plantilla con propiedades de cada hostel
const divHostels = document.getElementById('hostels')

hostels.forEach(hostel => {
    divHostels.innerHTML += `
        <div class="card arrays" id="hostel${hostel.id}" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${hostel.nombre}</h5>
                <p class="card-text">Ubicación: ${hostel.ubicacion}</p>
                <p class="card-text">Precio: $${hostel.precio}</p>
                <p class="card-text">Estrelllas: ${hostel.estrellas}</p>
                <p class="card-text">Habitaciones disponibles: ${hostel.habitacionDisponible}</p>
        </div>
        </div>
        `}
    )


//  EVENTOS //////////////////////////////////////

const idFormulario1 = document.getElementById ('formulario1')
idFormulario1.addEventListener ('submit', (e) => {
    e.preventDefault();
    const hostel = document.getElementById('hostel').value;
    const dias = document.getElementById('dias').value;
    const cantidadPersonas = document.getElementById('cantidadPersonas').value;


const resultado = document.getElementById('infoUsuarios');

const mostrarInfo = (persona) => {
    let aux = '';
    aux += `<p class="resultado"> ${persona.nombre} el total de su reserva es de: </p>
            <p class="resultado"> $ ${resultado.calcularPrecio()} </p>`;
    resultado.innerHTML = aux;
}
})

const idFormulario2 = document.getElementById('Formulario2');

idFormulario2.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    const persona = new Persona (nombre, email);

    personas.push(persona);

    localStorage.setItem('Persona', JSON.stringify(personas));

    idFormulario2.reset();

    mostrarInfo(persona);
})

//localStorage. 

const botonAdmin = document.getElementById('admin');
const datosAdmin = document.getElementById('datosAdmin');

botonAdmin.addEventListener('click', () => {
    const personas = JSON.parse(localStorage.getItem('Persona'));
    let aux = '';
    personas.forEach(persona => {
        aux += `<p class="resultado"> Nombre: ${persona.nombre} </p>
                <p class="resultado"> Correo Electrónico: ${persona.email}</p><hr>`
    });
    datosAdmin.innerHTML = aux;
});





/////////////////// ESTO ES PARA QUE EL BUSCADOR FILTRE LOS NOMBRES DE LOS HOSTELS //////////////////////////////
// const inputBuscador = document.getElementById("inputBuscador")
// const boton= document.getElementById("button")


// document.addEventListener("keyup", e=>{

// if (e.target.matches("#inputBuscador")){  
// if (e.key ==="Escape")e.target.value = ""
// document.querySelectorAll(".hostels").forEach(palabra =>{
  
// palabra.textContent.toLowerCase().includes(e.target.value.toLowerCase())
// ?palabra.classList.remove("filtro")
// :palabra.classList.add("filtro")
// })
// }
// })

// //PARA QUE LAS BUSQUEDAS QUE HAGA EL USUARIO QUEDEN GUARDADAS, Y EN OCASIONES FUTURAS LE LLEGUEN OFERTAS QUE COINCIDAN CON SU BUSQUEDA

// inputBuscador.addEventListener("change", () => { console.log(inputBuscador.value) })
// boton.addEventListener("click", () =>{ console.log (inputBuscador.value)})