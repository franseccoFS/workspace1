document.addEventListener("DOMContentLoaded", function() {

    
    let login = document.getElementById("loginbutton");

//función que guarda al localstorage tu mail

    login.addEventListener("click", function() {

        let email = document.getElementById("mailuser").value;
        let password = document.getElementById("passworduser").value;

        if (email && password){
            localStorage.setItem("email", email);
            window.location.href = 'index.html';
        }else{
            alert("Por favor ingrese un correo y/o contraseña correcto(s)")
        }
        
        
    })

})