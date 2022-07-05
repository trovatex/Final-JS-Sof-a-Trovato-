        const precioHabitacion = 50
        const descuento = 0.15

        let nombre = (prompt("Bienvenido al Hostel TROVATEX! Ingrese su nombre para continuar.")).toLowerCase();
        let dias, personas

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


        cupon = parseInt(prompt("Tiene cupon de descuento?"))

        if (cupon == "si") {
            total = (( precioHabitacion - (precioHabitacion * descuento) ) * personas) * dias
            console.log(total)
        } else {
            total = (precioHabitacion * personas) * dias
            reserva = parseInt(prompt(`El total a pagar es de $ ${total} reales. Desea continuar con la reserva?`))
        } if (reserva == "si") {
            parseInt(prompt("Que buena noticia! Lo esperamos en el paraíso."))
        }







// const total = (precioHabitacion, personas) => precioHabitacion * personas
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


