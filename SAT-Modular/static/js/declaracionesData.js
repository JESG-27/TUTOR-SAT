// ----------------------------------------------- HTML ----------------------------------------------- 
// Posición 0
var SAT_inicio = `
<div class="tuto-window">
    <img class="" src="/static/images/Declaraciones/SAT-inicio-pt1.png" alt="image">
    <img class="" src="/static/images/Declaraciones/SAT-Inicio-pt2.png" alt="image">
    <input class="" type="button" onclick="siguiente(), actualizarTexto(1)" value="Declaraciones">
</div>
`;

// Posición 1
var declaraciones = `
<div class="tuto-window">
    <img class="" src="/static/images/Declaraciones/Declaraciones-pt1.png" alt="image">
    <img class="" src="/static/images/Declaraciones/Declaraciones-pt2.png" alt="image" id="declaraciones_2">
    <input class="" type="button" onclick="ocultarinput('RSC'), mostrarinput('opcionRSC'), imagen('declaraciones_2','/static/images/Declaraciones/Declaraciones-pt2-c1.png'), actualizarTexto(2)" value="Regimen Simplificado de Confianza" id="RSC">
    <input class="" type="button" onclick="siguiente(), actualizarTexto(3)" value="Presenta tu declaración de pagos mensuales..." id="opcionRSC" style="display : none">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(0)">
`

// Posición 2
var presenta_declaracion = `
<div class="tuto-window">
    <img class="" src="/static/images/Declaraciones/Iniciar-1.png" alt="image">
    <img class="" src="/static/images/Declaraciones/Iniciar-2.png" alt="image">
    <img class="" src="/static/images/Declaraciones/Iniciar-3.png" alt="image">
    <img class="" src="/static/images/Declaraciones/Iniciar-4.png" alt="image">
    <input class="" type="button" onclick="siguiente(), actualizarTexto(4)" value="INICIAR">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(1)">
`;

// Posición 3
var login_declaraciones = `
<div class="tuto-window">
    <img class="" src="/static/images/Declaraciones/Login.png" alt="image">

    <div class="">
        <input class="" type="text" onclick="actualizarTexto(5)" onchange="login('RFC_login')" id="RFC_login" onkeyup="this.value = this.value.toUpperCase();">
        <input class="" type="password" onclick="actualizarTexto(6)" onchange="login('contrasena_login')" id="contrasena_login" style="display : none">
        <input class="" type="text" onclick="actualizarTexto(7)" onchange="login('captcha_login')" id="captcha_login" style="display : none">
        <input class="" type="button" onclick="siguiente(), actualizarTexto(8)" id="enviar_login" style="display : none" value="Enviar">
    </div>
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(3)">
`;

// Posición 4
var inicio_declaraciones = `
<div class="tuto-window">
<img class="" src="/static/images/Declaraciones/inicio-declaraciones.png" alt="image" id="img_declaracion">
    
    <div class="">
        <input class="" type="button" onclick="ocultarinput('presentar_decla'), mostrarinput('periodicidad_decla'), imagen('img_declaracion', '/static/images/Declaraciones/presentar-declaracion.png'), actualizarTexto(9)" id="presentar_decla" value="Presentar declaración">
        <input class="" type="button" onclick="ocultarinput('periodicidad_decla'), mostrarinput('periodicidad_mensual'), imagen('img_declaracion', '/static/images/Declaraciones/presentar-declaracion-c1.png'), actualizarTexto(10)" id="periodicidad_decla" value="Periodicidad" style="display : none">
        <input class="" type="button" onclick="ocultarinput('periodicidad_mensual'), mostrarinput('periodo_decla'), imagen('img_declaracion', '/static/images/Declaraciones/presentar-declaracion-c2.png'), actualizarTexto(11)" id="periodicidad_mensual" value="Mensual" style="display : none">
        <input class="" type="button" onclick="ocultarinput('periodo_decla'), mostrarinput('periodo_diciembre'), imagen('img_declaracion', '/static/images/Declaraciones/presentar-declaracion-c3.png')" id="periodo_decla" value="Periodo" style="display : none">
        <input class="" type="button" onclick="ocultarinput('periodo_diciembre'), mostrarinput('tipo_declaracion'), imagen('img_declaracion', '/static/images/Declaraciones/presentar-declaracion-c4.png'), actualizarTexto(12)" id="periodo_diciembre" value="Diciembre" style="display : none">
        <input class="" type="button" onclick="ocultarinput('tipo_declaracion'), mostrarinput('tipo_normal'), imagen('img_declaracion', '/static/images/Declaraciones/presentar-declaracion-c5.png')" id="tipo_declaracion" value="Tipo declaración" style="display : none">
        <input class="" type="button" onclick="ocultarinput('tipo_normal'), mostrarinput('siguiente_decla'), imagen('img_declaracion', '/static/images/Declaraciones/presentar-declaracion-c6.png'), actualizarTexto(13)" id="tipo_normal" value="Normal" style="display : none">
        <input class="" type="button" onclick="actualizarTexto()" id="siguiente_decla" value="Siguiente" style="display : none">
    </div>
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(4)">
`;

// ----------------------------------------------- Tutorial text -----------------------------------------------
// Posición 0
var inicio = `
Desde la página inicial del portal de SAT ubica y haz click en "Declaraciones".
`;

// Posición 1
var RSC = `Ahora ubica el apartado de "Régimen Simplificado de Confianza" y haz click en esa opción.
`;

// Posicón 2
var opcion_RSC = `
Como puedes observer se despliega una lista de opciones, la que debes de elegir es la de "Presentar tu declaración de pagos mensuales y definitivos. Régimen cimplificado de confianza"
`;

// Posición 3
var iniciar_declaracion = `
Como puedes observar se muetra la información referente a la declaración de pagos mensuales y definitivos. Una vez que lo hayas leído haz click en el botón de "INICIAR".
`;

// Posición 4
var login_tutorial = `
Ahora se requieren de tus credenciales para iniciar sesión, unicamente será RFC y contraseña. Haz click en el campo de RFC.
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
El captcha es un método de seguridad de la plataforma, debes de ingresar las letras/números de la imágen superior "2XRJ4Z", por último da click en "Enviar"
`;

// Posición 8
var presentar_declaracion = `
Enhorabuena! ya estas listo para comenzar a presentar tu declaración, por lo tanto selecciona el apartado con este mismo nombre "Presentar declaración".
`;

// Posición 9
var configuracion_decla = `
Como puedes ver el primer paso es configurar los datos para tu declaración, el primero de ellos es Ejercicio. Para este ejemplo seguiremos con 2023, por lo que debes de configurar la Periodicidad.
`;

// Posición 10
var configuracion_decla_periodicidad = `
En el apartado de periodicidad selecciona la opción de "Mensual" que es la que utilizaremos para este ejemplo, aunque dependiendo el lapso de tiempo en el que vas a declarar será el correspondiente.
`;

// Posición 11
var configuracion_decla_periodo = `
Ahora el siguiente paso es seleccionar el Periodo, haz click en el y en el mes de Diciembre.
`;

// Posición 12
var configuracion_decla_tipo = `
El último parámetro para configura la declaración es el de Tipo de declaración, en este ejemplo utilizaremos el tipo: Normal.
`;

// Posición 13
var configuracion_decla_final = `
Con esto queda completada la configuración de tu declaración, los aspectos de la obligación a declarar son ISR e IVA. Continua en el botón de siguiente.
`;

// HTML de tutorial
var HTML_text_declaraciones = [SAT_inicio, declaraciones, presenta_declaracion, login_declaraciones, 
                                inicio_declaraciones]

// Texto de guía tutorial
var tutorial_text_declaraciones = [inicio, RSC, opcion_RSC, iniciar_declaracion, login_tutorial, RFC_login, contrasena_login, captcha_login,
                                presentar_declaracion, configuracion_decla, configuracion_decla_periodicidad, configuracion_decla_periodo, configuracion_decla_tipo, configuracion_decla_final]