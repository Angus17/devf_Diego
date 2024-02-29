class Mascota 
{
    name
    type
    age
    owner

    // this hace referencia al objeto creado a partir de la instancia
    constructor(nombre, tipo, edad, duenio)
    {
        this.name = nombre
        this.type = tipo
        this.age = edad
        this.owner = duenio
    }
}
// Palabras reservadas: class, new, constructor, 
const happy = 
{
    name: "Happy",
    type: "Gato",

    vocalizacion: function()
                {
                    return "Hola amo"
                }
}

const mascota_1 = new Mascota("Happy", "Gato", "2", "Yo")
console.log(mascota_1.name) 