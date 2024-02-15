const boton_inicio = document.getElementById("inicio")

let usuarios_existentes = 
[
    {nombre:"Diego", saldo:3000},
    {nombre:"Gael", saldo:500},
    {nombre:"Sergio", saldo:5000}
]


function iniciar(carga)
{
    carga.preventDefault()
    window.location.href = "index_2.html"
    seleccionar_opciones()
}
boton_inicio.addEventListener('click',iniciar)

function seleccionar_opciones(opcion_elegida)
{

}

function depositar()
{
    
}

function retirar()
{

}
