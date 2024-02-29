class Personaje
{
    nombre
    energia_total

    constructor(nombre, energia_total)
    {
        this.name = nombre
        this.energy = energia_total
    }

    correr(distancia)
    {
        this.energy -= distancia
        return this.energy
    }

    descansar(tiempo)
    {
        this.energy += (tiempo * 2)
        return this.energy
    }
}

let energia = 10000, distancia = 1000, tiempo = 10
const mi_persona = new Personaje("Diego", energia)


console.log(mi_persona.correr(distancia))
console.log(mi_persona.descansar(tiempo))