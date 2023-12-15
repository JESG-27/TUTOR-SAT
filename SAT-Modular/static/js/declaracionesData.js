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
        <input class="" type="button" onclick="siguiente(),actualizarTexto(14)" id="siguiente_decla" value="Siguiente" style="display : none">
    </div>
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(4)">
`;

// Posición 5
var declaracion_isr = `
<div class="tuto-window">
<img class="" src="/static/images/Declaraciones/Declaraciones-isr-c1.png" alt="image" id="img_isr_simp">
    
    <div class="">
        <input class="" type="button" onclick="siguiente(),actualizarTexto(15)" id="iniciar_isr" value="Iniciar declaracion ISR">
    </div>
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(8)">
`;

// Posición 6
var isr_pt1 = `
<div class="tuto-window">
<img class="" src="/static/images/Declaraciones/Declaraciones-isr-c2.png" alt="image" id="img_isr_simp_pt1">
    
    <div class="">
        <input class="" type="button" onclick="ocultarinput('copropiedad'), mostrarinput('total_ingresos'),imagen('img_isr_simp_pt1', '/static/images/Declaraciones/Declaraciones-isr-pt1-c1.png'), actualizarTexto(16)" id="copropiedad" value="Seleccionar">
        <input class="" type="button" onclick="ocultarinput('total_ingresos'), mostrarinput('mostrar_total_ingresos'),imagen('img_isr_simp_pt1', '/static/images/Declaraciones/Declaraciones-isr-pt1-c2.png'), actualizarTexto(17)" id="total_ingresos" value="no" style="display : none">
        <input class="" type="button" onclick="ocultarinput('mostrar_total_ingresos'), mostrarinput('cerrar_total_ingresos'),imagen('img_isr_simp_pt1', '/static/images/Declaraciones/Declaraciones-isr-pt1-c3.png'), actualizarTexto(18)" id="mostrar_total_ingresos" value="mostrar" style="display : none">
        <input class="" type="button" onclick="ocultarinput('cerrar_total_ingresos'), mostrarinput('devoluciones_desc_bon'),imagen('img_isr_simp_pt1', '/static/images/Declaraciones/Declaraciones-isr-pt1-c2.png'), actualizarTexto(19)" id="cerrar_total_ingresos" value="cerrar" style="display : none">
        <input class="" type="button" onclick="ocultarinput('devoluciones_desc_bon'), mostrarinput('dec_devo_bonif_por_copropiedad'),imagen('img_isr_simp_pt1', '/static/images/Declaraciones/Declaraciones-isr-pt1-c4.png'), actualizarTexto(20)" id="devoluciones_desc_bon" value="mostrar" style="display : none">
        <input class="" type="text" onclick="actualizarTexto(21)" onchange="Validar_numero('dec_devo_bonif_por_copropiedad','cerrar_dec_devo_bonif','img_isr_simp_pt1','/static/images/Declaraciones/Declaraciones-isr-pt1-c5.png')" id="dec_devo_bonif_por_copropiedad" style="display : none">
        <input class="" type="button" onclick="siguiente(),actualizarTexto(22)" id="cerrar_dec_devo_bonif" value="cerrar" style="display : none"  > 

    </div>
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(14)">
`;

// Posición 7
var isr_pt2 = `
<div class="tuto-window">
<img class="" src="/static/images/Declaraciones/Declaraciones-isr-pt2-c1.png" alt="image" id="img_isr_simp_pt2">
    
    <div class="">
        <input class="" type="button" onclick="ocultarinput('mostrar_ingresos'), mostrarinput('agregar_ingresos'),imagen('img_isr_simp_pt2', '/static/images/Declaraciones/Declaraciones-isr-pt2-c2.png'), actualizarTexto(23)" id="mostrar_ingresos" value="mostrar">
        <input class="" type="button" onclick="ocultarinput('agregar_ingresos'), mostrarinput('seleccionar_ingresos'),imagen('img_isr_simp_pt2', '/static/images/Declaraciones/Declaraciones-isr-pt2-c3.png'), actualizarTexto(24)" id="agregar_ingresos" value="agregar" style="display : none">
        <input class="" type="button" onclick="ocultarinput('seleccionar_ingresos'), mostrarinput('sin_ingreso_adicional'),imagen('img_isr_simp_pt2', '/static/images/Declaraciones/Declaraciones-isr-pt2-c4.png'), actualizarTexto(25)" id="seleccionar_ingresos" value="seleccionar" style="display : none">
        <input class="" type="button" onclick="ocultarinput('sin_ingreso_adicional'), mostrarinput('importe_adicional'),imagen('img_isr_simp_pt2', '/static/images/Declaraciones/Declaraciones-isr-pt2-c5.png'), actualizarTexto(26)" id="sin_ingreso_adicional" value="sin ingreso adicional" style="display : none">
        <input class="" type="text" onclick="actualizarTexto(27)" onchange="Validar_numero('importe_adicional','guardar_sin_ingreso_adicional','img_isr_simp_pt2','/static/images/Declaraciones/Declaraciones-isr-pt2-c6.png')" id="importe_adicional" style="display : none">
        <input class="" type="button" onclick="ocultarinput('guardar_sin_ingreso_adicional'),mostrarinput('cerrar_ingreso'),imagen('img_isr_simp_pt2', '/static/images/Declaraciones/Declaraciones-isr-pt2-c7.png'), actualizarTexto(28)" id="guardar_sin_ingreso_adicional" value="Guardar" style="display : none">
        <input class="" type="button" onclick="siguiente(),actualizarTexto()" id="cerrar_ingreso" value="cerrar" style="display : none"  > 

    </div>
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(15)">
`;

// Posición 8
var isr_pt3 = `
<div class="tuto-window">
<img class="" src="/static/images/Declaraciones/Declaraciones-isr-pt3-c1.png" alt="image" id="img_isr_simp_pt2">
    
    <div class="">
    
    </div>
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(22)">
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

// Posición 14
var decla_isr_inicio = `
Ahora seleccionaremos el primer apartado. Iremso a ISR simplificaco de confianza. Persona física .
`;

// Posición 15
var copropiedad = `
Iniciemos con la declaracion, en primer lugar indicaremos si los ingresos son obtenidos a través de copropiedad. Si no sabes lo que significa recuerda preguntar a nuestro asistente virtual. .
`;

// Posición 16
var seleccion_input_copropiedad = `
En este caso seleccionaremos la opcion de "no", no fueron obtenidos a través de copropiedad.
`;

// Posición 17
var ingresos_efectivamente_cobrados_mostrar = `
Ahora veremos el apartado de ingresos efectivamente cobrados.
`;

// Posición 18
var facturas_vigentes = `
En este apartado te mostrará las facturas vigentes al mes de la factura, en este caso en diciembre tenemos 0 facturas vigentes, de igual forma nuestro total es 0. Presiona cerrar para regresar a la parte anterior.
`;

// Posición 19
var desc_dev_bonif= `
Bien, ahora iremos a la parte de Descuentos, devoluciones y bonificaciones, le daremos click para ver lo que sigue.
`;

// Posición 20
var desc_dev_bonif_2= `
Aquí podremos analizar si tenemos algun tipo de devolucion,descuentos o devoluciones, da click en el apartado con contorno rojo.
`;

// Posición 21
var txt_desc_dev_bonif= `
Aqui pondremos 0 para indicar que no tenemos ningun descuento ni bonificacion.
`;

// Posición 22
var ingreso_adicional_1= `
Ahora vamos a la parte de ingresos adicionales, este es el penultimo apartado antes de terminar la seccion de ingresos.
`;

// Posición 23
var ingreso_adicional_2= `
Aquí indicaremos cualquier tipo de actividad que no se haya registrado su CFDI correspondiente o no tenga un prellenado. Daremos click en agregar.
`;

// Posición 24
var ingreso_adicional_3= `
En el apartado de Concepto selecionaremos uno, presionaremos el apartado de seleccionar.
`;

// Posición 25
var ingreso_adicional_4= `
Para este ejemplo no contaremos con ingresos adicionales por lo que le daremos en el apartado de " Sin ingresos adicionales "
`;

// Posición 26
var ingreso_adicional_5= `
Nos iremos a la seccion donde dice importe.
`;

// Posición 27
var ingreso_adicional_6= `
Pondremos un 0 dando a entender que claramente no tuvimos ingresos adicionales y seguiremos con los siguientes pasos.
`;

// Posición 27
var ingreso_adicional_7= `
Ahora cerremos este apartado.
`;
// HTML de tutorial
var HTML_text_declaraciones = [SAT_inicio, declaraciones, presenta_declaracion, login_declaraciones, 
                                inicio_declaraciones,declaracion_isr,isr_pt1,isr_pt2,isr_pt3]

// Texto de guía tutorial
var tutorial_text_declaraciones = [inicio, RSC, opcion_RSC, iniciar_declaracion, login_tutorial, RFC_login, contrasena_login, captcha_login,
                                presentar_declaracion, configuracion_decla, configuracion_decla_periodicidad, configuracion_decla_periodo, configuracion_decla_tipo, configuracion_decla_final,decla_isr_inicio,
                                copropiedad,seleccion_input_copropiedad,ingresos_efectivamente_cobrados_mostrar,facturas_vigentes,desc_dev_bonif,desc_dev_bonif_2,txt_desc_dev_bonif,ingreso_adicional_1,
                                ingreso_adicional_2,ingreso_adicional_3,ingreso_adicional_4,ingreso_adicional_5,ingreso_adicional_6,ingreso_adicional_7]