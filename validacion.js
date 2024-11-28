var nombre = document.getElementById('nombre');
var email = document.getElementById('email');
var alum = document.getElementById('alum');
var phone = document.getElementById('phone')
var error = document.getElementById('error');
error.style.color= 'red';

function enviarFormulario(){
    console.log("Enviar Formulario...");

    var mensajesError= [];

    if(nombre.value === ""){
        mensajesError.push("Ingresa tu nombre")
    }

    if(email.value === ""){
        mensajesError.push("Ingresa tu email")
    }

    if(alum.value === ""){
        mensajesError.push("Ingresa el nombre de alumno")
    }

    if(phone.value === ""){
        mensajesError.push("Ingresa tu telefono")
    }
    
    error.innerHTML =    mensajesError.join(',');

    return false;
}

