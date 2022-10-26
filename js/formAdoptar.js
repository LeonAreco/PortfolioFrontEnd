let form= document.getElementById("formAdopcion");



form.addEventListener("submit", function(e){
    if(form.checkAdop.checked == false){
        let validaCheck = document.getElementById("valida_check");
        validaCheck.innerHTML = "Debes seleccionar alguno a adoptar"
        form.checkAdop.focus();
        e.preventDefault();
    }else{
        let validaCheck = document.getElementById("valida_check");
        validaCheck.innerHTML = "";
    }

   
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
            errorEmail.innerHTML = "";
            form.email.style.border = "";
            form.email.style.boxShadow = "";
    
        }

        if (form.textArea.value == 0){
            console.log("debes escribir un email")
            let errorText = document.getElementById("error_Text")
            errorText.innerHTML = "Debe escribir el motivo de la adopcion"
            form.textArea.focus();
            form.textArea.style.border = "1px solid red";
            form.textArea.style.boxShadow = "0 0 10px red"
            e.preventDefault();
            }else{
                let errorText = document.getElementById("error_Text")
                errorText.innerHTML = ""
                form.textArea.style.border = "";
                form.textArea.style.boxShadow = "";
    
        }
        
        if(form.terminos.checked == false){
            let validaTerminos = document.getElementById("terminos");
            validaTerminos.innerHTML = "Debes Aceptar los terminos y condiciones"
            form.terminos.focus();
            e.preventDefault();
        }else{
            let validaTerminos = document.getElementById("terminos");
            validaTerminos.innerHTML = "";
        }

    }

        
);
 
 
