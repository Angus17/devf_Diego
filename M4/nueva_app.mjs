import picocolors from "picocolors";
import inquirer from "inquirer";

// Crear funcion asincrona

async function main() {

    const { name } = await inquirer.prompt({
        type : "input",
        name : "name",
        message : "Dime tu nombre: "
    })
    
    const { age } = await inquirer.prompt({
        type : "input",
        name : "age",
        message : "Que edad tienes: "
    })

    console.log( picocolors.blue(`Holaa ${name}`) )

    if (age >= 18) {

        console.log( picocolors.green( "Como eres mayor de edad, puedes entrar :) " ) )

    } else {

        console.log( picocolors.red( "Como eres menor de edad, no puedes entrar :( " ) )

    }
}

main()
