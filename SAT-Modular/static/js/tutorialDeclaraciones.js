var contador = 0

// Actualizar textos de tutorial
async function actualizarTexto(pos){
    document.getElementById("tutorialText").innerHTML = tutorial_text_declaraciones[pos]
}

// Regresar al paso anterior
async function anterior()
{
    contador = contador - 2
    siguiente();
}

// Continuar al paso siguiente
async function siguiente(){
    contador = contador + 1
    console.log(contador)
    document.getElementById("tuto-window").innerHTML = HTML_text_declaraciones[contador]
}

// MOSTRAR INPUT
async function mostrarinput(id){

    inputActual = document.getElementById(id)
    inputActual.style.display="inline-block"
}
// OCULTAR INPUT
async function ocultarinput(id){

    inputActual = document.getElementById(id)
    inputActual.style.display="none"
}

// Cambiar imagen
async function imagen(id, nuv){
    img = document.getElementById(id)
    img.src = nuv
}

// Mostrar Imagen
async function mostrarimagen(id){

    inputActual = document.getElementById(id)
    inputActual.style.display="block"
}

// Mostrar Boton Final
async function mostrarboton(id){

    inputActual = document.getElementById(id)
    inputActual.style.display="flex"
}

// Cambiar bottom
async function cambiarbottom(id, px){

    var inputActual = document.getElementById(id);
    inputActual.style.bottom = px;
    inputActual.style.textAlign = "right"
    inputActual.style.paddingRight= "5px"
}


// Login
async function login(id){
    inputActual = document.getElementById(id)

    if (id == "RFC_login" && inputActual.value == "ABCD123456XXX"){
        inputActual.setAttribute("readonly", " ")
        document.getElementById("tutorialText").innerHTML = "Perfecto, continua con la contraseña"
        mostrarinput('contrasena_login')
    }
    else if (id == "contrasena_login" && inputActual.value == "sat-sim"){
        inputActual.setAttribute("readonly", " ")
        document.getElementById("tutorialText").innerHTML = "Muy bien, por último ingresa el captcha"
        mostrarinput('captcha_login')
    }
    else if (id == "captcha_login" && inputActual.value == "2XRJ4Z"){
        inputActual.setAttribute("readonly", " ")
        document.getElementById("tutorialText").innerHTML = "Con esto se completan los datos de inicio, haz click en enviar"
        mostrarinput('enviar_login')
    }
    else{
        document.getElementById("tutorialText").innerHTML = "Parece que cometiste un error, lo bueno es que estas aprendiendo ingresalo nuevamente"
    }
}

// Validar valores
async function Validar_numero(id,siguiente,idimg,img){
    inputActual = document.getElementById(id)
    //console.log(siguiente)

    if (inputActual.value == "0" && (id == "dec_devo_bonif_por_copropiedad" || id == "importe_disminuir" || id == "importe_adicional2" || id == "isr_retenido_valor" || id == "IVA_acreditable_2")){

        inputActual.setAttribute("readonly", " ")
        document.getElementById("tutorialText").innerHTML = "Perfecto, presiona cerrar para ir al siguiente apartado"
        imagen(idimg, img)
        mostrarinput(siguiente)
    }
    else if (inputActual.value == "2597" && id == "total_ingresos2" ){

        inputActual.setAttribute("readonly", " ")
        document.getElementById("tutorialText").innerHTML = "Perfecto, presiona guardar para ir al siguiente apartado"
        imagen(idimg, img)
        mostrarinput(siguiente)
    }
    else if (inputActual.value == "207" && id == "IVA_acreditable"){
        inputActual.setAttribute("readonly", " ")
        document.getElementById("tutorialText").innerHTML = "Perfecto, ahora continua con el IVA acreditable por activades mixtas"
        imagen(idimg, img)
        mostrarinput(siguiente)
    }
    else{
        document.getElementById("tutorialText").innerHTML = "Parece que cometiste un error, lo bueno es que estas aprendiendo ingresalo nuevamente"
    }
}

// Funciones para el desarrollo
async function mover()
{
    posicion = document.getElementById("paso").value
    contador = parseInt(posicion)
    document.getElementById("tuto-window").innerHTML = HTML_text_declaraciones[posicion];
}

async function mostrar()
{
    posicion = document.getElementById("paso").value
    document.getElementById("tutorialText").innerHTML = tutorial_text_declaraciones[posicion];
}
