var contador = 0;

// HTML captura del tutorial
// Posición 0
var SAT_inicio0 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/1.png" alt="image">
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
    <img class="capturaCorta" src="/static/images/CFDI/SAT-inicio2.png" alt="image">
    <img class="captura" src="/static/images/CFDI/SAT-inicio2-0.png" alt="image">
    <input type="button" onclick="siguiente(), actualizarTexto(3)" value="Servicios de facturación">
</div>
<input type="button" onclick="anterior(), actualizarTexto(1)" value="Atras">
`;

// Posición 3
var SAT_inicio3 = `
<div class="tuto-window">
    <img class="capturaCorta" src="/static/images/CFDI/SAT-inicio2.png" alt="image">
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
        <form>
            <input type="text" placeholder="RFC" required onclick="actualizarTexto(6)" id="RFC" onkeyup="this.value = this.value.toUpperCase();">
            <input type="password" placeholder="Contraseña" required onclick="actualizarTexto(7)" id="contrasena">
            <input type="text" placeholder="Escribe la palabra del captcha" required onclick="actualizarTexto(8)" id="captcha">
            <!-- <input type="button" onclick="val_login()" value="Enviar"> -->
            <input type="button" onclick="siguiente(), actualizarTexto(10)" value="Enviar">
        </form>
    </div>    
</div>
<input type="button" onclick="anterior(), actualizarTexto(4)" value="Atras">
`;

// Posición 6
var config_pt1 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Config-1.png" alt="image">
    <input type="button" onclick="siguiente(), actualizarTexto(11)" value="engrane">
</div>
<input type="button" onclick="anterior(), actualizarTexto(5)" value="Atras">
`;

// Posición 7
var config_pt2 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Config-2.png" alt="image">
    <input type="button" onclick="siguiente(), actualizarTexto(12)" value="Configuración de datos del emisor">
</div>
<input type="button" onclick="anterior(), actualizarTexto(10)" value="Atras">
`;

// Posición 8
var config_datos_emisor = `
<div class="tuto-window">
    <img class="capturaCorta" src="/static/images/CFDI/Datos-emisor-pt1.png" alt="image">
    <img class="captura" src="/static/images/CFDI/Datos-emisor-pt2.png" alt="image">
    <input type="text" onclick="actualizarTexto(6)" id="RFC" onkeyup="this.value = this.value.toUpperCase();">
    <input type="text" onclick="actualizarTexto(13)" id="nombre">
    <input type="text" onclick="actualizarTexto(14)">
    <input type="button" onclick="siguiente(), actualizarTexto()" value="Guardar">
</div>
<input type="button" onclick="anterior(), actualizarTexto(11)" value="Atras">
`;

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
Aquí se realiza el inicio de sesión, como se entraste desde "Mis cuentas" no se requiere al e.firma
`;

// Posición 6
var RFC_login = `
El RFC en una clave tu única alfanumérica compuesta de 13 letras y números, para este ejemplo ingresa: ABCD123456XXX
`;

// Posición 7
var contrasena_login = `
Para este ejemplo la contraseña sera sat-sim, recuerda que tus contraseñas deben de ser fuertes y seguras
`;

// Posición 8
var captcha_login = `
El captcha es un método de seguridad de la plataforma, debes de ingresar las letras/números de la imágen superior "RP6VTL", por último da click en "Enviar"
`;

// Posición 9
var datos_incorrectos = `
Los datos ingresados no son correctos, intentalo nuevamente
`;

// Posición 10
var engrane_opciones =`
Ahora haz click en el engrane de configuración de la parte superior derecha
`;

// Posición 11
var opcion_datos_emisor = `
Muy bien, ahora comenzaras realizando las configuraciones necesarias para la facturación, haz click en "Configuración de datos del emisor"
`;

// Posición 12
var registro_emisor = `
Llegaste hasta la configuración de datos del emisor, lo más importante de este apartado es el Registro Emisor
`;

// Posición 13
var nombre_razon_social = `
En este apartado debes de agregar tu nombre, denominación o razón social inscrito a tu RFC
`;

// Posición 14
var nombre_comercial = `
Si así lo deseas y cuentas con un nombre comercial puedes agregarlo aquí y también el logotipo, pero para este tutorial no será necesario. Ya con los datos anteriores ingresados recuerda hacer click en guardar
`;

var HTML_text = [SAT_inicio0, SAT_inicio1, SAT_inicio2, SAT_inicio3, SAT_inicio4, Login1, config_pt1, config_pt2, config_datos_emisor]

var tutorial_text = [boton_factura_electronica, boton_servicio_facturacion, boton_servicios_facturacion, boton_facturacion_cuentas, boton_ejecutar_linea,login,
                    RFC_login, contrasena_login, captcha_login, datos_incorrectos,
                    engrane_opciones, opcion_datos_emisor, registro_emisor, nombre_razon_social, nombre_comercial]


// Actualizar textos de tutorial
async function actualizarTexto(pos){
    document.getElementById("tutorialText").innerHTML = tutorial_text[pos];
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
    document.getElementById("tuto-window").innerHTML = HTML_text[contador];
}

// Validación de inicio de sesión
async function val_login(){
    RFC = document.getElementById("RFC").value
    contrasena = document.getElementById("contrasena").value
    captcha = document.getElementById("captcha").value

    if (RFC == "ABCD123456XXX" && contrasena == "sat-sim" && captcha == "RP6VTL")
    {
        siguiente()
        actualizarTexto(10)
    }

    else
    {
        actualizarTexto(9)
    }
}

// Funciones para el desarrollo
async function mover()
{
    posicion = document.getElementById("paso").value
    contador = parseInt(posicion)
    document.getElementById("tuto-window").innerHTML = HTML_text[posicion];
}

async function mostrar()
{
    posicion = document.getElementById("paso").value
    document.getElementById("tutorialText").innerHTML = tutorial_text[posicion];
}
