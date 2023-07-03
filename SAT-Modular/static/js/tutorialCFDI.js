var contador = 0

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
    <img class="capturaCorta" src="/static/images/CFDI/SAT-inicio2.png" alt="image">
    <img class="captura" src="/static/images/CFDI/SAT-inicio2-0.png" alt="image">
    <input type="button" onclick="siguiente(), actualizarTexto(2)" value="Servicios de facturación">
</div>
<input type="button" onclick="anterior(), actualizarTexto(0)" value="Atras">
`;

// Posición 2
var SAT_inicio2 = `
<div class="tuto-window">
    <img class="capturaCorta" src="/static/images/CFDI/SAT-inicio2.png" alt="image">
    <img class="captura" src="/static/images/CFDI/SAT-inicio3.png" alt="image">
    <input type="button" onclick="siguiente(), actualizarTexto(3)" value="Servicio de facturación Mis Cuentas versión 4.0">
</div>
<input type="button" onclick="anterior(), actualizarTexto(1)" value="Atras">
`;

// Posición 3
var SAT_inicio3 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/SAT-inicio4.png" alt="image">
    <input type="button" onclick="siguiente(), actualizarTexto(4)" value="EJECTUAR EN LINEA">
</div>
<input type="button" onclick="anterior(), actualizarTexto(2)" value="Atras">
`;

// Posición 4
var Login1 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Login-pt1.png" alt="image">
    <img class="captura" src="/static/images/CFDI/Login-pt2.png" alt="image">
    
    <div class="sesion">
        <form>
            <input type="text" placeholder="RFC" required onclick="actualizarTexto(5)" id="RFC" onkeyup="this.value = this.value.toUpperCase();">
            <input type="password" placeholder="Contraseña" required onclick="actualizarTexto(6)" id="contrasena">
            <input type="text" placeholder="Escribe la palabra del captcha" required onclick="actualizarTexto(7)" id="captcha">
            <!-- <input type="button" onclick="val_login()" value="Enviar"> -->
            <input type="button" onclick="siguiente(), actualizarTexto(9)" value="Enviar">
        </form>
    </div>    
</div>
<input type="button" onclick="anterior(), actualizarTexto(3)" value="Atras">
`;

// Posición 5
var config_pt1 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Config-1.png" alt="image">
    <input type="button" onclick="siguiente(), actualizarTexto(10)" value="engrane">
</div>
<input type="button" onclick="anterior(), actualizarTexto(4)" value="Atras">
`;

// Posición 6
var config_pt2 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Config-2.png" alt="image">
    <input type="button" onclick="siguiente(), actualizarTexto(11)" value="Configuración de datos del emisor">
</div>
<input type="button" onclick="anterior(), actualizarTexto(9)" value="Atras">
`;

// Posición 7
var config_datos_emisor = `
<div class="tuto-window">
    <img class="capturaCorta" src="/static/images/CFDI/Datos-emisor-pt1.png" alt="image">
    <img class="captura" src="/static/images/CFDI/Datos-emisor-pt2.png" alt="image">
    <form id="congif_datos_emisor">
        <input type="text" onclick="actualizarTexto(5)" id="RFC" onkeyup="this.value = this.value.toUpperCase();">
        <input type="text" onclick="actualizarTexto(12)" id="nombre" onkeyup="this.value = this.value.toUpperCase();">
        <input type="text" onclick="actualizarTexto(13)">
        <input type="button" onclick="val_registro_emisor()" value="Guardar">
        <!-- <input type="button" onclick="siguiente(), actualizarTexto()" value="Guardar"> -->
    </form>
</div>
<input type="button" onclick="anterior(), actualizarTexto(10)" value="Atras">
`;

// Posición 8
var config_datos_emisor_engrane = `
<div class="tuto-window">
    <img class="capturaCorta" src="/static/images/CFDI/Datos-emisor-engrane.png" alt="image">
    <img class="captura" src="/static/images/CFDI/Datos-emisor-pt2.png" alt="image">
    <input type="button" onclick="siguiente(), actualizarTexto()" value="Básica">
    <form>
        <input type="text" id="RFC" onkeyup="this.value = this.value.toUpperCase();" value="ABCD123456XXX">
        <input type="text" id="nombre" onkeyup="this.value = this.value.toUpperCase();" value="NOMBRE LEGAL">
    </form>
</div>
<input type="button" onclick="anterior(), actualizarTexto(11)" value="Atras">
`;

// -------------------------------------------------------- Textos de guía --------------------------------------------------------
// Posición 0
var boton_factura_electronica = `
Desde la página de inicio del portal SAT haz click en el apartado de "Factura electrónica"
`;

// Posición 1
var boton_servicios_facturacion = `
Una vez dentro ubica y haz click en "Servicios de facturación" donde se desplegaran más opciones
`;

// Posición 2
var boton_facturacion_cuentas = `
Una vez dentro ubica y haz click en "Servicio de facturación Mis Cuentas versión 4.0", al ingresar en la sección de Mis cuentas no necesitarás la e.firma
`;

// Posición 3
var boton_ejecutar_linea = `
Puedes ver información referente a la facturación, para comenzar haz click en "EJECUTAR EN LINEA"
`;

// Posición 4
var login = `
Aquí se realiza el inicio de sesión, como entraste desde "Mis cuentas" no se requiere al e.firma
`;

// Posición 5
var RFC_login = `
El RFC en una clave tu única alfanumérica compuesta de 13 letras y números, para este ejemplo ingresa: ABCD123456XXX
`;

// Posición 6
var contrasena_login = `
Para este ejemplo la contraseña sera sat-sim, recuerda que tus contraseñas deben de ser fuertes y seguras
`;

// Posición 7
var captcha_login = `
El captcha es un método de seguridad de la plataforma, debes de ingresar las letras/números de la imágen superior "RP6VTL", por último da click en "Enviar"
`;

// Posición 8
var datos_incorrectos = `
Los datos ingresados no son correctos, intentalo nuevamente
`;

// Posición 9
var engrane_opciones =`
Ahora haz click en el engrane de configuración de la parte superior derecha
`;

// Posición 10
var opcion_datos_emisor = `
Muy bien, ahora comenzaras realizando las configuraciones necesarias para la facturación, haz click en "Configuración de datos del emisor"
`;

// Posición 11
var registro_emisor = `
Llegaste hasta la configuración de datos del emisor, lo más importante de este apartado es el Registro Emisor
`;

// Posición 12
var nombre_razon_social = `
En este apartado debes de agregar tu nombre, denominación o razón social inscrito a tu RFC, para este ejemplo agrega "NOMBRE LEGAL"
`;

// Posición 13
var nombre_comercial = `
Si así lo deseas y cuentas con un nombre comercial puedes agregarlo aquí y también el logotipo, pero para este tutorial no será necesario. Ya con los datos anteriores ingresados recuerda hacer click en guardar
`;

// Posición 14
var registro_emisor_guardado = `
Perfecto, ahora tus datos estan guardados, haz click nuevamente en el engrane de opciones
`;

// Posición 15
var opcion_basica = `
Elige la opción que lleva por nombre "Básica"
`;

var HTML_text = [SAT_inicio0, SAT_inicio1, SAT_inicio2, SAT_inicio3, Login1, config_pt1, config_pt2, config_datos_emisor, config_datos_emisor_engrane]

var tutorial_text = [boton_factura_electronica, boton_servicios_facturacion, boton_facturacion_cuentas, boton_ejecutar_linea, login,
                    RFC_login, contrasena_login, captcha_login, datos_incorrectos,
                    engrane_opciones, opcion_datos_emisor, registro_emisor, nombre_razon_social, nombre_comercial, registro_emisor_guardado, opcion_basica]


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
        actualizarTexto(9)
    }

    else
    {
        actualizarTexto(8)
        document.getElementById("RFC").value = ""
        document.getElementById("contrasena").value = ""
        document.getElementById("captcha").value = ""
    }
}

// Validación de registro de emisor
async function val_registro_emisor(){
    RFC = document.getElementById("RFC").value
    nombre = document.getElementById("nombre").value
    if (RFC == "ABCD123456XXX" && nombre == "NOMBRE LEGAL")
    {
        actualizarTexto(14)
        document.getElementById("tuto-window").innerHTML = `
        <div class="tuto-window">
            <img class="capturaCorta" src="/static/images/CFDI/Datos-emisor-pt1.png" alt="image">
            <img class="captura" src="/static/images/CFDI/Datos-emisor-pt2.png" alt="image">
            <input type="button" value="engrane" onclick="siguiente(), actualizarTexto(15)">
            <form>
                <input type="text" id="RFC" onkeyup="this.value = this.value.toUpperCase();" value="ABCD123456XXX">
                <input type="text" id="nombre" onkeyup="this.value = this.value.toUpperCase();" value="NOMBRE LEGAL">
            </form>
        </div>
        <input type="button" onclick="anterior(), actualizarTexto(10)" value="Atras">
        `;
    }
    else
    {
        actualizarTexto(8)
        document.getElementById("RFC").value = ""
        document.getElementById("nombre").value = ""
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
