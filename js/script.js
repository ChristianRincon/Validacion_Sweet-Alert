const btn = document.getElementById("boton");

btn.addEventListener ( 'click' , () => {
    const usuario = document.getElementById("usuario").value;
    const clave = document.getElementById("contrasena").value;

    if(usuario == "" || clave == ""){
        swal('Campo Vacío', 'Complete todos los campos', 'error'); 
    }

    else if(usuario == "admin" && clave == "admin"){
        swal('Éxito', 'Usuario validado', 'success');
    }else{
        swal('Datos incorrectos', 'Intente nuevamente', 'error');
    }
}); 
    
// Aquí se han utilizado datos estáticos para simplificar el ejemplo, pero podrías adaptar el proyecto para validar los campos con tu base de datos empleando los métodos correspondientes.

// Puedes obtener más información sobre 'Sweet Alert' en: https://sweetalert2.github.io/