const titulo = document.getElementById("titulo")
let i = 0

function ejecutar() 
{
    console.log("Ejecutando. . .")
    console.log(titulo)
    
    if (i == 0) 
    {
        titulo.innerText = "Hola DOM"
        titulo.style.color = 'blue'
        i = 1
    } 
    else
    {
        titulo.innerText = "Hola JavaScript"
        titulo.style.color = 'red'
        i = 0
    }
}

/* 
let user = {
    nombre: 'Diego',
    color: 'Red'
} */