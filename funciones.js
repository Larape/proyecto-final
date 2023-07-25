function envio(){
    var email = document.getElementById("email").value;
    var num = document.getElementById("telefono").valueAsNumber;
    var nombre = document.getElementById("nombre").value;

    if (isNaN(num)){
        alert("en el campo: telefono debes poner tu numero, sin otros caracteres")
    } else if (nombre.trim() === '' || email.trim() === '') {
        alert('Por favor, completa todos los campos obligatorios.');
    }else{
           alert(" Tu mensaje ha sido enviado! La respuesta será enviada a "+ email)
    }
    
}
function borrar(){
    document.getElementById("nombre").value=" ";
    document.getElementById("email").value=" ";
    document.getElementById("telefono").value=" ";
    document.getElementById("mensaje").innerHTML=" ";
    document.getElementById("mensajito").value=" ";
    document.getElementById("pais").value=" ";
}
