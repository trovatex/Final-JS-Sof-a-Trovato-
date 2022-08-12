// OBJETOS ///////////////////////////////////////
class Hostel {
    constructor(id, nombre, ubicacion, precio, estrellas, habitacionDisponible, cantidadPersonas) {
        this.id = id
        this.nombre = nombre
        this.ubicacion = ubicacion
        this.precio = precio
        this.estrellas = estrellas
        this.habitacionDisponible = habitacionDisponible
        this.cantidadPersonas = cantidadPersonas
    }
}
class Persona {
    constructor(nombre, email) {
        this.nombre = nombre
        this.email = email
    }
}


// ARRAYS ///////////////////////////////////////

const hostel1 = new Hostel(1, "Buzios", "Brasil", 50, 7.9, ["con vista al mar ", "terraza ", "baño compartido"])
const hostel2 = new Hostel(2, "San José", "Costa Rica", 60, 8, ["con vista al mar ", "balcon ", "cocina individual"])
const hostel3 = new Hostel(3, "Cinque Terre", "Italia", 70, 8.2, ["con vista al mar ", "terraza ", "desayuno incluido"])
const hostel4 = new Hostel(4, "Medellín", "Colombia", 80, 8.6, ["con vista al mar ", "balcon ", "con jacuzzi"])
const hostel5 = new Hostel(5, "Miramar", "Argentina", 90, 9, ["con vista al mar ", "", ""])
const hostel6 = new Hostel(6, "Bariloche", "Argentina", 100, 9.2, ["con vista al mar ", "", ""])
const hostel7 = new Hostel(7, "Santa Cruz", "Estados Unidos", 150, 9.5, ["con vista al mar ", "", ""])
const hostel8 = new Hostel(8, "Málaga", "España", 200, 9.7, ["con vista al mar ", "", ""])
const hostel9 = new Hostel(9, "Lima", "Peru", 220, 9.8, ["con vista al mar ", "", ""])
const hostels = [hostel1, hostel2, hostel3, hostel4, hostel5, hostel6, hostel7, hostel8, hostel9]


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
        `
})


//  EVENTOS //////////////////////////////////////

// Formularios //
const idFormulario1 = document.getElementById('Formulario1')
idFormulario1.addEventListener('submit', (e) => {
    e.preventDefault();

    const select = document.getElementById('hostel');
    const value = select.options[select.selectedIndex].value;
    console.log(value);
    const dias = document.getElementById('dias').value;
    const cantidadPersonas = document.getElementById('cantidadPersonas').value;
    const precio = (dias * value) * cantidadPersonas
    localStorage.setItem('Precio', JSON.stringify(precio));
    console.log('El precio elegido es de: ' + precio)
    document.getElementById('information').innerHTML = "El precio elegido es de: " + precio;
    idFormulario1.reset();
    
})

const idFormulario2 = document.getElementById('Formulario2');

idFormulario2.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    const persona = new Persona(nombre, email);

    personas.push(persona);
    console.log(persona)
    console.log(personas)
    document.getElementById('informationPersona').innerHTML;

    localStorage.setItem('Persona', JSON.stringify(personas));

    idFormulario2.reset();


    // function mostrarInfo(persona){
    //     console.log(persona)
    // };

    // mostrarInfo();
})

// Admin //
const botonAdmin = document.getElementById('admin');
const datosAdmin = document.getElementById('datosAdmin');
botonAdmin.addEventListener('click', () => {
    const personas = JSON.parse(localStorage.getItem('Persona'));
    console.log(personas)
    let aux = '';

    personas.forEach( persona => { 
        aux += `<p class="resultado"> Nombre: ${persona.nombre} </p>
                <p class="resultado"> Correo Electrónico: ${persona.email}</p><hr>`
    });

    datosAdmin.innerHTML = aux;
});


const button = document.getElementById("button")
button.addEventListener ('click', () => {
    Toastify({
        text: "Hostel no encontrado",
        duration: 3000,
        //destination: "https://github.com/apvarun/toastify-js",
        //newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
})



// // Filtrar nombre de hostels //
// const formulario = document.querySelector("#formulario")
// const boton = document.querySelector("#button")
// const filtrar = () => {
//     console.log(formulario.value)
// }

// button.addEventListener('click', filtrar)

