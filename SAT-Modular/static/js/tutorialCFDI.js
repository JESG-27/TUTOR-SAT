var contador = 0;

// HTML captura del tutorial
var SAT_inicio0 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/SAT-inicio0.png" alt="image">
    <input type="button" onclick="siguiente(), actualizarTexto(1)" value="Factura electrónica">
</div>
`;

var SAT_inicio1 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/SAT-inicio1.png" alt="image">
    <input type="button" onclick="siguiente(), actualizarTexto(2)" value="Servicio de facturación CFDI versión 4.0">
</div>
<input type="button" onclick="anterior(), actualizarTexto(0)" value="Atras">
<input type="button" onclick="actualizarTexto(4)" value="Distinto">
<input type="button" onclick="actualizarTexto(5)" value="Otro más">
`;

var SAT_inicio2 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/SAT-inicio2.png" alt="image">
    <input type="button" onclick="siguiente(), actualizarTexto(3)" value="Servicio de facturación Mis Cuentas versión 4.0 (vigente a partir del 1 de enero de 2022">
</div>
<input type="button" onclick="anterior(), actualizarTexto(1)" value="Atras">
`;

var SAT_inicio3 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/SAT-inicio3.png" alt="image">
    <input type="button" onclick="siguiente(), actualizarTexto()" value="EJECTUAR EN LINEA">
</div>
<input type="button" onclick="anterior(), actualizarTexto(2)" value="Atras">
`;


// Textos de guía
var boton_factura_electronica = `
Desde la página de inicio del portal SAT haz click en el apartado de "Factura electrónica"
`;

var boton_servicio_facturacion = `
En la ventana emergente haz click en el apartado de "Servicio de facturación CFDI versión 4.0"
`;

var boton_facturacion_cuentas = `
Una vez dentro ubica y haz click en "Servicio de facturación Mis Cuentas versión 4.0 (vigente a partir del 1 de enero de 2022", al ingresar en la sección de Mis cuentas no necesitarás la e.firma
`;

var boton_ejecutar_linea = `
Puedes ver información referente a la facturación, para comenzar haz click en "EJECUTAR EN LINEA"
`;

var otro = "Este es otro texto"
var otro_mas = "Este es otro texto distinto"

var HTML_text = [SAT_inicio0, SAT_inicio1, SAT_inicio2, SAT_inicio3]
var tutorial_text = [boton_factura_electronica, boton_servicio_facturacion, boton_facturacion_cuentas, boton_servicio_facturacion, otro, otro_mas]

async function actualizarTexto(pos){
    document.getElementById("tutorialText").innerHTML = tutorial_text[pos];
}

async function anterior()
{
    contador = contador - 2
    siguiente();
}

async function siguiente(){
    contador = contador + 1
    console.log(contador)
    document.getElementById("tuto-window").innerHTML = HTML_text[contador];
}