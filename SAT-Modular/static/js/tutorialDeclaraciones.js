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
    inputActual.style.display="inline-block";
}
// OCULTAR INPUT
async function ocultarinput(id){

    inputActual = document.getElementById(id)
    inputActual.style.display="none";
}

// Cambiar imagen
async function imagen(id, nuv){
    img = document.getElementById(id);
    img.src = nuv;
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
