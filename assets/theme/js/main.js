
// CODIGO FUENTE VALIDACIÓN DE FORMULARIO DE SUSCRIPCIÓN

let btn;

window.onload = ()=>{

    btn = document.getElementById("btn_suscripcion");

    btn.addEventListener("click", enviar);

    function enviar(event){
  
        frm = document.getElementById("formulario");
        
          if(frm.checkValidity()){
            
            let nombre = document.getElementById("name-form02-0");
            
            nombre.value = "";

            let mail = document.getElementById("email-form02-0");
            
            mail.value = "";


            let phone = document.getElementById("phone-form02-0");
            
            phone.value = "";

            alert("¡Gracias por suscribirte! Pronto comenzarás cada mes a disfrutar de nuestro boletin 3A Global!");

            location.href = "https://www.upb.edu.co";
            
            event.preventDefault(); 
            
          } else{

            alert("Error!\n Diligencie correctamente y por completo!\n El formulario debe dilicenciarse correctamente y por completo.\n El campo nombre solo admite letras.\n El campo Email debe contener la letra arroba y un dominio válido.\n El campo teléfono solo admite números.\n El formulario NO admite carecteres especiales salvo el _\n Ánimo, inténtalo de nuevo!"); 

          }

    }

}

// CODIGO FUENTE APLICACIÓN LOCALSTORAGE CON JAVASCRIPT 

// Fuente: Tomado de ejercicio del Profesor Andres Bedoya. 
// Link: https://codepen.io/xaca/pen/QWxrdPE

/* Comentarios 

Ejercicio:

- Crear dos formularios, login y registro. Agregar campos de correo, contraseña, nombre, apellido, celular y dirección. 

- Agregar un enlace de no estoy registrado

- Cambiar entre formularios, agregar navegación

- Guardar la información del usuario y luego registrarlo

Validación

*/

let frm_login, frm_registro, home;
let btn_ir_a_registro,btn_enviar_registrar, btn_enviar;
let correo;
let img_perfil = "https://icons.iconarchive.com/icons/jonathan-rey/star-wars-vehicles/48/Death-Star-2nd-icon.png";

window.onload = function(){
  frm_login = document.getElementById("frm_login");
  btn_enviar = document.getElementById("btn_enviar");
  btn_enviar_registrar = document.getElementById("btn_enviar_registrar");
  frm_registro = document.getElementById("frm_registro");
  home = document.getElementById("home");
  btn_ir_a_registro = document.getElementById("btn_ir_a_registro");
  btn_ir_a_registro.addEventListener("click",irARegistro);
  //btn_enviar.addEventListener("click",validar);
  //btn_enviar_registrar.addEventListener("click",registrar);
  configurar_login();
  configurar_registro();
}

function configurar_login(){
    frm_login.addEventListener('submit', event => {
      event.preventDefault();
      event.stopPropagation();
      if (frm_login.checkValidity()) {
       compararClave();
      }
      frm_login.classList.add('was-validated')
    }, false);
}

function configurar_registro(){
  frm_registro.addEventListener('submit', event => {
      event.preventDefault();
      event.stopPropagation();
      if (frm_registro.checkValidity()) 
      {
         registrar();
      }
      frm_registro.classList.add('was-validated');
    }, false);
}

function irARegistro(event){
  frm_login.reset();
  cambiarFormulario();
}

function cambiarFormulario(){

  frm_login.classList.toggle("ocultar");
  frm_registro.classList.toggle("ocultar");

}

function compararClave(){

  let correo = document.getElementById("correo");
  let clave = document.getElementById("clave");
  event.preventDefault();
  let usuario = JSON.parse(localStorage.getItem("usuario"));
  let html;

  if(correo.value === usuario.correo && clave.value === usuario.clave){

    frm_login.classList.remove('was-validated');
    frm_login.reset();

    frm_login.classList.add("ocultar");
    home.classList.remove("ocultar");
   
    alert("Login Exitoso - Bienvenido a la comunidad de 3A Global! - Será redireccionado al sitio Web de UPB" );
    location.href = "https://www.upb.edu.co/es/home";

    html = `
    <nav>
      <img src="${img_perfil}" />
      <a href="javascript:void(0);" id="btn_cerrar_sesion" onclick="cerrarSesion();">Cerrar sesion</a>
    </nav>
    <h2>Pagina principal </h2> 
    <br>Hola ${usuario.nombre}
   `;
  home.innerHTML = html;
}
else{
  alert("Datos incorrectos - Recuerde que se requiere estar registrado para poder ingresar. Si no está registrado, registrese primero!");
}

}

function cerrarSesion(event){
  frm_login.classList.remove("ocultar");
  home.classList.add("ocultar");
}

function registrar(){
 
  let nombre = document.getElementById("nombre");
  let apellido = document.getElementById("apellido");
  let celular = document.getElementById("celular");
  let direccion = document.getElementById("direccion");
  let correo = document.getElementById("correo1");
  let clave = document.getElementById("clave1");
  let usuario = {
    nombre:nombre.value,
    apellido:apellido.value,
    celular:celular.value,
    direccion:direccion.value,
    correo:correo.value,
    clave:clave.value
  };
  
  localStorage.setItem("usuario",JSON.stringify(usuario));
  alert("¡Muy bien, registro exitoso!")
  cambiarFormulario();
}

//FIN CODIGO JS X ALMACENAMIENTO DE REGISTRO Y LOGIN



// CODIGO PARA VERIFICAR A FUTURO PORQUE NO FUNCIONÓ

//FUENTE APLICACIÓN LOCALSTORAGE CON JAVASCRIPT 

//let txt_user, txt_clave, btn_registrar, btn_login;

//window.onload = ()=>{
  
 //txt_user = document.getElementById("input_usuario");

  //txt_clave = document.getElementById("input_clave");
  

  //btn_registrar = document.getElementById("btn_registro");

 // btn_registrar.addEventListener("click", registrar);
  
  
  //btn_login = document.getElementById("btn_login");

  //btn_login.addEventListener("click", autenticacion);
  

 // function registrar(event){

      //localStorage.setItem("input_usuario", txt_user.value);

      //localStorage.setItem("input_clave", txt_clave.value);

        //alert("Registro exitoso! Gracias por Registrarse en la comunidad de 3A Global!")
    
        //txt_user.value = "";

        //txt_clave.value = "";
    
    //event.preventDefault();

       //}
  
      
  //function autenticacion (event){
    
    //let usr = txt_user.value;
    
    //let pws = txt_clave.value;
    
    //let ls_usuario = localStorage.getItem("input_usuario");
    
    //let ls_clave = localStorage.getItem("input_clave");
        
    //if(usr.value === ls_usuario && psw.value === ls_clave){
      // .value en usr o en ls_usuario
      //alert("Ingreso autorizado! Sea bienvenido a la comunidad de 3A Global!");
      
        //txt_user.value = "";

        //txt_clave.value = "";
      
        //location.href = "https://www.upb.edu.co";
      
    //}else{
      
      //alert("Por favor, verifique sus credenciales de acceso y vuelva a intentar");
      
        //txt_user.value = "";

        //txt_clave.value = "";
      
    //}
    
    //event.preventDefault();
   
  //}
  
//}  
  




// Comentarios

//El codigo de CRUD - Registro y Login de la Membresia - implmentado en JAVASCRIPT no logró ponerse operativo. Solo funcionó el codigo de validación del formulario de Newsletter

// alert("Prueba de Validación!"); return;
