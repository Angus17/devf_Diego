const boton_inicio = document.getElementById("inicio")
const depositos = document.getElementById("deposito")
const retiros = document.getElementById("retiro")

let nip, i = 0, j = 0
let cliente_encontrado = false



let usuarios_existentes = 
[
    {
        nombre:"Diego Alejo",
        saldo:3000, 
        pin:7596
    },

    {
        nombre:"Gael Zamora", 
        saldo:500, 
        pin:1234
    },

    {
        nombre:"Sergio Martinez", 
        saldo:5000, 
        pin:6943
    }
    
]


function iniciar()
{
    window.location.href = "index_opciones.html"
}


function ingresar_nip(opcion)
{
    let input_valido = false
    
    console.log(opcion)
    
    do 
    {
        nip = Number(prompt("Favor de ingresar tu NIP de 4 digitos: "))
        
        if (/^\d{4}$/.test(nip) && nip !== 0) 
        
            input_valido = true
        
        else if(nip !== 0)
            {
                alert("La entrada necesita ser un numero de 4 digitos")
                
            }
    } while (!input_valido || nip !== 0);

    if (input_valido) 
    
        buscar_nip(nip, opcion)
        
    else
    {
        alert("Has cancelado la transaccion!")
        window.location.reload()
        
    }
}

function buscar_nip(nip_cliente, opcion_elegida)
{
    let indice_cliente_encontrado
    
    i = 0
    cliente_encontrado = false
    console.log(nip_cliente)
    
    while (!cliente_encontrado && i < 3) 
    {
        if (nip_cliente === usuarios_existentes[i].pin) 
        {
            cliente_encontrado = true
            indice_cliente_encontrado = i
            alert("Bienvenido " + usuarios_existentes[i].nombre + " :)")
        }
        
        i++
    }
    
    if (!cliente_encontrado) 
    {
        alert("Cliente no encontrado, ingrese de nuevo su NIP")
        ingresar_nip(opcion_elegida)        
    }
    else
    {
        
        window.location.href = "index_2.html"

        const op = document.getElementById("op")
        
        if (opcion_elegida) 
        {
            op.innerText = "Saldo actual: " + usuarios_existentes[indice_cliente_encontrado].saldo
            /* depositar(usuarios_existentes[indice_cliente_encontrado].saldo) */
        }
        else
        {
            if (usuarios_existentes[indice_cliente_encontrado].saldo === 0) 
            {
                alert("No puedes retirar fondos " + usuarios_existentes[indice_cliente_encontrado].nombre + ", te has quedado en $0")
                window.location.reload()
                ingresar_nip(opcion_elegida)
            }
            else
            {
                op.innerText = "Saldo actual para retirar: " + usuarios_existentes[indice_cliente_encontrado].saldo
                /* retirar(usuarios_existentes[indice_cliente_encontrado].saldo) */
            }
        }
    }
}


function depositar(saldo)
{
    
}

function retirar(saldo)
{
}

function seleccionar_monto(number)
{

}