let name_, age

name_ = prompt("Escribe tu nombre")
age = Number(prompt("Introduce ahora tu edad"))

if (age >= 18) 
    {
        if (name_ == "Carlos" || name_ == "Mario") 
            {
                console.log(name_,"puede ingresar a la zona VIP")
            }
        else 
            {
                console.log(name_,"puede ingresar a la discoteca")
            }
    } 
    else
        {
            console.log(name_,"no puede ingresar a la discoteca")
        }

        /* .ToLowerCase  .ToUpperCase

let foo = 1, output = "Salida: "
switch (foo) 
    {
        case 10:
            output += " y"
            
        case 1:
            output += " cual"
            output += " es"
        case 2:
            output += " tu"
        case 3:
            output += " nombre"
            
        case 4:
            output += " ?"
            break;

        default:
            break;
    }

console.log(output)*/
