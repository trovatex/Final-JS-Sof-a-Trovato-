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


// function sumar (parametro1, parametro2) {
//     return parametro1 + parametro2
// }
// let sumar = sumar (dias, personas)


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

const hostel1 = new Hostel ( "Trovatex Ferradurinha", "Brasil", 20, 7.5, [vistaAlMar, terraza, bañoCompartido])
const hostel2 = new Hostel ( "Trovatex Potrero", "Costa Rica", 30, 8, [vistaAlMar, balcon, cocinaIndividual])
const hostel3 = new Hostel ( "Trovatex Cinque Terre", "Italia", 50, 9.2, [vistaAlMar, terraza, desayunoIncluido])
const hostel4 = new Hostel ( "Trovatex Barcelona", "España", 100, 9.5, [vistaAlMar, balcon, conJacuzzi])

const hostels = [hostel1, hostel2, hostel3, hostel4]
console.log (hostels)   