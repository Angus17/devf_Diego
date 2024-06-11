import {suma, resta, multiplicacion} from "./operaciones.js"
import carros from "./automoviles.js"
import os from "os"

console.log( suma(10, 70) )
console.log( resta(10, 70) )
console.log( multiplicacion(10, 70) )

carros.forEach( carro => {
    console.log("El carro que tenemos es un " + carro.marca + " " + carro.modelo)

})

console.log( os.totalmem() + " es el total de memoria" )
console.log( os.cpus().length, "procesadores" )
console.log( os.hostname(), "nombre de tu host" )