/* const incremento = document.getElementById("incremento")
const decremento = document.getElementById("decremento") */
/* const numero = document.getElementById("numero") */

/* let i = 0

function incrementar() 
{
    if (i < 20) 
    {
        i++
        numero.innerText = i
    } 
    else 
    
        alert("Has llegado al limite de incremento")
    
}

function decrementar() 
{
    if (i > 0) 
    {
        i--
        numero.innerText = i
    } 
    else 
    
        alert("Has llegado al limite de decremento")
    
} */

// Capturar elementos de un formulario y validar usuario

const formulario = document.getElementById("inicio_sesion")
const username = document.getElementById("inputUser")
const userpass = document.getElementById("inputPass")

let users = [
    {
        user: 'Jose',
        pass: '1234'
    },
    {
        user: 'Diego',
        pass: '3456'
    }
]

function validate(par) 
{
    par.preventDefault()
    //Generar for para recorrer e imprimir los elementos del array
    /* for (let i = 0; i < users.length; i++) 
    
        console.log(users[i])
     */
    for (let i = 0; i < users.length; i++) 
    {
        console.log(users[i].user)
        console.log(users[i].pass)

        if (username.value == users[i].user && userpass.value == users[i].pass) 
        
            console.log("Bienvenido", + users[i].user + " a tu cuenta")
            
    }


}

formulario.addEventListener('click',validate)