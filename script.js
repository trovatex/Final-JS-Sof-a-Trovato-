        const precioHabitacion = 50
        const descuento = 0.15
        let dias, personas, reserva
        let nombre = (prompt("Bienvenido al Hostel TROVATEX! Ingrese su nombre para continuar."))

        do {
            dias = parseFloat(prompt(`Hola ${nombre}! Cuantos días te gustaría estar en el paraíso?`))
        if (isNaN(dias)) {
            alert("Por favor ingresa un número válido")
        }
        } while (isNaN(dias))
    
            
        do { 
            personas = parseFloat(prompt("Cuantas personas se van a hospedar en el hostel?"))
        if(isNaN(personas)) {
            alert("Por favor ingresa un número válido")
        }
        } while (isNaN(personas))

        //descuento
        cupon = (prompt("Tiene cupon de descuento?")).toLowerCase()

        
        //falta agregar una funcion en total
        if (cupon == "si") {
            total = (( precioHabitacion - (precioHabitacion * descuento) ) * personas) * dias
            reserva = (prompt(`El total a pagar es de $ ${total} reales. Desea continuar con la reserva?`)).toLowerCase()
        } else {
            total = (precioHabitacion * personas) * dias
            reserva = (prompt(`El total a pagar es de $ ${total} reales. Desea continuar con la reserva?`)).toLowerCase()
        } 

        if (reserva === "no") {
            prompt("Que lástima :( Lo esperamos algún otro día en el paraíso.")
        } else if  (reserva === "si"){
                alert("Nos vemos pronto!! :)")

        }


const multiplicar = (personas, dias) => personas * dias


// ARRAYS ///////////////////////////////////////

class Hostel {
    constructor (id, nombre, ubicacion, precio, estrellas, habitacionDisponible){
        this.id = id
        this.nombre = nombre
        this.ubicacion = ubicacion
        this.precio = precio
        this.estrellas = estrellas
        this.habitacionDisponible = habitacionDisponible

    }
}

//FUNCIONES
function buscarHostel (hostels) {
    let nombreHostel = prompt(`Ingrese el nombre del Hostel que está buscando. Las opciones disponibles son:
    Trovatex Ferradurinha
    Trovatex Potrero
    Trovatex Cinque Terre
    Trovatex Barcelona
    `)

    let hostelBuscado = hostels.find(hostels => hostels.nombre == nombreHostel)

    if (hostelBuscado == undefined) {
        alert (`Hostel no encontrado`)
    } else {
        alert (`El hostel está disponible`)
    }
}

function buscarPrecio (hostels) {
    let precioHostel = parseInt(prompt("Ingrese un precio"))
        //esto es lo único que no funciona, porque me dice que precio no esta definido y es el tercer parámetro del constructor
    let precioBuscado = hostels.filter(hostels => hostels.precio >= precio)

    if (precioBuscado.length == 0) {
        alert ("No hay hostels con dichas características")
    } else {
        console.log(precioBuscado)
    }
}

function ordenarHostels (hostels) {

    let metodoOrdenamiento = parseInt(prompt("Ingrese 1 para ordenar de menor a mayor, 2 para ordenar de mayor a menor"))

    if (metodoOrdenamiento === 1){

        console.log(hostels.sort((a,b) => a.precio - b.precio))
    } else if (metodoOrdenamiento === 2){

        console.log(hostels.sort((a,b) => b.precio - a.precio))
    }
}




const hostel1 = new Hostel (1, "Trovatex Ferradurinha", "Brasil", 90, 7.5, ["con vista al mar", "terraza", "baño compartido"])
const hostel2 = new Hostel (2, "Trovatex Potrero", "Costa Rica", 60, 8, ["con vista al mar", "balcon", "cocina individual"])
const hostel3 = new Hostel (3, "Trovatex Cinque Terre", "Italia", 150, 9.2, ["con vista al mar", "terraza", "desayuno incluido"])
const hostel4 = new Hostel (4, "Trovatex Barcelona", "España", 100, 9.5, ["con vista al mar", "balcon", "con jacuzzi"])

const hostels = [hostel1, hostel2, hostel3, hostel4]
console.log (hostels)   


let respuesta
//VALIDACIONES con un pequeño menú

do {
    respuesta = parseInt(prompt(`Ingrese número para:
        1- Buscar un hostel 
        2- Buscar hostel por precio
        3- Ordenar de menor a mayor puntuación 
    `))

} while (respuesta <1 || respuesta >3)

switch (respuesta) {
        case 1:
            buscarHostel(hostels)
            break
        case 2:
            buscarPrecio(hostels)
            break
        case 3: 
            ordenarHostels (hostels)
            break
        default:
            alert ("Opción no válida")
            break
}


//DOM
//plantilla con propiedades de cada hostel
const divHostels = document.getElementById('hostels')


hostels.forEach(hostel => {
    divHostels.innerHTML += `
        <div class="card hostels" id="hostel${hostel.id}" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Nombre: ${hostel.nombre}</h5>
                <p class="card-text">Ubicación: ${hostel.ubicacion}</p>
                <p class="card-text">Precio: $${hostel.precio}</p>
                <p class="card-text">Estrelllas: ${hostel.estrellas}</p>
                <p class="card-text">Habitaciones disponibles: ${hostel.habitacionDisponible}</p>
        </div>
        </div>
        `}
    )