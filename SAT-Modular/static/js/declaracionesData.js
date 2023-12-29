// ----------------------------------------------- HTML ----------------------------------------------- 
// Posición 0
var SAT_inicio = `
<div class="tuto-window">
    <img class="captura" src="/static/images/Declaraciones/SAT-inicio-pt1.png" alt="image">
    <img class="capturaCorta4" src="/static/images/Declaraciones/SAT-Inicio-pt2.png" alt="image">
    <input id="selec" class="dec0Dec" type="button" onclick="siguiente(), actualizarTexto(1)" value="">
</div>
`;

// Posición 1
var declaraciones = `
<div class="tuto-window">
    <img class="captura" src="/static/images/Declaraciones/Declaraciones-pt1.png" alt="image">
    <img class="captura" src="/static/images/Declaraciones/Declaraciones-pt2.png" alt="image" id="declaraciones_2">
    <input id="selec" class="dec1Reg" type="button" onclick="ocultarinput('RSC'), mostrarinput('opcionRSC'), imagen('declaraciones_2','/static/images/Declaraciones/Declaraciones-pt2-c1.png'), actualizarTexto(2)" value="" id="RSC">
    <input class="" type="button" onclick="siguiente(), actualizarTexto(3)" value="" id="opcionRSC" style="display : none">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(0)">
`

// Posición 2
var presenta_declaracion = `
<div class="tuto-window">
    <img class="captura" src="/static/images/Declaraciones/Iniciar-1.png" alt="image">
    <img class="captura" src="/static/images/Declaraciones/Iniciar-2.png" alt="image">
    <img class="captura" src="/static/images/Declaraciones/Iniciar-3.png" alt="image">
    <img class="captura" src="/static/images/Declaraciones/Iniciar-4.png" alt="image">
    <input id="selec" class="dec2Ini" type="button" onclick="siguiente(), actualizarTexto(4)" value="">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(1)">
`;

// Posición 3
var login_declaraciones = `
<div class="tuto-window">
    <img class="captura" src="/static/images/Declaraciones/Login.png" alt="image">
    <img class="captura" src="/static/images/Declaraciones/Login-bottom.png" alt="image">

    <div class="">
        <input class="dec3RFC" type="text" onclick="actualizarTexto(5)" onchange="login('RFC_login')" id="RFC_login" onkeyup="this.value = this.value.toUpperCase();">
        <input class="" type="password" onclick="actualizarTexto(6)" onchange="login('contrasena_login')" id="contrasena_login" style="display : none">
        <input class="" type="text" onclick="actualizarTexto(7)" onchange="login('captcha_login')" id="captcha_login" style="display : none">
        <input class="" type="button" onclick="siguiente(), actualizarTexto(8)" id="enviar_login" style="display : none" value="">
    </div>
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(3)">
`;

// Posición 4
var inicio_declaraciones = `
<div class="tuto-window">
<img class="captura" src="/static/images/Declaraciones/inicio-declaraciones.png" alt="image" id="img_declaracion">
    
    <div class="">
        <input class="" type="button" onclick="ocultarinput('presentar_decla'), mostrarinput('periodicidad_decla'), imagen('img_declaracion', '/static/images/Declaraciones/presentar-declaracion.png'), actualizarTexto(9)" id="presentar_decla" value="">
        <input class="" type="button" onclick="ocultarinput('periodicidad_decla'), mostrarinput('periodicidad_mensual'), imagen('img_declaracion', '/static/images/Declaraciones/presentar-declaracion-c1.png'), actualizarTexto(10)" id="periodicidad_decla" value="" style="display : none">
        <input class="" type="button" onclick="ocultarinput('periodicidad_mensual'), mostrarinput('periodo_decla'), imagen('img_declaracion', '/static/images/Declaraciones/presentar-declaracion-c2.png'), actualizarTexto(11)" id="periodicidad_mensual" value="" style="display : none">
        <input class="" type="button" onclick="ocultarinput('periodo_decla'), mostrarinput('periodo_noviembre'), imagen('img_declaracion', '/static/images/Declaraciones/presentar-declaracion-c3.png')" id="periodo_decla" value="" style="display : none">
        <input class="" type="button" onclick="ocultarinput('periodo_noviembre'), mostrarinput('tipo_declaracion'), imagen('img_declaracion', '/static/images/Declaraciones/presentar-declaracion-c4.png'), actualizarTexto(12)" id="periodo_noviembre" value="" style="display : none">
        <input class="" type="button" onclick="ocultarinput('tipo_declaracion'), mostrarinput('tipo_normal'), imagen('img_declaracion', '/static/images/Declaraciones/presentar-declaracion-c5.png')" id="tipo_declaracion" value="" style="display : none">
        <input class="" type="button" onclick="ocultarinput('tipo_normal'), mostrarinput('siguiente_decla'), imagen('img_declaracion', '/static/images/Declaraciones/presentar-declaracion-c6.png'), actualizarTexto(13)" id="tipo_normal" value="" style="display : none">
        <input class="" type="button" onclick="siguiente(),actualizarTexto(14)" id="siguiente_decla" value="" style="display : none">
    </div>
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(4)">
`;

// Posición 5
var declaracion_isr = `
<div class="tuto-window">
<img class="captura" src="/static/images/Declaraciones/Declaraciones-isr-c1.png" alt="image" id="img_isr_simp">
    
    <div class="">
        <input class="" type="button" onclick="siguiente(),actualizarTexto(15)" id="iniciar_isr" value="">
    </div>
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(8)">
`;

// Posición 6
var isr_pt1 = `
<div class="tuto-window">
<img class="captura" src="/static/images/Declaraciones/Declaraciones-isr-c2.png" alt="image" id="img_isr_simp_pt1">
    
    <div class="">
        <input class="" type="button" onclick="ocultarinput('copropiedad'), mostrarinput('total_ingresos'),imagen('img_isr_simp_pt1', '/static/images/Declaraciones/Declaraciones-isr-pt1-c1.png'), actualizarTexto(16)" id="copropiedad" value="">
        <input class="" type="button" onclick="ocultarinput('total_ingresos'), mostrarinput('mostrar_total_ingresos'),imagen('img_isr_simp_pt1', '/static/images/Declaraciones/Declaraciones-isr-pt1-c2.png'), actualizarTexto(17)" id="total_ingresos" value="" style="display : none">
        <input class="" type="button" onclick="ocultarinput('mostrar_total_ingresos'), mostrarinput('cerrar_total_ingresos'),imagen('img_isr_simp_pt1', '/static/images/Declaraciones/Declaraciones-isr-pt1-c3.png'), actualizarTexto(18)" id="mostrar_total_ingresos" value="" style="display : none">
        <input class="" type="button" onclick="ocultarinput('cerrar_total_ingresos'), mostrarinput('devoluciones_desc_bon'),imagen('img_isr_simp_pt1', '/static/images/Declaraciones/Declaraciones-isr-pt1-c2.png'), actualizarTexto(19)" id="cerrar_total_ingresos" value="" style="display : none">
        <input class="" type="button" onclick="ocultarinput('devoluciones_desc_bon'), mostrarinput('dec_devo_bonif_por_copropiedad'),imagen('img_isr_simp_pt1', '/static/images/Declaraciones/Declaraciones-isr-pt1-c4.png'), actualizarTexto(20)" id="devoluciones_desc_bon" value="" style="display : none">
        <input class="" type="text" onclick="actualizarTexto(21)" onchange="Validar_numero('dec_devo_bonif_por_copropiedad','cerrar_dec_devo_bonif','img_isr_simp_pt1','/static/images/Declaraciones/Declaraciones-isr-pt1-c5.png'), cambiarbottom('dec_devo_bonif_por_copropiedad', '277px')" id="dec_devo_bonif_por_copropiedad" style="display : none">
        <input class="" type="button" onclick="siguiente(),actualizarTexto(22)" id="cerrar_dec_devo_bonif" value="" style="display : none"  > 

    </div>
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(14)">
`;

// Posición 7
var isr_pt2 = `
<div class="tuto-window">
<img class="captura" src="/static/images/Declaraciones/Declaraciones-isr-pt2-c1.png" alt="image" id="img_isr_simp_pt2">
    
    <div class="">
        <input class="" type="button" onclick="ocultarinput('mostrar_ingresos_disminuir'), mostrarinput('agregar_ingresos_disminuir'),imagen('img_isr_simp_pt2', '/static/images/Declaraciones/Declaraciones-isr-pt2-c2.png'), actualizarTexto(23)" id="mostrar_ingresos_disminuir" value="">
        <input class="" type="button" onclick="ocultarinput('agregar_ingresos_disminuir'), mostrarinput('seleccionar_ingresos_disminuir'),imagen('img_isr_simp_pt2', '/static/images/Declaraciones/Declaraciones-isr-pt2-c3.png'), actualizarTexto(24)" id="agregar_ingresos_disminuir" value="" style="display : none">
        <input class="" type="button" onclick="ocultarinput('seleccionar_ingresos_disminuir'), mostrarinput('sin_ingreso_disminuir'),imagen('img_isr_simp_pt2', '/static/images/Declaraciones/Declaraciones-isr-pt2-c4.png'), actualizarTexto(25)" id="seleccionar_ingresos_disminuir" value="" style="display : none">
        <input class="" type="button" onclick="ocultarinput('sin_ingreso_disminuir'), mostrarinput('importe_disminuir'),imagen('img_isr_simp_pt2', '/static/images/Declaraciones/Declaraciones-isr-pt2-c5.png'), actualizarTexto(26)" id="sin_ingreso_disminuir" value="" style="display : none">
        <input class="" type="text" onclick="actualizarTexto(27)" onchange="Validar_numero('importe_disminuir','guardar_sin_ingreso_disminuir','img_isr_simp_pt2','/static/images/Declaraciones/Declaraciones-isr-pt2-c6.png'), cambiarbottom('importe_disminuir', '438px')" id="importe_disminuir" style="display : none">
        <input class="" type="button" onclick="ocultarinput('guardar_sin_ingreso_disminuir'),mostrarinput('cerrar_ingreso_disminuir'),imagen('img_isr_simp_pt2', '/static/images/Declaraciones/Declaraciones-isr-pt2-c7.png'), actualizarTexto(28), ocultarinput('importe_disminuir')" id="guardar_sin_ingreso_disminuir" value="" style="display : none">
        <input class="" type="button" onclick="siguiente(),actualizarTexto(29)" id="cerrar_ingreso_disminuir" value="" style="display : none"  > 
    </div>
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(15)">
`;

// Posición 8
var isr_pt3 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/Declaraciones/Declaraciones-isr-pt3-c1.png" alt="image" id="img_isr_simp_pt3">
    
    <div class="">
        <input class="" type="button" onclick="ocultarinput('mostrar_ingresos_adicionales'), mostrarinput('agregar_ingresos_adicionales'),imagen('img_isr_simp_pt3', '/static/images/Declaraciones/Declaraciones-isr-pt3-c2.png'), actualizarTexto(30)" id="mostrar_ingresos_adicionales" value="">
        <input class="" type="button" onclick="ocultarinput('agregar_ingresos_adicionales'), mostrarinput('seleccionar_ingresos_adicionales'),imagen('img_isr_simp_pt3', '/static/images/Declaraciones/Declaraciones-isr-pt3-c3.png'), actualizarTexto(24)" id="agregar_ingresos_adicionales" value="" style="display : none">
        <input class="" type="button" onclick="ocultarinput('seleccionar_ingresos_adicionales'), mostrarinput('sin_ingreso_adicional'),imagen('img_isr_simp_pt3', '/static/images/Declaraciones/Declaraciones-isr-pt3-c4.png'), actualizarTexto(31)" id="seleccionar_ingresos_adicionales" value="" style="display : none">
        <input class="" type="button" onclick="ocultarinput('sin_ingreso_adicional'), mostrarinput('importe_adicional'),imagen('img_isr_simp_pt3', '/static/images/Declaraciones/Declaraciones-isr-pt3-c5.png'), actualizarTexto(26)" id="sin_ingreso_adicional" value="" style="display : none">
        <input class="" type="text" onclick="actualizarTexto(32)" onchange="Validar_numero('importe_adicional','guardar_sin_ingreso_adicional','img_isr_simp_pt3','/static/images/Declaraciones/Declaraciones-isr-pt3-c6.png'), cambiarbottom('importe_adicional', '438px')" id="importe_adicional" style="display : none">
        <input class="" type="button" onclick="ocultarinput('guardar_sin_ingreso_adicional'),mostrarinput('cerrar_ingreso_adicional'),imagen('img_isr_simp_pt3', '/static/images/Declaraciones/Declaraciones-isr-pt3-c7.png'), actualizarTexto(28), ocultarinput('importe_adicional')" id="guardar_sin_ingreso_adicional" value="" style="display : none">
        <input class="" type="button" onclick="siguiente(),actualizarTexto(33)" id="cerrar_ingreso_adicional" value="" style="display : none"  >  
    </div>
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(22)">
`;

// Posición 9
var isr_pt4 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/Declaraciones/Declaraciones-isr-pt4-c1.png" alt="image" id="img_isr_simp_pt4">
    
    <div class="">
        <input class="" type="button" onclick="ocultarinput('mostrar_ingresos_totales'), mostrarinput('agregar_ingresos_totales'),imagen('img_isr_simp_pt4', '/static/images/Declaraciones/Declaraciones-isr-pt4-c2.png'), actualizarTexto(34)" id="mostrar_ingresos_totales" value="">
        <input class="" type="button" onclick="ocultarinput('agregar_ingresos_totales'), mostrarinput('seleccionar_ingresos_totales'),imagen('img_isr_simp_pt4', '/static/images/Declaraciones/Declaraciones-isr-pt4-c3.png'), actualizarTexto(24)" id="agregar_ingresos_totales" value="" style="display : none">
        <input class="" type="button" onclick="ocultarinput('seleccionar_ingresos_totales'), mostrarinput('actividad_empresarial'),imagen('img_isr_simp_pt4', '/static/images/Declaraciones/Declaraciones-isr-pt4-c4.png'), actualizarTexto(35)" id="seleccionar_ingresos_totales" value="" style="display : none">
        <input class="" type="button" onclick="ocultarinput('actividad_empresarial'), mostrarinput('total_ingresos2'),imagen('img_isr_simp_pt4', '/static/images/Declaraciones/Declaraciones-isr-pt4-c5.png'), actualizarTexto(26)" id="actividad_empresarial" value="" style="display : none">
        <input class="" type="text" onclick="actualizarTexto(36)" onchange="Validar_numero('total_ingresos2','guardar_ingreso_total','img_isr_simp_pt4','/static/images/Declaraciones/Declaraciones-isr-pt4-c6.png'), cambiarbottom('total_ingresos2', '368px')" id="total_ingresos2" style="display : none">
        <input class="" type="button" onclick="ocultarinput('guardar_ingreso_total'),mostrarinput('cerrar_ingreso_total'),imagen('img_isr_simp_pt4', '/static/images/Declaraciones/Declaraciones-isr-pt4-c7.png'), actualizarTexto(28), ocultarinput('total_ingresos2')" id="guardar_ingreso_total" value="" style="display : none">
        <input class="" type="button" onclick="siguiente(), actualizarTexto(37)" id="cerrar_ingreso_total" value="" style="display : none"  >   
    </div>
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(29)">
`;

// Posición 10
var isr_pt5 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/Declaraciones/Declaraciones-isr-pt5-c1.png" alt="image" id="img_isr_simp_pt5">
    
    <div class="">
        <input class="" type="button" onclick="ocultarinput('determinacion'), mostrarinput('mostrar_isr_retenido'),imagen('img_isr_simp_pt5', '/static/images/Declaraciones/Declaraciones-isr-pt5-c2.png'), actualizarTexto(38)" id="determinacion" value="">
        <input class="" type="button" onclick="ocultarinput('mostrar_isr_retenido'), mostrarinput('isr_retenido_valor'),imagen('img_isr_simp_pt5', '/static/images/Declaraciones/Declaraciones-isr-pt5-c3.png'), actualizarTexto(39)" id="mostrar_isr_retenido" value="" style="display : none">
        <input class="" type="text" onclick="actualizarTexto(40)" onchange="Validar_numero('isr_retenido_valor','cerar_isr_retenido','img_isr_simp_pt5','/static/images/Declaraciones/Declaraciones-isr-pt5-c4.png'), cambiarbottom('isr_retenido_valor', '134px')" id="isr_retenido_valor" style="display : none">
        <input class="" type="button" onclick="siguiente(), actualizarTexto(41)" id="cerar_isr_retenido" value="" style="display : none"  >
    </div>
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(33)">
`;

// Posición 11
var isr_pt6 = `
<div class="tuto-window">
    <img class="capturaCortaCFDI2" src="/static/images/Declaraciones/Declaraciones-isr-pt6-c1_1.png" alt="image" id="img_isr_simp_pt6_1" style="display : none">
    <img class="captura" src="/static/images/Declaraciones/Declaraciones-isr-pt6-c1_2.png" alt="image" id="img_isr_simp_pt6_2">
    
    <div class="">
        <input class="" type="button" onclick="ocultarinput('pago'), mostrarimagen('img_isr_simp_pt6_1'),mostrarinput('compensaciones_aplicar'),imagen('img_isr_simp_pt6_2', '/static/images/Declaraciones/Declaraciones-isr-pt6-c2.png'), actualizarTexto(42)" id="pago" value="">
        <input class="" type="button" onclick="ocultarinput('compensaciones_aplicar'), mostrarinput('no_compensaciones_aplicar'),imagen('img_isr_simp_pt6_2', '/static/images/Declaraciones/Declaraciones-isr-pt6-c3.png'), actualizarTexto(43)" id="compensaciones_aplicar" value="" style="display : none">
        <input class="" type="button" onclick="ocultarinput('no_compensaciones_aplicar'), mostrarinput('guardar_isr'),imagen('img_isr_simp_pt6_2', '/static/images/Declaraciones/Declaraciones-isr-pt6-c4.png'), actualizarTexto(44)" id="no_compensaciones_aplicar" value="" style="display : none">
        <input class="" type="button" onclick="siguiente(), actualizarTexto(45)" id="guardar_isr" value="" style="display : none"  >

    </div>
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(37)">
`;
// Posición 12
var isr_final = `
<div class="tuto-window">
    <img class="captura" src="/static/images/Declaraciones/Declaraciones-iva-c1.png" alt="image" id="img_iva_pt1">
    
    <div class="">
        <input class="" type="button" onclick="siguiente(), actualizarTexto(46)" id="iva_simplificado" value="" >

    </div>
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(41)">
`;

// Posición 13
var iva_pt1 = `
<div class="tuto-window">
    <img class="capturaCorta4" src="/static/images/Declaraciones/Declaraciones-iva-header.png" alt="image" id="img_iva_header">
    <img class="captura" src="/static/images/Declaraciones/Declaraciones-iva-c2.png" alt="image" id="img_iva_pt2">
    
    <div class="">
        <input class="" type="button" onclick="ocultarinput('mostrar_iva_simp'),ocultarinput('img_iva_header'),mostrarinput('IVA_acreditable'),imagen('img_iva_pt2', '/static/images/Declaraciones/Declaraciones-iva-c3.png'), actualizarTexto(47)" id="mostrar_iva_simp" value="">
        <input class="" type="text" onclick="actualizarTexto(48)" onchange="Validar_numero('IVA_acreditable', 'IVA_acreditable_2', 'img_iva_pt2', '/static/images/Declaraciones/Declaraciones-iva-c4.png'), cambiarbottom('IVA_acreditable', '422px')" id="IVA_acreditable" style="display : none">
        <input class="" type="text" onclick="actualizarTexto(49)" onchange="Validar_numero('IVA_acreditable_2', 'cerrar_IVA_acreditable', 'img_iva_pt2', '/static/images/Declaraciones/Declaraciones-iva-c5.png'), cambiarbottom('IVA_acreditable_2', '384px')" id="IVA_acreditable_2" style="display : none">
        <input class="" type="button" onclick="ocultarinput('cerrar_IVA_acreditable'), ocultarinput('IVA_acreditable'), ocultarinput('IVA_acreditable_2'),imagen('img_iva_header','/static/images/Declaraciones/Declaraciones-iva-header-2.png'), imagen('img_iva_pt2','/static/images/Declaraciones/Declaraciones-iva-c6.png'), mostrarimagen('img_iva_header'), mostrarinput('pago_IVA'), actualizarTexto(50)" id="cerrar_IVA_acreditable" value="" style="display : none">
        <input class="" type="button" onclick="siguiente(), actualizarTexto(51)" id="pago_IVA" value="" style="display : none">
    </div>
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(45)">
`;

// Posición 14
var iva_pt2 = `
<div class="tuto-window">
    <img class="capturaCortaCFDI2" src="/static/images/Declaraciones/Declaraciones-iva-header-pago.png" alt="image" id="img_iva_header">
    <img class="captura" src="/static/images/Declaraciones/Declaraciones-iva-pago-c1.png" alt="image" id="img_iva_pt2">
    
    <div class="">
        <input class="" type="button" onclick="ocultarinput('compensacion'), mostrarinput('compensacion_no'), imagen('img_iva_pt2', '/static/images/Declaraciones/Declaraciones-iva-pago-c2.png')" id="compensacion" value="">
        <input class="" type="button" onclick="ocultarinput('compensacion_no'), mostrarinput('estimulos'), imagen('img_iva_pt2', '/static/images/Declaraciones/Declaraciones-iva-pago-c3.png'), actualizarTexto(52)" id="compensacion_no" value="" style="display : none">
        <input class="" type="button" onclick="ocultarinput('estimulos'), mostrarinput('estimulos_no'), imagen('img_iva_pt2', '/static/images/Declaraciones/Declaraciones-iva-pago-c4.png')" id="estimulos" value="" style="display : none">
        <input class="" type="button" onclick="ocultarinput('estimulos_no'), mostrarinput('guardar_iva'), imagen('img_iva_pt2', '/static/images/Declaraciones/Declaraciones-iva-pago-c5.png'), actualizarTexto(53)" id="estimulos_no" value="" style="display : none">
        <input class="" type="button" onclick="siguiente(), actualizarTexto(54)" id="guardar_iva" value="" style="display : none">
    </div>
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(46)">
`;

// Posición 15
var finalizar_declaracion = `
<div class="tuto-window">
    <img class="capturaCortaCFDI2" src="/static/images/Declaraciones/Declaraciones-iva-header-pago.png" alt="image" id="img_iva_header">
    <img class="captura" src="/static/images/Declaraciones/Declaraciones-completa-c1.png" alt="image" id="img_iva_pt2">
    
    <div class="">
        <input class="" type="button" onclick="ocultarinput('enviar_declaracion'), mostrarinput('si_declaracion'), imagen('img_iva_pt2', '/static/images/Declaraciones/Declaraciones-completa-c2.png'), actualizarTexto(55)" id="enviar_declaracion" value="">
        <input class="" type="button" onclick="ocultarinput('si_declaracion'), mostrarinput('descargar'), imagen('img_iva_pt2', '/static/images/Declaraciones/Declaraciones-completa-c3.png'), actualizarTexto(56)" id="si_declaracion" value="" style="display : none">
        <input class="" type="button" onclick="ocultarinput('descargar'), mostrarboton('finalizar'), imagen('img_iva_header', '/static/images/Declaraciones/Declaraciones-completa-header.png')" id="descargar" value="" style="display : none">
        <button class="" id="finalizar" style="display : none"><a href="/tutoriales">Finalizar</a></button> 
    </div>
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(51)">
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
Ahora el siguiente paso es seleccionar el Periodo, haz click en el y selecciona el mes de Noviembre que corresponderá a este tutorial.
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
Ahora seleccionaremos el primer apartado. Irémos a ISR simplificaco de confianza. Persona física.
`;

// Posición 15
var copropiedad = `
Iniciemos con la declaración, en primér lugar indicaremos si los ingresos son obtenidos a través de copropiedad. Si no sabes lo que significa recuerda preguntar a nuestro asistente virtual.
`;

// Posición 16
var seleccion_input_copropiedad = `
En este caso seleccionaremos la opcion de "No", ya que no fueron obtenidos a través de copropiedad.
`;

// Posición 17
var ingresos_efectivamente_cobrados_mostrar = `
Ahora veremos el apartado de ingresos efectivamente cobrados.
`;

// Posición 18
var facturas_vigentes = `
En este apartado se te mostraran las facturas vigentes al mes de la factura, en este caso en el mes seleccionado tenemos 2,597 en facturas vigentes, de igual forma nuestro total es de 2,597. Presiona cerrar para regresar a la parte anterior.
`;

// Posición 19
var desc_dev_bonif= `
Bien, ahora iremos a la parte de Descuentos, devoluciones y bonificaciones, le daremos click para CAPTURAR.
`;

// Posición 20
var desc_dev_bonif_2= `
Aquí podremos analizar si tenemos algun tipo de devolucion, descuentos o bonificaciones, da click en el apartado con contorno rojo.
`;

// Posición 21
var txt_desc_dev_bonif= `
Aqui pondremos 0 para indicar que no tenemos ningun descuento ni bonificación.
`;

// Posición 22
var disminuir_ingresos = `
El siguiente paso es configurar los ingresos a disminuir, selecciona la opción de CAPTURAR.
`;

// Posicón 23
var agregar_disminuir_ingreso = `
Se nos marca una advertencia debido a que por lo menos debe de haber un registro, por lo que para agregarlo haz click en el botón.
`;

// Posición 24
var seleccionar_concepto= `
En el apartado de Concepto seleccionaremos uno, presiona el apartado de seleccionar.
`;

// Posición 25
var concepto_disminuir = `
El concepto que vas a seleccionar es el de "Sin ingresos a disminuir" ya que no reportaremos algunos, pero en caso de ser necesario deberas seleccionar la opción correspondiente.
`;

// Posición 26
var seleccionar_importe = `
Nos iremos a la seccion donde dice importe.
`;

// Posición 27
var importe_disminuir = `
Como anteriormente seleccionaste la opción de sin ingresos a disminuir, el importe debe de ser 0.
`;

// Posición 28
var cerrar_apartado = `
Con los datos ya ingresados ahora cerremos este apartado.
`;

// Posición 29
var ingreso_adicional_1= `
Ahora vamos a la parte de ingresos adicionales, este es el penultimo apartado antes de terminar la seccion de ingresos.
`;

// Posición 30
var ingreso_adicional_2= `
Aquí indicaremos cualquier tipo de actividad que no se haya registrado su CFDI correspondiente o no tenga un prellenado. Daremos click en agregar.
`;

// Posición 31
var ingreso_adicional_3= `
Para este ejemplo no contaremos con ingresos adicionales por lo que le daremos en el apartado de " Sin ingresos adicionales ".
`;

// Posición 32
var ingreso_adicional_4= `
Pondremos un 0 dando a entender que claramente no tuvimos ingresos adicionales y seguiremos con los siguientes pasos.
`;

// Posición 33
var ingresos_totales = `
La última sección del apartado de ingresos es la del total de ingresos efectivamente cobrados, por lo que debes de hacer click en CAPTURAR
`;

// Posición 34
var ingresos_totales_2 = `
Al igual que en las secciones pasadas puedes ver la advertencia en rojo ya que no hay ningún monto agregado, selecciona la opción de AGREGAR.
`;

// Posición 35
var ingresos_totales_3 = `
Los conceptos siempre seran dependiendo la declaración, para este ejemplo utilizaremos el de "Actividad empresarial".
`;

// Posición 36
var ingresos_totales_4 = `
El importe será el total de los ingresos por lo que debes de ingresar: 2597.
`;

// Posición 37
var determinacion = `
Excelente, terminamos el apartado de ingresos, es momento de movernos a la seccion de determinación.
`;

// Posición 38
var isr_retenido_morales = `
Aquí volvemos a observar el monto final ingresado en la seccion anterior, ahora nos enfocaremos en la parte resaltada en rojo, iremos a " ver detalles " del ISR retenido por personas morales. Recuerda que 
si no sabes el significado puesdes recurrir a nuestro asistente virtual
`;

// Posición 39
var isr_retenido_ventana = `
Aquí tenemos el ISR retenido del mes, en la casilla marcada con rojo para este ejemplo, indicaremos que no tenemos ISR retenido. Dirígete a ese apartado.
`;

// Posición 40
var texto_isr_retenido = `
Aquí, como lo mencionamos anteriormente, no agregaremos ISR retenido, por lo que colocaremos un 0 para continuar. 
`;

// Posición 41
var apartado_pago = `
Finalizamos la seccion número 2 del ISR simplificado de confianza, por último iremos a la seccion de pago.
`;

// Posición 42
var compensaciones_aplicar = `
Aquí nos inicará con la casilla en rojo las compensaciones por aplicar, de la misma forma para este ejemplo indicaremos que no tenemos ninguna compensacion, para ello en primer lugar da click en seleccionar.
`;

// Posición 43
var no_compensaciones_aplicar = `
Una vez estando en la zona de seleccion, como lo indicamos anteriormente le pondremos que "no".
`;

// Posición 44
var final_guardar_isr = `
Perfecto, para finalizar el ISR simplificado de confianza, da click en guardar, justo en la parte superior derecha.
`;

// Posición 45
var inicio_iva_simplificado = `
Momento de continuar con la siguiente parte de la declaracion, seleccionaremos el IVA simplificado de confianza.
`;

// Posición 46
var iva_acreditable = `
En la declaracón del IVA se han llenado algunos datos basados en el ISR, por lo que no tendrás que modificar mucho. El principal que podemos ver remarcado en rojo es IVA acreditable del periodo, seleciona la opción de "CAPTURAR".
`;

// Posición 47
var iva_acreditable_actividades = `
El IVA acreditable es el impuesto efectivamente pagado en gastos realizados (compras y gastos) que cumplan con los requisitos fiscales (estrictamente indispensables). En este campo de actividades gravadas agrega 207. Este número siempre es calculado en base a la tasa.
`;

// Posición 48
var iva_actividades_gravadas = `
Los 207 que vas a agregar lo puedes calcular <a href='http://www.calculadorasat.com/calcular-iva' target="_blank">aquí</a> agregando la cantidad de 2597 y un porcentaje del 8 %.
`;

// Posición 49
var iva_actividades_mixtas = `
Aquí se captura el IVA pagado de actividades que no estén identificadas como gravadas. Para este ejemplo agrega un 0.
`;

// Posición 50
var iva_pago = `
Perfecto, hasta ahora muy sencillo ¿Verdad?, continua en la pestaña de "Pago".
`;

// Posición 51
var iva_pago_compensaciones = `
Aquí en el apartado de Pago puedes que los datos ya se han cargado, solo tienes que especificar compensaciones por aplicar. Se puede incluir compensaciones a las que se tiene derecho, por lo que deberás de capturarlos en las ventanas correspondientes. Para este ejemplo solo se marcará como "No".
`;

// Posición 52
var iva_pago_estimulos = `
De igual forma los para los estimulos selecciona la opción de "No".
`;

// Posición 53
var iva_completado = `
Con estos simples pasos se concluye la parte de IVA simplificado de confianza, haz click en "GUARDAR" para no perder tus cambios.
`;

// Posición 54
var enviar_declaracion = `
Ya tienes concluída la declaración de ambas obligaciones, puedes ver el monto a pagar. Para completar tu declaración haz click en "ENVIAR DECLARACIÓN".
`;

// Posición 55
var si_enviar = `
Lee con atención el texto y selecciona la opción de "SÍ".
`;

// Posición 56
var acuse_recibo = `
Este es el documento que se genera, es tu acuse de recibo. Para no perderlo selecciona la opción de descargar y de esta forma obtendras este archivo en PDF y podrás pagar en el banco llevandolo impreso.
`;

// HTML de tutorial
var HTML_text_declaraciones = [SAT_inicio, declaraciones, presenta_declaracion, login_declaraciones, 
                                inicio_declaraciones,declaracion_isr,
                                isr_pt1,isr_pt2,isr_pt3, isr_pt4,isr_pt5,isr_pt6,isr_final,iva_pt1, iva_pt2, finalizar_declaracion]

// Texto de guía tutorial
var tutorial_text_declaraciones = [inicio, RSC, opcion_RSC, iniciar_declaracion, login_tutorial, RFC_login, contrasena_login, captcha_login,
                                presentar_declaracion, configuracion_decla, configuracion_decla_periodicidad, configuracion_decla_periodo, configuracion_decla_tipo, configuracion_decla_final,decla_isr_inicio,
                                copropiedad,seleccion_input_copropiedad,ingresos_efectivamente_cobrados_mostrar,facturas_vigentes,desc_dev_bonif,desc_dev_bonif_2,txt_desc_dev_bonif,
                                disminuir_ingresos, agregar_disminuir_ingreso, seleccionar_concepto, concepto_disminuir, seleccionar_importe, importe_disminuir, cerrar_apartado,
                                ingreso_adicional_1,ingreso_adicional_2,ingreso_adicional_3, ingreso_adicional_4,
                                ingresos_totales, ingresos_totales_2, ingresos_totales_3, ingresos_totales_4,determinacion,isr_retenido_morales,isr_retenido_ventana,
                                texto_isr_retenido,apartado_pago,compensaciones_aplicar,no_compensaciones_aplicar,final_guardar_isr,
                                inicio_iva_simplificado, iva_acreditable, iva_acreditable_actividades, iva_actividades_gravadas, iva_actividades_mixtas, iva_pago, iva_pago_compensaciones, iva_pago_estimulos, iva_completado,
                                enviar_declaracion, si_enviar, acuse_recibo]