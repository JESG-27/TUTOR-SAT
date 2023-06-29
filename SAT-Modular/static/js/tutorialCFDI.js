var contador = 0;

// HTML captura del tutorial
// Posición 0
var SAT_inicio0 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/SAT-inicio0.png" alt="image">
    <input type="button" onclick="siguiente(), actualizarTexto(1)" value="Factura electrónica">
</div>
`;

// Posición 1
var SAT_inicio1 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/SAT-inicio1.png" alt="image">
    <input type="button" onclick="siguiente(), actualizarTexto(2)" value="Servicio de facturación CFDI versión 4.0">
</div>
<input type="button" onclick="anterior(), actualizarTexto(0)" value="Atras">
`;

// Posición 2
var SAT_inicio2 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/SAT-inicio2.png" alt="image">
    <input type="button" onclick="siguiente(), actualizarTexto(3)" value="Servicios de facturación">
</div>
<input type="button" onclick="anterior(), actualizarTexto(1)" value="Atras">
`;

// Posición 3
var SAT_inicio3 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/SAT-inicio3.png" alt="image">
    <input type="button" onclick="siguiente(), actualizarTexto(4)" value="Servicio de facturación Mis Cuentas versión 4.0 (vigente a partir del 1 de enero de 2022">
</div>
<input type="button" onclick="anterior(), actualizarTexto(2)" value="Atras">
`;

// Posición 4
var SAT_inicio4 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/SAT-inicio4.png" alt="image">
    <input type="button" onclick="siguiente(), actualizarTexto(5)" value="EJECTUAR EN LINEA">
</div>
<input type="button" onclick="anterior(), actualizarTexto(3)" value="Atras">
`;

// Posición 5
var Login1 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Login-pt1.png" alt="image">
    <img class="captura" src="/static/images/CFDI/Login-pt2.png" alt="image">
    
    <div class="sesion">
        <form action="#" method="post">
            <input type="text" placeholder="RFC" required/>
            <input type="password" placeholder="Contraseña" required/>
            <input type="text" placeholder="Escribe la palabra del captcha" required/>
            <button type="submit">Enviar</button>
        </form>

    </div>    
</div>
<input type="button" onclick="anterior(), actualizarTexto(4)" value="Atras">
`;

//<input type="button" onclick="siguiente(), actualizarTexto()" value="EJECTUAR EN LINEA">

// Textos de guía
// Posición 0
var boton_factura_electronica = `
Desde la página de inicio del portal SAT haz click en el apartado de "Factura electrónica"
`;

// Posición 1
var boton_servicio_facturacion = `
En la ventana emergente haz click en el apartado de "Servicio de facturación CFDI versión 4.0"
`;

// Posición 2
var boton_servicios_facturacion = `
Una vez dentro ubica y haz click en "Servicios de facturación" donde se desplegaran más opciones
`;

// Posición 3
var boton_facturacion_cuentas = `
Una vez dentro ubica y haz click en "Servicio de facturación Mis Cuentas versión 4.0 (vigente a partir del 1 de enero de 2022", al ingresar en la sección de Mis cuentas no necesitarás la e.firma
`;

// Posición 4
var boton_ejecutar_linea = `
Puedes ver información referente a la facturación, para comenzar haz click en "EJECUTAR EN LINEA"
`;

// Posición 5
var login = `
Aquí se realiza el inicio de sesión, como se entra desde Mis cuentas no se requiere al e.firma
`;

// Posición 6
var RFC_login = `
El RFC en una clave tu única alfanumérica compuesta de 13 letras y números, para este ejemplo ingresa: XXXXXXXXXXXXX
`;

// Posición 7
var contrasena_login = `
Para este ejemplo la contraseña sera sat-sim, recuerda que tus contraseñas deben de ser fuertes y seguras
`;

// Posición 8
var captcha_login = `
El captcha es un método de seguridad de la plataforma, debes de ingresar las letras/números de la imágen superior, por último da click en "Enviar"
`;

var HTML_text = [SAT_inicio0, SAT_inicio1, SAT_inicio2, SAT_inicio3, SAT_inicio4,Login1]
var tutorial_text = [boton_factura_electronica, boton_servicio_facturacion, boton_servicios_facturacion, boton_facturacion_cuentas, boton_ejecutar_linea,login,
                    RFC_login, contrasena_login, captcha_login]

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