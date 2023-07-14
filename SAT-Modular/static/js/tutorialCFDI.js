var contador = 0

// HTML captura del tutorial
// Posición 0
var SAT_inicio0 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/SAT-inicio0.png" alt="image">
    <input class="pos0Factura" type="button" onclick="siguiente(), actualizarTexto(1)" value="">
</div>
`;

// Posición 1
var SAT_inicio1 = `
<div class="tuto-window">
    <img class="capturaCorta" src="/static/images/CFDI/SAT-inicio2.png" alt="image">
    <img class="captura" src="/static/images/CFDI/SAT-inicio2-0.png" alt="image">
    <input class="pos1Servicios" type="button" onclick="siguiente(), actualizarTexto(2)" value="">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(0)" value="">
`;

// Posición 2
var SAT_inicio2 = `
<div class="tuto-window">
    <img class="capturaCorta" src="/static/images/CFDI/SAT-inicio2.png" alt="image">
    <img class="captura" src="/static/images/CFDI/SAT-inicio3.png" alt="image">
    <input class="pos2Servicio" type="button" onclick="siguiente(), actualizarTexto(3)" value="">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(1)" value="">
`;

// Posición 3
var SAT_inicio3 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/SAT-inicio4.png" alt="image">
    <input class="pos3Ejecutar" type="button" onclick="siguiente(), actualizarTexto(4)" value="">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(2)" value="">
`;

// Posición 4
var Login1 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Login-pt1.png" alt="image">
    <img class="captura" src="/static/images/CFDI/Login-pt2.png" alt="image">
    
    <div class="sesion">
        <form>
            <input class="pos4RFC" type="text" placeholder="" required onclick="actualizarTexto(5)" id="RFC" onkeyup="this.value = this.value.toUpperCase();">
            <input class="pos4Password" type="password" placeholder="" required onclick="actualizarTexto(6)" id="contrasena">
            <input class="pos4Captcha" type="text" placeholder="" required onclick="actualizarTexto(7)" id="captcha">
            <!-- <input class="pos4Enviar" type="button" onclick="val_login()" value="Enviar"> -->
            <input class="pos4Enviar" type="button" onclick="siguiente(), actualizarTexto(9)" value="">
        </form>
    </div>    
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(3)" value="">
`;

// Posición 5
var config_pt1 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Config-1.png" alt="image">
    <input class="pos5Engrane" type="button" onclick="siguiente(), actualizarTexto(10)" value="">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(4)" value="">
`;

// Posición 6
var config_pt2 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Config-2.png" alt="image">
    <input class="pos6Config" type="button" onclick="siguiente(), actualizarTexto(11)" value="">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(9)">
`;

// Posición 7
var config_datos_emisor = `
<div class="tuto-window">
    <img class="capturaCorta" src="/static/images/CFDI/Datos-emisor-pt1.png" alt="image">
    <img class="captura" src="/static/images/CFDI/Datos-emisor-pt2.png" alt="image">
    <form id="congif_datos_emisor">
        <input class="pos7RFC" type="text" onclick="actualizarTexto(5)" id="RFC" onkeyup="this.value = this.value.toUpperCase();" value="ABCD123456XXX">
        <input class="pos7Nombre" type="text" onclick="actualizarTexto(12)" id="nombre" onkeyup="this.value = this.value.toUpperCase();" value="NOMBRE LEGAL">
        <input class="pos7Comercial" type="text" onclick="actualizarTexto(13)">
        <input class="pos7Guardar" type="button" onclick="val_registro_emisor()" value="">
    </form>
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(10)">
`;

// Posición 8
var config_datos_emisor_engrane = `
<div class="tuto-window">
    <img class="capturaCorta" src="/static/images/CFDI/Datos-emisor-engrane.png" alt="image">
    <img class="captura" src="/static/images/CFDI/Datos-emisor-pt2.png" alt="image">
    <input class="pos8Basica" type="button" onclick="siguiente(), actualizarTexto(16)" value="">
    <form>
        <input class="pos8RFC" type="text" id="RFC" onkeyup="this.value = this.value.toUpperCase();" value="ABCD123456XXX">
        <input class="pos8Nombre" type="text" id="nombre" onkeyup="this.value = this.value.toUpperCase();" value="NOMBRE LEGAL">
    </form>
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(11)">
`;

// Posición 9
var config_basica = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Config-basica.png" alt="image">
    <img class="capturaCorta" src="/static/images/CFDI/Config-basica-pt2.png" alt="image">
    <img class="capturaCortaProducto" src="/static/images/CFDI/Config-basica-pt3.png" alt="image">
    <img class="captura" src="/static/images/CFDI/Config-basica-pt4.png" alt="image">
    <input class="pos9Selec" type="button" onclick="siguiente(), actualizarTexto(17)" value="">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(15)">
`;

// Posición 10
var config_basica_regimen_fiscal = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Config-basica-c0.png" alt="image">
    <img class="capturaCorta" src="/static/images/CFDI/Config-basica-pt2.png" alt="image">
    <img class="capturaCortaProducto" src="/static/images/CFDI/Config-basica-pt3.png" alt="image">
    <img class="captura" src="/static/images/CFDI/Config-basica-pt4.png" alt="image">
    <input class="pos10Regimen" type="button" onclick="siguiente(), actualizarTexto(18)" value="">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(16)">
`;

// Posición 11
var config_basica_c1 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Config-basica-c1.png" alt="image">
    <img class="capturaCorta" src="/static/images/CFDI/Config-basica-pt2.png" alt="image">
    <img class="capturaCortaProducto" src="/static/images/CFDI/Config-basica-pt3.png" alt="image">
    <img class="captura" src="/static/images/CFDI/Config-basica-pt4.png" alt="image">
    <input class="pos11Fav" type="button" onclick="siguiente(), actualizarTexto(19)" value="">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(17)">
`;

// Posición 12
var config_basica_c2 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Config-basica-c2.png" alt="image">
    <img class="capturaCorta" src="/static/images/CFDI/Config-basica-pt2.png" alt="image">
    <img class="capturaCortaProducto" src="/static/images/CFDI/Config-basica-pt3.png" alt="image">
    <img class="captura" src="/static/images/CFDI/Config-basica-pt4.png" alt="image">
    <input class="pos12Selec" type="button" onclick="siguiente(), actualizarTexto(19)" value="">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(18)">
`;

// Posición 13
var config_basica_c3 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Config-basica-c3.png" alt="image">
    <img class="capturaCorta" src="/static/images/CFDI/Config-basica-pt2.png" alt="image">
    <img class="capturaCortaProducto" src="/static/images/CFDI/Config-basica-pt3.png" alt="image">
    <img class="captura" src="/static/images/CFDI/Config-basica-pt4.png" alt="image">
    <input class="pos13Ingreso" type="button" onclick="siguiente(), actualizarTexto(18)" value="">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(19)">
`;

// Posición 14
var config_basica_c4 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Config-basica-c4.png" alt="image">
    <img class="capturaCorta" src="/static/images/CFDI/Config-basica-pt2.png" alt="image">
    <img class="capturaCortaProducto" src="/static/images/CFDI/Config-basica-pt3.png" alt="image">
    <img class="captura" src="/static/images/CFDI/Config-basica-pt4.png" alt="image">
    <input class="pos14Fav" type="button" onclick="siguiente(), actualizarTexto(20)" value="">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(19)">
`;

// Posición 15
var config_basica_c5 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Config-basica-c5.png" alt="image">
    <img class="capturaCorta" src="/static/images/CFDI/Config-basica-pt2.png" alt="image">
    <img class="capturaCortaProducto" src="/static/images/CFDI/Config-basica-pt3.png" alt="image">
    <img class="captura" src="/static/images/CFDI/Config-basica-pt4.png" alt="image">
    <input class="pos15Selec" type="button" onclick="siguiente(), actualizarTexto(20)" value="">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(18)">
`;

// Posición 16
var config_basica_c6 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Config-basica-c6.png" alt="image">
    <img class="capturaCorta" src="/static/images/CFDI/Config-basica-pt2.png" alt="image">
    <img class="capturaCortaProducto" src="/static/images/CFDI/Config-basica-pt3.png" alt="image">
    <img class="captura" src="/static/images/CFDI/Config-basica-pt4.png" alt="image">
    <input class="pos16Codigo" type="button" onclick="siguiente(), actualizarTexto(18)" value="">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(20)">
`;

// Posición 17
var config_basica_c7 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Config-basica-c7.png" alt="image">
    <img class="capturaCorta" src="/static/images/CFDI/Config-basica-pt2.png" alt="image">
    <img class="capturaCortaProducto" src="/static/images/CFDI/Config-basica-pt3.png" alt="image">
    <img class="captura" src="/static/images/CFDI/Config-basica-pt4.png" alt="image">
    <input class="pos17Fav" type="button" onclick="siguiente(), actualizarTexto(21)" value="">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(20)">
`;

// Posición 18
var config_basica_c8 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Config-basica-c8.png" alt="image">
    <img class="capturaCorta" src="/static/images/CFDI/Config-basica-pt2.png" alt="image">
    <img class="capturaCortaProducto" src="/static/images/CFDI/Config-basica-pt3.png" alt="image">
    <img class="captura" src="/static/images/CFDI/Config-basica-pt4.png" alt="image">
    <input class="pos18Selec" type="button" onclick="siguiente(), actualizarTexto(21)" value="">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(18)">
`;

// Posición 19
var config_basica_pt2_c1 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Config-basica-c8.png" alt="image">
    <img class="capturaCorta2" src="/static/images/CFDI/Config-basica-pt2-c1.png" alt="image">
    <img class="capturaCortaProducto2" src="/static/images/CFDI/Config-basica-pt3-2.png" alt="image">
    <img class="captura" src="/static/images/CFDI/Config-basica-pt4.png" alt="image">
    <input class="pos19Peso" type="button" onclick="siguiente(), actualizarTexto(18)" value="">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(21)">
`;

// Posición 20
var config_basica_pt2_c2 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Config-basica-c8.png" alt="image">
    <img class="capturaCorta2" src="/static/images/CFDI/Config-basica-pt2-c2.png" alt="image">
    <img class="capturaCortaProducto2" src="/static/images/CFDI/Config-basica-pt3-2.png" alt="image">
    <img class="captura" src="/static/images/CFDI/Config-basica-pt4.png" alt="image">
    <input class="pos20Fav" type="button" onclick="siguiente(), actualizarTexto(22)" value="">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(21)">
`;

// Posición 21
var config_basica_pt2_c3 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Config-basica-c8.png" alt="image">
    <img class="capturaCorta2" src="/static/images/CFDI/Config-basica-pt2-c3.png" alt="image">
    <img class="capturaCortaProducto2" src="/static/images/CFDI/Config-basica-pt3-2.png" alt="image">
    <img class="captura" src="/static/images/CFDI/Config-basica-pt4.png" alt="image">
    <input class="pos21Selec" type="button" onclick="siguiente(), actualizarTexto(22)" value="">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(18)">
`;

// Posición 22
var config_basica_pt2_c4 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Config-basica-c8.png" alt="image">
    <img class="capturaCorta2" src="/static/images/CFDI/Config-basica-pt2-c4.png" alt="image">
    <img class="capturaCortaProducto2" src="/static/images/CFDI/Config-basica-pt3-2.png" alt="image">
    <img class="captura" src="/static/images/CFDI/Config-basica-pt4.png" alt="image">
    <input class="pos22Efectivo" type="button" onclick="siguiente(), actualizarTexto(18)" value="">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(22)">
`;

// Posición 23
var config_basica_pt2_c5 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Config-basica-c8.png" alt="image">
    <img class="capturaCorta2" src="/static/images/CFDI/Config-basica-pt2-c5.png" alt="image">
    <img class="capturaCortaProducto2" src="/static/images/CFDI/Config-basica-pt3-2.png" alt="image">
    <img class="captura" src="/static/images/CFDI/Config-basica-pt4.png" alt="image">
    <input class="pos23Fav" type="button" onclick="siguiente(), actualizarTexto(23)" value="">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(22)">
`;

// Posición 24
var config_basica_pt2_c6 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Config-basica-c8.png" alt="image">
    <img class="capturaCorta2" src="/static/images/CFDI/Config-basica-pt2-c6.png" alt="image">
    <img class="capturaCortaProducto2" src="/static/images/CFDI/Config-basica-pt3-2.png" alt="image">
    <img class="captura" src="/static/images/CFDI/Config-basica-pt4.png" alt="image">
    <input class="pos24Selec" type="button" onclick="siguiente(), actualizarTexto(23)" value="">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(18)">
`;

// Posición 25
var config_basica_pt2_c7 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Config-basica-c8.png" alt="image">
    <img class="capturaCorta2" src="/static/images/CFDI/Config-basica-pt2-c7.png" alt="image">
    <img class="capturaCortaProducto2" src="/static/images/CFDI/Config-basica-pt3-2.png" alt="image">
    <img class="captura" src="/static/images/CFDI/Config-basica-pt4.png" alt="image">
    <input class="pos25Pago" type="button" onclick="siguiente(), actualizarTexto(18)" value="">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(23)">
`;

// Posición 26
var config_basica_pt2_c8 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Config-basica-c8.png" alt="image">
    <img class="capturaCorta2" src="/static/images/CFDI/Config-basica-pt2-c8.png" alt="image">
    <img class="capturaCortaProducto2" src="/static/images/CFDI/Config-basica-pt3-2.png" alt="image">
    <img class="captura" src="/static/images/CFDI/Config-basica-pt4.png" alt="image">
    <input class="pos26Fav" type="button" onclick="siguiente(), actualizarTexto(24)" value="">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(23)">
`;

// Posición 27
var config_basica_pt2_c9 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Config-basica-c8.png" alt="image">
    <img class="capturaCorta3" src="/static/images/CFDI/Config-basica-pt2-c9.png" alt="image">
    <img class="capturaCortaProducto2" src="/static/images/CFDI/Config-basica-pt3-2.png" alt="image">
    <img class="captura" src="/static/images/CFDI/Config-basica-pt4.png" alt="image">
    <input class="pos27Engrane" type="button" onclick="siguiente(), actualizarTexto(25)" value="">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(18)">
`;

// Posición 28
var config_basica_c9 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Config-basica-c9.png" alt="image">
    <img class="capturaCorta3" src="/static/images/CFDI/Config-basica-pt2-c9.png" alt="image">
    <img class="capturaCortaProducto2" src="/static/images/CFDI/Config-basica-pt3-2.png" alt="image">
    <img class="captura" src="/static/images/CFDI/Config-basica-pt4.png" alt="image">
    <input class="pos28Avanzada" type="button" onclick="siguiente(), actualizarTexto(26)" value="">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(24)">
`;

// Posición 29
var config_avanzada = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Config-avanzada.png" alt="image">
    <img class="capturaCorta" src="/static/images/CFDI/Config-avanzada-pt2.png" alt="image">
    <img class="captura" src="/static/images/CFDI/Config-avanzada-pt3.png" alt="image">
    <input class="pos29Check" type="button" onclick="siguiente(), actualizarTexto(27)" value="">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(25)">
`;

// Posición 30
var config_avanzada_c1 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Config-avanzada-c1.png" alt="image">
    <img class="capturaCorta" src="/static/images/CFDI/Config-avanzada-pt2.png" alt="image">
    <img class="captura" src="/static/images/CFDI/Config-avanzada-pt3.png" alt="image">
    <input class="pos30Check" type="button" onclick="siguiente(), actualizarTexto(27)" value="">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(26)">
`;

// Posición 31
var config_avanzada_c2 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Config-avanzada-c2.png" alt="image">
    <img class="capturaCorta" src="/static/images/CFDI/Config-avanzada-pt2.png" alt="image">
    <img class="captura" src="/static/images/CFDI/Config-avanzada-pt3.png" alt="image">
    <input class="pos31Guardar" type="button" onclick="siguiente(), actualizarTexto()" value="">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(27)">
`;

// Posición 32
var config_avanzada_c3 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Config-avanzada-c2.png" alt="image">
    <img class="capturaCorta" src="/static/images/CFDI/Config-avanzada-pt2.png" alt="image">
    <img class="captura" src="/static/images/CFDI/Config-avanzada-pt3-c3.png" alt="image">
    <input class="pos32Generar" type="button" onclick="siguiente(), actualizarTexto()" value="">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(27)">
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
El RFC en una clave tu única alfanumérica compuesta de 13 letras y números, para este ejemplo se utilizará: ABCD123456XXX
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
En este apartado debes de agregar tu nombre, denominación o razón social inscrito a tu RFC, para este ejemplo se utiliza "NOMBRE LEGAL"
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

// Posición 16
var config_basica_inicio = `
Ya te encuentras en el apartado de la configuración básica, comienza eligiendo el regimen fiscal correspondiente
`;

// Posición 17
var regimen_fiscal = `
Debes especificar la clave vigente del régimen fiscal bajo el cual se está emitiendo el comprobante. En este caso es el "Regimen Simplificado de Confianza"
`;

// Posicion 18
var favorito = `
Una vez cargada la opción debes de hacer click en el símbolo de + que está debajo de favorito para que se guarde
`;

// Posicion 19
var tipo_de_factura = `
Perfecto, ahora elige el tipo de factura correspondiente esta debe de ser: Ingreso
`;

// Posicion 20
var codigo_postal = `
Ahora agregaras el código postal correspondiente, haz click en "Seleccione un registro" y por el momento usaras "45065 ZAPOPAN JALISCO"
`;

// Posicion 21
var moneda = `
Perfecto, el paso siguiente es registrar la clave de la moneda utilizada para expresar los montos, en este caso seran pesos mexicanos. Elige la opción de "Peso Mexicano"
`;

// Posicion 22
var forma_pago = `
Lo siguiente es que debes de registrar la clave de la forma de pago de los bienes, el registro que eligiras para este tutorial será "Efectivo"
`;

// Posicion 23
var metodo_pago = `
Debes registrar la clave que corresponda al metodo de pago, depende si se paga en una sola exhibición o en parcialidades. Elige la opción de "Pago en una sola exihibición"
`;

// Posición 24
var config_basica_fin = `
Con esto concluyes la configuración básica, hasta aquí no requieres de agregar más datos. Da click nuevamente en el engrane para que procedas con la configuración avanzada
`;

// Posicion 25
var opcion_avanzada = `
Procede dando click en la opción de "Avanzada", esta será la ultima parte de la configuración de datos
`;

// Posicion 26
var serie_folio = `
Inicia seleccionando la casilla de "Serie y Folio", la serie es el número que utilizas como contribuyente para el control interno de tu información. El folio es de control interno que se asigna al comprobante
`;

// Posicion 27
var factura_global = `
Ahora selecciona la casilla de "Es una Factura Global" y al final no olvides dar click en "Guardar" para que se mantengan seleccionados tus cambios
`;

var HTML_text = [SAT_inicio0, SAT_inicio1, SAT_inicio2, SAT_inicio3, Login1, config_pt1, config_pt2, config_datos_emisor, config_datos_emisor_engrane, config_basica, config_basica_regimen_fiscal, 
    config_basica_c1, config_basica_c2, config_basica_c3, config_basica_c4, config_basica_c5, config_basica_c6, config_basica_c7, config_basica_c8,
    config_basica_pt2_c1, config_basica_pt2_c2, config_basica_pt2_c3, config_basica_pt2_c4, config_basica_pt2_c5, config_basica_pt2_c6, config_basica_pt2_c7, config_basica_pt2_c8, config_basica_pt2_c9, config_basica_c9,
    config_avanzada, config_avanzada_c1, config_avanzada_c2, config_avanzada_c3]

var tutorial_text = [boton_factura_electronica, boton_servicios_facturacion, boton_facturacion_cuentas, boton_ejecutar_linea, login,
                    RFC_login, contrasena_login, captcha_login, datos_incorrectos,
                    engrane_opciones, opcion_datos_emisor, registro_emisor, nombre_razon_social, nombre_comercial, registro_emisor_guardado, opcion_basica,
                    config_basica_inicio, regimen_fiscal, favorito, tipo_de_factura, codigo_postal, moneda, forma_pago, metodo_pago, config_basica_fin,
                    opcion_avanzada, serie_folio, factura_global]


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
            <input class="validEngrane" type="button" value="" onclick="siguiente(), actualizarTexto(15)">
            <form>
                <input class="validRFC" type="text" id="RFC" onkeyup="this.value = this.value.toUpperCase();" value="ABCD123456XXX">
                <input class="validNombre" type="text" id="nombre" onkeyup="this.value = this.value.toUpperCase();" value="NOMBRE LEGAL">
            </form>
        </div>
        <input class="atras" type="button" onclick="anterior(), actualizarTexto(10)" value="">
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
