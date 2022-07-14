        const precioHabitacion = 50
        const descuento = 0.15
        let dias, personas, reserva
        let nombre = (prompt("Bienvenido al Hostel TROVATEX! Ingrese su nombre para continuar.")).toLowerCase();

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
                prompt("Nos vemos pronto!! :)")

        }

//////////////////////////////////////////////////////////////////////////////////
//FUNCIONES AUN NO APLICADAS
// const total = (precioHabitacion, personas, dias) => (precioHabitacion * personas) * dias
// console.log(total)


// function precio (parametro1, parametro2) {
//  return parametro1, parametro2
// }
//  let multiplicar = multiplicar (dia * personas)
//     console.log (precio)

const multiplicar = (personas, dias) => personas * dias

// function sumar (parametro1, parametro2) {
//     return parametro1 + parametro2
// }
// let sumar = sumar (dias, personas)


//////////////////////////////////////                   HASTA ACA ESTA TODO BIEN, AHORA

//////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// ARRAYS ///////////////////////////////////////

class Hostel {
    constructor (nombre, ubicacion, precio, estrellas, habitacionDisponible){
        this.nombre = nombre
        this.ubicacion = ubicacion
        this.precio = precio
        this.estrellas = estrellas
        this.habitacionDisponible = habitacionDisponible

    }
}
//FUNCIONES
function buscarHostel (hostels) {
    let nombreHostel = prompt("Ingrese el nombre del Hostel que está buscando")

    let hostelBuscado = hostels.find(hostels => hostels.nombre == nombreHostel)

    if (hostelBuscado == undefined) {
        alert ("Hostel no encontrado")
    } else {
        alert (`El hostel ${hostelBuscado} está disponible`)
    }
}

function buscarPrecio (hostels) {
    let precioHostel = parseInt(prompt("Ingrese un precio"))

    let precioBuscado = hostels.filter(hostels => hostels.precio >= precio)

    if (precioBuscado.length == 0) {
        alert ("No hay hostels con dichas características")
    } else {
        alert (precioBuscado)
    }
}

function ordenarHostels (hostels) {

    let metodoOrdenamiento = parseInt(prompt("Ingrese 1 para ordenar de menor a mayor, 2 para ordenar de mayor a menor"))

    if (metodoOrdenamiento === 1){

        alert (hostels.sort((a,b) => a-b))
    } else if (metodoOrdenamiento === 2){

        alert (hostels.sort((a,b) => b-a))
    }
}




const hostel1 = new Hostel ( "Trovatex Ferradurinha", "Brasil", 20, 7.5, [vistaAlMar, terraza, bañoCompartido])
const hostel2 = new Hostel ( "Trovatex Potrero", "Costa Rica", 30, 8, [vistaAlMar, balcon, cocinaIndividual])
const hostel3 = new Hostel ( "Trovatex Cinque Terre", "Italia", 50, 9.2, [vistaAlMar, terraza, desayunoIncluido])
const hostel4 = new Hostel ( "Trovatex Barcelona", "España", 100, 9.5, [vistaAlMar, balcon, conJacuzzi])

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

} while (respuesta >=1 && respuesta <=3)

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