let form = document.getElementById("form");


form.addEventListener("submit", function(e){

    if (form.nombre.value == 0){
        console.log("debes escribir un nombre");
        let errorNom = document.getElementById("error_nom");
        errorNom.innerHTML = "Debe escribir un nombre";
        form.nombre.focus();
        form.nombre.style.border = "1px solid red";
        form.nombre.style.boxShadow = "0 0 10px red";
        e.preventDefault();
    }else{
        let errorNom = document.getElementById("error_nom");
        errorNom.innerHTML = "";
        form.nombre.style.border = "";
        form.nombre.style.boxShadow = "";
    }
    if (form.apellido.value == 0){
        console.log("debes escribir un apellido");
        let errorApell = document.getElementById("error_apell");
        errorApell.innerHTML = "Debe escribir un apellido";
        form.apellido.focus();
        form.apellido.style.border = "1px solid red";
        form.apellido.style.boxShadow = "0 0 10px red";
        e.preventDefault();
    }else{
        let errorApell = document.getElementById("error_apell");
        errorApell.innerHTML = "";
        form.apellido.style.border = "";
        form.apellido.style.boxShadow = "";
    }

    if(form.telefono.value == 0){
        console.log("debes escribir un telefono");
        let errorTel = document.getElementById("error_tel");
        errorTel.innerHTML = "Debe escribir un telefono";
        form.telefono.focus()
        form.telefono.style.border = "1px solid red";
        form.telefono.style.boxShadow = "0 0 10px red";
        e.preventDefault()
    }else{
        let errorTel = document.getElementById("error_tel")
        errorTel.innerHTML = ""
        form.telefono.style.border = ""
        form.telefono.style.boxShadow = ""
    }
    if (form.email.value == ""){
        console.log("debes escribir un email")
        let errorEmail = document.getElementById("error_email")
        errorEmail.innerHTML = "Debe escribir un correo"
        form.email.focus();
        form.email.style.border = "1px solid red";
        form.email.style.boxShadow = "0 0 10px red"
        e.preventDefault();
        }else{
            let errorEmail = document.getElementById("error_email")
            errorEmail.innerHTML = ""
            form.email.style.border = ""
            form.email.style.boxShadow = ""
    
        }
        if (form.nombre.value != 0 && form.apellido.value != 0 &&
            form.telefono.value != 0 && form.email.value != 0){
               alert("Formulario Enviado")
            }
       
    }

   
)    


    
    

    


    

