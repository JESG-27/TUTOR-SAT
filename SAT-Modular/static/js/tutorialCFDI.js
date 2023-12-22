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
    <img class="captura" src="/static/images/CFDI/SAT-inicio4-2.png" alt="image">
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
            <input class="pos4Password" type="password" placeholder="" required onclick="actualizarTexto(6)" id="contrasenaLogin">
            <input class="pos4Captcha" type="text" placeholder="" required onclick="actualizarTexto(7)" id="captcha">
            <input class="pos4Enviar" type="button" onclick="val_login()">
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
    <img class="capturaCorta" id="img65" src="/static/images/CFDI/Config-basica-pt2.png" alt="image">
    <img class="capturaCortaProducto" src="/static/images/CFDI/Config-basica-pt3.png" alt="image">
    <img class="captura"  id="imgAviso" src="/static/images/CFDI/Config-basica-pt4.png" alt="image">
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
    <img class="capturaCorta2" src="/static/images/CFDI/Config-basica-pt2-c1.png" alt="image" onload="scrollIntoView()">
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
    <img class="capturaCorta2" src="/static/images/CFDI/Config-basica-pt2-c2.png" alt="image" onload="scrollIntoView()">
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
    <img class="capturaCorta2" src="/static/images/CFDI/Config-basica-pt2-c3.png" alt="image" onload="scrollIntoView()">
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
    <img class="capturaCorta2" src="/static/images/CFDI/Config-basica-pt2-c4.png" alt="image" onload="scrollIntoView()">
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
    <img class="capturaCorta2" src="/static/images/CFDI/Config-basica-pt2-c5.png" alt="image" onload="scrollIntoView()">
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
    <img class="capturaCorta2" src="/static/images/CFDI/Config-basica-pt2-c6.png" alt="image" onload="scrollIntoView()">
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
    <img class="capturaCorta2" src="/static/images/CFDI/Config-basica-pt2-c7.png" alt="image" onload="scrollIntoView()">
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
    <img class="capturaCorta2" src="/static/images/CFDI/Config-basica-pt2-c8.png" alt="image" onload="scrollIntoView()">
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
    <img class="capturaCorta3" src="/static/images/CFDI/Config-basica-pt2-c9.png" alt="image" onload="scrollIntoView()">
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
    <input class="pos31Guardar" type="button" onclick="siguiente(), actualizarTexto(28)" value="">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(27)">
`;

// Posición 32
var config_avanzada_c3 = `
<div class="tuto-window">
    <img class="captura" id="capturaGris" src="/static/images/CFDI/Config-avanzada-c2.png" alt="image">
    <img class="capturaCorta" id="capturaGrisCorta" src="/static/images/CFDI/Config-avanzada-pt2.png" alt="image">
    <img class="captura" src="/static/images/CFDI/Config-avanzada-pt3-c3.png" alt="image" onload="scrollIntoView()">
    <input class="pos32Generar" type="button" onclick="siguiente(), actualizarTexto(28)" value="">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(27)">
`;

// Posición 33
var config_avanzada_c4 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Config-avanzada-c4.png" alt="image">
    <img class="capturaCorta" src="/static/images/CFDI/Config-avanzada-pt2.png" alt="image">
    <img class="captura" src="/static/images/CFDI/Config-avanzada-pt3.png" alt="image">
    <input class="pos33Nueva" type="button" onclick="siguiente(), actualizarTexto(29)" value="">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(28)">
`;

// Posición 34
var nueva_factura = `
<div class="tuto-window">
    <img class="capturaCorta2" src="/static/images/CFDI/Nueva-factura-pt1.png" alt="image">
    <img class="capturaCortaCFDI" src="/static/images/CFDI/Nueva-factura-pt2.png" alt="image">
    <img class="capturaCortaCFDI2" src="/static/images/CFDI/Nueva-factura-pt3.png" alt="image">
    <img class="capturaCorta" src="/static/images/CFDI/Nueva-factura-pt4.png" alt="image">
    <input  class="pos34Check" type="button" onclick="siguiente(), actualizarTexto(30)" value="">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(28)">
`;

// Posición 35
var nueva_factura_c1 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Nueva-factura-pt1-c1.png" alt="image">
    <img class="capturaCortaCFDI" src="/static/images/CFDI/Nueva-factura-pt2.png" alt="image">
    <img class="capturaCortaCFDI2" src="/static/images/CFDI/Nueva-factura-pt3.png" alt="image">
    <img class="captura" src="/static/images/CFDI/36-P4.png" alt="image">
    
    <div class="facturaglobal">
        <input class="pos35Per" type="text" list="lista_periodicidad" onclick="actualizarTexto(30)" onchange="FacturaGlobal_DatosCliente(1)" id="periodicidad">
        <datalist id="lista_periodicidad">
            <option selected class="pos35Pos" >Seleccione...</option>
            <option value="Diario">Diario</option>
            <option value="Semanal">Semanal</option>
            <option value="Quincenal">Quincenal</option>
            <option value="Mensual">Mensual</option>
        </datalist>

        <input class="pos35Mes" type="text" list="lista_meses" onclick="actualizarTexto(31)" onchange="FacturaGlobal_DatosCliente(2)" id="mes">
        <datalist id="lista_meses">
            <option selected class="pos35Pos" >Seleccione...</option>
            <option>Enero</option>
            <option>Febrero</option>
            <option>Marzo</option>
            <option>Abril</option>
            <option>Mayo</option>
            <option>Junio</option>
            <option value="Julio">Julio</option>
            <option>Agosto</option>
            <option>Septiembre</option>
            <option>Octubre</option>
            <option>Noviembre</option>
            <option>Diciembre</option>
        </datalist>
        
        <input type="text" class="pos35Anio" onclick="actualizarTexto(32)" onchange="FacturaGlobal_DatosCliente(3)" id="anio_factura_global">
    </div>

    <div class="espacio0">
        <div id="pos35" class="datoscliente">
                <form>
                    <input class="pos35Cliente"  type="text" onclick="actualizarTexto(33)" onchange="FacturaGlobal_DatosCliente(4)" id="clienteF" onkeyup="this.value = this.value.toUpperCase();">
                    
                    <input class="pos35Razon"  type="text" onclick="actualizarTexto(34)" id="razonsocial">

                    <input class="pos35Uso" type="text" onclick="actualizarTexto(35)" list="uso_factura" id="usofactura" onchange="FacturaGlobal_DatosCliente(5)">
                    <datalist id="uso_factura">
                        <option value="Adquisición de mercancías">
                        <option value="Aportaciones voluntarias al SAR">
                        <option value="Comunicaciones satelitales">
                        <option value="Comunicaciones telefónicas">
                        <option value="Construcciones">
                        <option value="Dados, troqueles, moldes, matrices y herramental">
                        <option value="Depósito en cuentas para el ahorro, primas que tengan como base planes de pensiones.">
                        <option value="Devoluciones, descuentos, bonificaciones">
                        <option value="Donativos">
                        <option value="Equipo de computo y accesorios">
                        <option value="Equipo de transporte">
                        <option value="Gastos de transportación escolar obligatoria.">
                        <option value="Gastos en general">
                        <option value="Gastos funerales">
                        <option value="Gastos médicos por incapacidad o discapacidad">
                        <option value="Honorarios médicos, dentales y gastos hospitalarios.">
                        <option value="Intereses reales efectivamente pagados por créditos hipotecarios (casa habitación).">
                        <option value="Mobilario y equipo de oficina por inversiones">
                        <option value="Nómina">
                        <option value="Otra maquinaria y equipo">
                        <option value="Pagos">
                        <option value="Pagos por servicios educativos (colegiaturas)">
                        <option value="Primas por seguros de gastos médicos.">
                        <option value="Sin efectos fiscales.">
                    </datalist>            

                    <input class="pos35Email" type="email" onclick="actualizarTexto(36)" id="correo" onchange="FacturaGlobal_DatosCliente(6)">

                    <input class="pos35Codigo" type="text" onclick="actualizarTexto(37)" id="codigop">

                    <input class="pos35CReg" type="text" onclick="actualizarTexto(38)" list="lista_regimen_fiscal" id="regimenfiscal" onchange="FacturaGlobal_DatosCliente(7)">
                    <datalist id="lista_regimen_fiscal">
                        <option value="Sin obligaciones fiscales">
                        <option value="Incorporación Fiscal">
                        <option value="Residentes en el Extranjero sin Establecimiento Permanente en México">
                    </datalist>
                    
                </form>
            </div>   
    </div>
            
    <input type="hidden" class="pos35Agregar" onclick="siguiente(), actualizarTexto(40)" value="" id="botonAgregar">
        
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(29)">
`;

// Posición 36
var nueva_factura_c2 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Nueva-factura-pt1-c2.png" alt="image">
    <img class="capturaCortaCFDI" src="/static/images/CFDI/Nueva-factura-pt2.png" alt="image">
    <img class="capturaCorta" src="/static/images/CFDI/Nueva-factura-pt3-c1.png" alt="image">
    <img class="captura" src="/static/images/CFDI/Nueva-factura-impuestos.png" alt="image" id="sugImpuesto">
    <img class="capturaCorta" src="/static/images/CFDI/Nueva-factura-pt3-c1-pt2.png" alt="image">
    <img class="capturaCorta" src="/static/images/CFDI/Nueva-factura-pt4.png" alt="image" id="imgfinal">
    <img class="capturaCorta2" src="/static/images/CFDI/Nueva-factura-pt5.png" alt="image">

    <div class="espacio1">
        <div class="facturaglobal">
                <input type="text" class="pos36Anio" onclick="actualizarTexto(32)" id="anio" readonly="" value="2023">
            </div>

            <div class="datoscliente">
                <input class="pos36RFC"  type="text" onclick="actualizarTexto(33)" id="clienteF" readonly="" value="XAXX010101000">
                <input class="pos36Pub"  type="text" onclick="actualizarTexto(34)" id="razonsocial" readonly="" value="PUBLICO EN GENERAL">
                <input class="pos36AFis" type="text" onclick="actualizarTexto(35)" id="usofactura" readonly="" value="Sin efectos fiscales.">
                <input class="pos36Cor" type="email" onclick="actualizarTexto(36)" id="correo" readonly="" value="cliente@mail.com">
                <input class="pos36Cod" type="text" onclick="actualizarTexto(37)" id="codigop" readonly="" value="59699">
                <input class="pos36Reg" type="text" onclick="actualizarTexto(38)" id="regimenfiscal" readonly="" value="Sin obligaciones fiscales">
            </div>
    </div>

    <div class="agregar-producto">
        <form>
            <input class="pos36Des" type="text" onclick="actualizarTexto(40)" id="descripcion" onkeyup="this.value = this.value.toUpperCase();" onchange="datosProducto('descripcion','prodServi')">
            
            <input class="" type="text" onclick="actualizarTexto(41)" id="prodServi" list="lista_producto_servicio" onchange="datosProducto('prodServi','unidadMed')">
            <datalist id="lista_producto_servicio">
                <option value="Público en general">01010101 Público en general</option>
            </datalist>

            <input class="pos36Uni" type="text" onclick="actualizarTexto(42)" id="unidadMed" list="lista_unidad_medida" onchange="datosProducto('unidadMed','cantidad')">
            <datalist id="lista_unidad_medida">
                <option value="Actividad">
                <option value="Unidad activa">
                <option value="Actual 360">
            </datalist>

            <input class="" type="number" onclick="actualizarTexto(43)" id="cantidad" onchange="datosProducto('cantidad','valorUni')">
            <input class="" type="number" onclick="actualizarTexto(44)" id="valorUni" onchange="datosProducto('valorUni','importe')">
            <input class="" type="number" onclick="actualizarTexto(45)" value="0.00" id="importe" readonly="">
            <input class="" type="number" onclick="actualizarTexto(46)" id="descuento" readonly="">

            <input class="" type="text" onclick="actualizarTexto(47)" id="objImpuesto" list="lista_impuesto" onchange="datosProducto('objImpuesto','numeroIden')">
            <datalist id="lista_impuesto">
                <option>No objeto de impuesto</option>
                <option value="Si objeto de impuesto">Si objeto de impuesto</option>
                <option>No objeto de impuesto y no obligación desglose</option>
            </datalist>

            <input class="" type="text" onclick="actualizarTexto(48)" id="numeroIden" onchange="datosProducto('numeroIden','tasa')">
            <input class="" type="button" onclick="imagen('sugImpuesto','static/images/CFDI/Impuesto 2.png');actualizarTexto(49)" id="tasa">
            <input class="" type="button" onclick="siguiente();actualizarTexto(50)" id="save">

        </form>
    </div>

</div>

<input class="atras" type="button" onclick="anterior(), actualizarTexto(30)">
`;

// Posición 37
var nueva_factura_c3 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Nueva-factura-pt1-c2.png" alt="image">
    <img class="capturaCortaCFDI" src="/static/images/CFDI/Nueva-factura-pt2.png" alt="image">
    <img class="capturaCorta3" src="/static/images/CFDI/Final.png" alt="image"3>
    <img class="capturaCorta2" src="/static/images/CFDI/Nueva-factura-pt5.png" alt="image">

    <div class="espacio2">
        <div class="facturaglobal">
            <input type="text" class="pos37Anio" onclick="actualizarTexto(32)" id="anio" readonly="" value="2023">
        </div>

        <div class="datoscliente">
            <input class="pos37RFC"  type="text" onclick="actualizarTexto(33)" id="clienteF" readonly="" value="XAXX010101000">
            <input class="pos37Pub"  type="text" onclick="actualizarTexto(34)" id="razonsocial" readonly="" value="PUBLICO EN GENERAL">
            <input class="pos37AFis" type="text" onclick="actualizarTexto(35)" id="usofactura" readonly="" value="Sin efectos fiscales.">
            <input class="pos37Cor" type="email" onclick="actualizarTexto(36)" id="correo" readonly="" value="cliente@mail.com">
            <input class="pos37Cod" type="text" onclick="actualizarTexto(37)" id="codigop" readonly="" value="59699">
            <input class="pos37Reg" type="text" onclick="actualizarTexto(38)" id="regimenfiscal" readonly="" value="Sin obligaciones fiscales">
        </div>
    </div>

    <input class="pos37sellar" type="button" onclick="siguiente();actualizarTexto(51)" value="">

</div>

<input class="atras" type="button" onclick="anterior(), actualizarTexto(40)">
`;

// Posición 38
var nueva_factura_c4 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/Factura.png" alt="image" id="firma">
    <img class="capturaCorta2" src="/static/images/CFDI/FacturaFinalAbajo.png" alt="image">

    
    <input class="" type="button" onclick="imagen('firma','/static/images/CFDI/Factura2.png');ocultarinput('key');mostrarinput('fiel');actualizarTexto(52)" id="key" value="">
    <input class="" type="button" onclick="imagen('firma','/static/images/CFDI/Factura3.png');ocultarinput('fiel');mostrarinput('abrir');actualizarTexto(53)" id="fiel" value="">
    <input class="" type="button" onclick="imagen('firma','/static/images/CFDI/Factura4.png');ocultarinput('abrir');mostrarinput('cer');actualizarTexto(54)" id="abrir" value="" >
    <input class="" type="button" onclick="imagen('firma','/static/images/CFDI/Factura5.png');ocultarinput('cer');mostrarinput('fiel2');actualizarTexto(55)" id="cer" value="">
    <input class="" type="button" onclick="imagen('firma','/static/images/CFDI/Factura6.png');ocultarinput('fiel2');mostrarinput('abrir2');actualizarTexto(56)" id="fiel2" value="" >
    <input class="" type="button" onclick="imagen('firma','/static/images/CFDI/Factura7.png');ocultarinput('abrir2');mostrarinput('contrasena');actualizarTexto(57)" id="abrir2" value="" >
    <input class="" type="password" onclick="actualizarTexto(58)" onchange="contrasenaEfirma('contrasena','conf')" id="contrasena">
    <input class="" type="button" onclick="imagen('firma','/static/images/CFDI/Factura8.png');ocultarinput('conf');mostrarinput('fir');actualizarTexto(59)" id="conf">
    <input class="" type="button" onclick="imagen('firma','/static/images/CFDI/FacturaFinal.png');ocultarinput('fir');ocultarinput('contrasena');mostrarinput('desc');actualizarTexto(60)" id="fir">
    <input class="" type="button" onclick="imagen('firma','/static/images/CFDI/FacturaFinal2.png');ocultarinput('desc');mostrarinput('vista');actualizarTexto(61)" id="desc">
    <input class="" type="button" onclick="siguiente();actualizarTexto(62)" id="vista">
   

</div>

<input class="atras" type="button" onclick="anterior(), actualizarTexto(50)">
`;

// Posición 39
var nueva_factura_c5 = `
<div class="tuto-window">
    <img class="captura" src="/static/images/CFDI/FacturaVistazo.png" alt="image">
    <button class="terminar"><a href="/tutoriales">Terminar</a></button> 
    
</div>

<input class="atras" type="button" onclick="anterior(), actualizarTexto(51)">
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
Una vez dentro ubica y haz click en "Servicio de facturación CFDI versión 4.0"
`;

// Posición 3
var boton_ejecutar_linea = `
Puedes ver información referente a la facturación, para comenzar haz click en "EJECUTAR EN LINEA"
`;

// Posición 4
var login = `
Aquí se realiza el inicio de sesión, no se requiere al e.firma en esta parte, aunque si la necesitaras para firmar el aviso de privacidad.
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
var engrane_opciones = `
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

// Posicion 28
var opcion_generar = `
Estos eran los unicos datos necesarios para la configuración avanzada, con esto puedes iniciar a generar tu factura. Haz click en "Generar" y selecciona la opción de "Nueva Factura"
`;

// Posicion 29
var nueva_factura_inicio = `
¡Vaz muy bien! Ahora te encuentras en el apartado para generar tu factura, si pones atención en la parte superior de este apartado se encuentran los datos que configuraste anteriormente. El siguiente paso es que selecciones el recuadro correspondiente a "Es una Factura Global"
`;

// Posicion 30
var nueva_factura_global = `
Con esto se desplegaron 3 campos que debes de llenar, comienza con el de "Periodicidad" en este caso selecciona "mensual" (Puedes generar una  factura como mínimo o varias al mes y no hay límite de importe). Al finalizar ingresa el mes correspondiente
`;

// Posicion 31
var nueva_factura_global_mes = `
Ingresa el mes correspondiente a esta factura el cual será "Julio", de la misma forma el año en el siguiente apartado.
`;

// Posicion 32
var nueva_factura_global_anio = `
Ingresa el año correspondiente a esta factura, para este ejemplo será "2023". Al finalizar el agregado de estos datos comienza con los "Datos del Cliente".
`;

// Posicion 33
var nueva_factura_global_cliente = `
En el apartado cliente ingresa al cliente "XAXX010101000" que corresponde al de público en general.
`;

// Posicion 34
var nueva_factura_global_razon = `
Cuando seleccionaste al cliente este apartado fue autocompletado por PÚBLICO EN GENERAL.
`;

// Posicion 35
var nueva_factura_global_uso = `
En el apartado de uso de factura selecciona la opcion de SIN EFECTOS FISCALES.
`;

// Posicion 36
var nueva_factura_global_correo = `
En este apartado ingresa el correo electronico del cliente, como ejemplo agrega "cliente@mail.com".
`;

// Posicion 37
var nueva_factura_global_codigop = `
El codigo postal también fue autocompletado con la seleccion del cliente.
`;

// Posicion 38
var nueva_factura_global_regimen = `
Por ultimo para poder completar los datos del ciente en el campo "Régimen Fiscal" selecciona la opcion SIN OBLIGACIONES FISCALES.
`;

// Posicion 39
var nueva_factura_global_agregar = `
Ya completaste todos estos datos, ahora hay que seguir con agregar un producto, haz click en el botón de "Agregar".
`;

// Posicion 40
var descripcion_producto = `
En este campo se debe registrar la descripción del bien o servicio propio de la empresa por cada concepto. Agrega en el campo "venta"
`;

// Posicion 41
var producto_servicio = `
En este campo se debe registrar una clave que permita clasificar los conceptos del comprobante como productos o servicios. De igual forma que en el cliente, aquí será para público en general y su clave correspondiente es "01010101"
`;

// Posicion 42
var unidad_medida = `
En este campo se puede registrar la unidad de medida del bien o servicio propio de la operación del emisor, aplicable para la cantidad expresada en cada concepto. En este campo debes de agregar la unidad de "Actividad".
`;

// Posicion 43
var cantidad = `
En este campo se debe registrar la cantidad de bienes o servicios que correspondan a cada concepto, puede contener de cero hasta seis decimales. Para este ejemplo agrega un "1".
`;

// Posicion 44
var valor_unitario = `
En este campo se debe registrar el valor o precio unitario del bien o servicio por cada concepto, el cual puede contener de cero hasta seis decimales. Para este ejemplo agrega "1500"
`;

// Posicion 45
var importe = `
Se debe registrar el importe total de los bienes o servicios de cada concepto. Debe ser equivalente al resultado de multiplicar la cantidad por el valor unitario expresado en el concepto, el cual debe ser calculado por el sistema
`;

// Posicion 46
var descuento = `
Se puede registrar el importe de los descuentos aplicables a cada concepto, debe tener hasta la cantidad de decimales que tenga registrado en el campo importe del concepto y debe ser menor o igual al campo Importe. En este caso no es necesario que agregues un descuento.
`;

// Posicion 47
var objeto_impuesto = `
Se debe registrar la clave correspondiente para indicar si la operación comercial es objeto o no de impuesto. Selcciona "Si objeto de impuesto".
`;

// Posicion 48 
var numero_identificacion = `
En este campo se puede registrar el número de parte, identificador del producto o del servicio, la clave de producto o servicio, SKU (número de referencia) o equivalente, propia de la operación del contribuyente. En este caso ingresa "EJEMPLO01"
`;

// Posicion 49
var tasa = `
Finalmente da clic en el botón Guardar para que sea cargado el producto, verifica en el recuadro Totales el importe final de tu factura si está correcto.
`;

// Posicion 50
var guardar = `
Datos guardados con exito, es hora de sellar la factura.
`;

// Posicion 51
var sellar = `
Una vez dado click en sellar, es hora de firmar el comprobante. Ve al apartado de buscar la clave privada. 
`;

// Posicion 52
var key = `
Selecciona la clave privada, que es el archivo llamado Claveprivada_FIEL_
`;

// Posicion 53
var fiel = `
Ahora presiona abrir para cargarla en el campo correspondiente.
`;

// Posicion 54
var abrir = `
Ahora seguimos con el certificado, presiona buscar en su apartado.
`;

// Posicion 55
var cer = `
De igual forma este archivo se encuentra en tu USB de la e.firma, selecciona el certificado que es el archivo con la nomenclatura .cer.
`;

// Posicion 56
var fiel2 = `
Ahora presiona abrir para que se cargue el certificado en el campo necesario.
`;

// Posicion 57
var abrir2 = `
Ahora debes de colocar tu contraseña de clave privada. Para este ejemplo será sat-sim, pero recuerda que tus contraseñas deben de ser fuertes.
`;

// Posicion 58
var pass = `
Aqui colocaras la contraseña de la e.firma (para este ejemplo: sat-sim). Recuerda que esta contraseña fue la que definiste al tramitar tu e.firma.
`;

// Posicion 59
var conf = `
Una vez confirmado se necesita de firmar. Presiona el boton Firmar.
`;

// Posicion 60
var fir = `
Una vez firmado nos vamos al apartado de acciones donde se descargará un archivo, ignoralo de momento y para más facilidad da click el la flecha debajo de el texto "acciones", ahí te descargará un archivo PDF.
`;

// Posicion 61
var desc = `
En tu apartado de descargaras encontrarás un archivo con extencion PDF, ese será nuestro archivo final con el comprofante de la factura da click en "Abrir archivo".
`;

// Posicion 62
var pdf = `
Finalmente tenemos nuestro comprobante, este es un ejemplo de un documento real, ahora presiona terminar para para regresar a nuestro apartado de tutoriales. 
`;

// Posicion 63
var avisoTermCond = `
Este aviso de Terminos y Condiciones solo se mostrará la primera vez que realices este proceso, leelo con atención y agrega la información correspondiente. El RFC se llena de manera automática y lo primero que debes agregar es tu Clave Privada (.key). Esta debe de estar en la USB donde debes de tener tu e.firma, haz click en "Buscar".
`;

// Posicion 64
var carpetaFiel = `
Desde la USB de tu e.firma ubica la carpeta nombrada FIEL_ y seleccionala.
`;

// Posicion 65
var avisoCompleto = `
Con esto se queda confirmado y firmado tu aviso de Terminos y Condiciones. Esto solo será la primera vez que realices una factura o a menos que los terminos cambien. Presiona en Siguiente.
`;

var HTML_text = [SAT_inicio0, SAT_inicio1, SAT_inicio2, SAT_inicio3, Login1, config_pt1, config_pt2, config_datos_emisor, config_datos_emisor_engrane, config_basica, config_basica_regimen_fiscal,
    config_basica_c1, config_basica_c2, config_basica_c3, config_basica_c4, config_basica_c5, config_basica_c6, config_basica_c7, config_basica_c8,
    config_basica_pt2_c1, config_basica_pt2_c2, config_basica_pt2_c3, config_basica_pt2_c4, config_basica_pt2_c5, config_basica_pt2_c6, config_basica_pt2_c7, config_basica_pt2_c8, config_basica_pt2_c9, config_basica_c9,
    config_avanzada, config_avanzada_c1, config_avanzada_c2, config_avanzada_c3, config_avanzada_c4,
    nueva_factura, nueva_factura_c1, nueva_factura_c2, nueva_factura_c3, nueva_factura_c4, nueva_factura_c5]

var tutorial_text = [boton_factura_electronica, boton_servicios_facturacion, boton_facturacion_cuentas, boton_ejecutar_linea, login,
    RFC_login, contrasena_login, captcha_login, datos_incorrectos,
    engrane_opciones, opcion_datos_emisor, registro_emisor, nombre_razon_social, nombre_comercial, registro_emisor_guardado, opcion_basica,
    config_basica_inicio, regimen_fiscal, favorito, tipo_de_factura, codigo_postal, moneda, forma_pago, metodo_pago, config_basica_fin,
    opcion_avanzada, serie_folio, factura_global, opcion_generar,
    nueva_factura_inicio, nueva_factura_global, nueva_factura_global_mes, nueva_factura_global_anio, nueva_factura_global_cliente,
    nueva_factura_global_razon, nueva_factura_global_uso, nueva_factura_global_correo, nueva_factura_global_codigop, nueva_factura_global_regimen, nueva_factura_global_agregar,
    descripcion_producto, producto_servicio, unidad_medida, cantidad, valor_unitario, importe, descuento, objeto_impuesto, numero_identificacion, tasa, guardar, sellar,
    key, fiel, abrir, cer, fiel2, abrir2, pass, conf, fir, desc, pdf, avisoTermCond, carpetaFiel, avisoCompleto]


// Actualizar textos de tutorial
async function actualizarTexto(pos) {
    document.getElementById("tutorialText").innerHTML = tutorial_text[pos]
}

// Regresar al paso anterior
async function anterior() {
    contador = contador - 2
    siguiente();
}

// Continuar al paso siguiente
async function siguiente() {
    contador = contador + 1
    console.log(contador)
    document.getElementById("tuto-window").innerHTML = HTML_text[contador]
}

// Validación de inicio de sesión
async function val_login() {
    RFC = document.getElementById("RFC").value
    contrasena = document.getElementById("contrasenaLogin").value
    captcha = document.getElementById("captcha").value
    // RFC == "ABCD123456XXX" && contrasena == "sat-sim" && captcha == "RP6VTL"
    if (true) {
        document.getElementById("tuto-window").innerHTML = `
        <div class="tuto-window">
            <img class="capturaNav" src="/static/images/CFDI/FirmaEncabezado.png" alt="image">
            <img class="captura" id="imgAviso" src="/static/images/CFDI/Aviso1.png" alt="image">
            <img class="capturaCorta3" id="imgAviso2" src="/static/images/CFDI/Aviso2.png" alt="image">
            <img class="captura" src="/static/images/CFDI/Aviso3.png" alt="image" id="aviso3">

            <input class="" type="button" onclick="imagen('aviso3','/static/images/CFDI/Firma1.png'); ocultarinput('buscarKey'); mostrarinput('Fiel_'); actualizarTexto(64)" id="buscarKey" value="">
            <input class="" type="button" onclick="imagen('aviso3','/static/images/CFDI/Firma2.png'); ocultarinput('Fiel_'); mostrarinput('claveprivada'); actualizarTexto(52)" id="Fiel_" value="">
            <input class="" type="button" onclick="imagen('aviso3','/static/images/CFDI/Firma3.png'); ocultarinput('claveprivada'); mostrarinput('abrirkey'); actualizarTexto(53)" id="claveprivada" value="">
            <input class="" type="button" onclick="imagen('aviso3','/static/images/CFDI/Firma4.png'); ocultarinput('abrirkey'); mostrarinput('buscarCer'); actualizarTexto(54)" id="abrirkey" value="" >
            <input class="" type="button" onclick="imagen('aviso3','/static/images/CFDI/Firma5.png'); ocultarinput('buscarCer'); mostrarinput('cer_'); actualizarTexto(55)" id="buscarCer" value="" >
            <input class="" type="button" onclick="imagen('aviso3','/static/images/CFDI/Firma6.png'); ocultarinput('cer_'); mostrarinput('abrircer'); actualizarTexto(56)" id="cer_" value="" >
            <input class="" type="button" onclick="imagen('aviso3','/static/images/CFDI/Firma7.png'); ocultarinput('abrircer'); mostrarinput('contrasena2'); actualizarTexto(57)" id="abrircer" value="" >
            <input class="" type="password" onclick="actualizarTexto(58)" onchange="contrasenaEfirma('contrasena2','confirmar')" id="contrasena2">
            <input class="" type="button" onclick="imagen('aviso3','/static/images/CFDI/Firma8.png'); ocultarinput('confirmar'); mostrarinput('firmarAviso'); actualizarTexto(59)" id="confirmar" value="">
            <input class="" type="button" onclick="imagen('aviso3','/static/images/CFDI/Firma9.png'); ocultarinput('firmarAviso'); mostrarinput('TermCondiSiguiente'); actualizarTexto(65)" id="firmarAviso" value="">
            <input class="" type="button" onclick="siguiente(); actualizarTexto(9)" id="TermCondiSiguiente" value="">
        </div>
        <input class="atras" type="button" onclick="anterior(), siguiente(), actualizarTexto(4)">
        `;
        actualizarTexto(63)
    }

    else {
        actualizarTexto(8)
        document.getElementById("RFC").value = ""
        document.getElementById("contrasenaLogin").value = ""
        document.getElementById("captcha").value = ""
    }
}

// Validar contraseña de clave privada 
async function contrasenaEfirma(contrasena, inpsiguiente) {
    contrasena = document.getElementById(contrasena)

    if (contrasena.value == "sat-sim") {
        contrasena.setAttribute("readonly", "")
        mostrarinput(inpsiguiente)
        document.getElementById("contrasena").style.bottom = "714px";
        document.getElementById("tutorialText").innerHTML = "Perfecto, presiona en Confirmar"
    }
    else {
        document.getElementById("tutorialText").innerHTML = "Parece que cometiste un error, a todos nos a pasado. Intenta escribir la contraseña de nuevo"
    }
}

// Validación de registro de emisor
async function val_registro_emisor() {
    RFC = document.getElementById("RFC").value
    nombre = document.getElementById("nombre").value
    if (RFC == "ABCD123456XXX" && nombre == "NOMBRE LEGAL") {
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
    else {
        actualizarTexto(8)
        document.getElementById("RFC").value = ""
        document.getElementById("nombre").value = ""
    }
}

// Factura CFDI

// Cliente frecuente
async function cliente() {
    rfc_cliente = document.getElementById("clienteF")
    if (rfc_cliente.value = "XAXX010101000") {
        document.getElementById(razonsocial.value = "PUBLICO EN GENERAL")
        document.getElementById(codigop.value = "59699")
    }
}

// Validación de datos ingresados inicialmente
var validacion_complete = 0
async function FacturaGlobal_DatosCliente(campo) {
    switch (campo) {
        case 1:
            periodicidad = document.getElementById("periodicidad")
            if (periodicidad.value == "Mensual" && periodicidad.hasAttribute("readonly") == false) {
                document.getElementById("periodicidad").setAttribute("readonly", "")
                validacion_complete += 1
            }
            else {
                if (periodicidad.hasAttribute("readonly") == false) {
                    document.getElementById("tutorialText").innerHTML = "Al parecer elegiste la periodicidad incorrecta, recuerda que aquí estas aprendiendo"
                }
            }
            break

        case 2:
            mes = document.getElementById("mes")
            if (mes.value == "Julio" && mes.hasAttribute("readonly") == false) {
                document.getElementById("mes").setAttribute("readonly", "")
                validacion_complete += 1
            }
            else {
                if (mes.hasAttribute("readonly") == false) {
                    document.getElementById("tutorialText").innerHTML = "Al parecer elegiste el mes incorrecto, recuerda que aquí estas aprendiendo"
                }
            }
            break

        case 3:
            anio = document.getElementById("anio_factura_global")
            if (anio.value == "2023" && anio.hasAttribute("readonly") == false) {
                document.getElementById("anio_factura_global").setAttribute("readonly", "")
                validacion_complete += 1
            }
            else {
                if (mes.hasAttribute("readonly") == false) {
                    document.getElementById("tutorialText").innerHTML = "Al parecer elegiste el año incorrecto, recuerda que aquí estas aprendiendo"
                }
            }
            break

        case 4:
            clienteF = document.getElementById("clienteF")
            if (clienteF.value == "XAXX010101000" && clienteF.hasAttribute("readonly") == false) {
                document.getElementById("razonsocial").value = "PUBLICO EN GENERAL"
                document.getElementById("codigop").value = "59699"
                document.getElementById("clienteF").setAttribute("readonly", "")
                document.getElementById("razonsocial").setAttribute("readonly", "")
                document.getElementById("codigop").setAttribute("readonly", "")
                validacion_complete += 1
            }
            else {
                if (mes.hasAttribute("readonly") == false) {
                    document.getElementById("tutorialText").innerHTML = "Ingresaste el RFC del cliente de manera incorrecta, vuelve a intentarlo"
                }
            }
            break

        case 5:
            usofactura = document.getElementById("usofactura")
            if (usofactura.value == "Sin efectos fiscales." && usofactura.hasAttribute("readonly") == false) {
                document.getElementById("usofactura").setAttribute("readonly", "")
                validacion_complete += 1
            }
            else {
                if (usofactura.hasAttribute("readonly") == false) {
                    document.getElementById("tutorialText").innerHTML = "No seleccionaste la opción correcta, que bien que esta es una simulación"
                }
            }
            break

        case 6:
            correo = document.getElementById("correo")
            if (correo.value == "cliente@mail.com" && correo.hasAttribute("readonly") == false) {
                document.getElementById("correo").setAttribute("readonly", "")
                validacion_complete += 1
            }
            else {
                if (correo.hasAttribute("readonly") == false) {
                    document.getElementById("tutorialText").innerHTML = "Cometiste un error, a todos nos a pasado. Intenta escribir el correo de nuevo"
                }
            }
            break

        case 7:
            regimenfiscal = document.getElementById("regimenfiscal")
            if (regimenfiscal.value == "Sin obligaciones fiscales" && regimenfiscal.hasAttribute("readonly") == false) {
                document.getElementById("regimenfiscal").setAttribute("readonly", "")
                validacion_complete += 1
            }
            else {
                if (regimenfiscal.hasAttribute("readonly") == false) {
                    document.getElementById("tutorialText").innerHTML = "Vaya no elegiste el regimen correcto y es muy importante"
                }
            }
            break
    }
    if (validacion_complete == 7) {
        actualizarTexto(39)
        document.getElementById("botonAgregar").setAttribute("type", "button")
    }
}

// Validación agregar producto
async function datosProducto(actual, siguiente) {
    inputActual = document.getElementById(actual)
    inputSiguiente = document.getElementById(siguiente)

    console.log(inputActual.value)

    if (actual == 'descripcion' && inputActual.value == "VENTA") {
        inputActual.setAttribute("readonly", "")
        document.getElementById("prodServi").style.display = "inline-block";
        document.getElementById("tutorialText").innerHTML = "Continua en el campo de Producto o Servicio"
    }
    else if (actual == 'prodServi' && inputActual.value == "Público en general") {
        inputActual.setAttribute("readonly", "")
        inputSiguiente.style.display = "inline-block";
        document.getElementById("tutorialText").innerHTML = "Continua en el campo de Unidad de Medida"
    }
    else if (actual == 'unidadMed' && inputActual.value == "Actividad") {
        inputActual.setAttribute("readonly", "")
        inputSiguiente.style.display = "inline-block";
        document.getElementById("tutorialText").innerHTML = "Continua en el campo de cantidad"
    }
    else if (actual == 'cantidad' && inputActual.value == "1") {
        inputActual.setAttribute("readonly", "")
        inputSiguiente.style.display = "inline-block";
        document.getElementById("tutorialText").innerHTML = "Continua en el campo de valor"
    }
    else if (actual == 'valorUni' && inputActual.value == "1500") {
        inputActual.setAttribute("readonly", "")
        inputSiguiente.value = "1500"
        document.getElementById("tutorialText").innerHTML = "Continua en el campo de objeto de impuesto"
        document.getElementById("importe").style.display = "inline-block";
        document.getElementById("descuento").style.display = "inline-block";
        document.getElementById("objImpuesto").style.display = "inline-block";
    }
    else if (actual == 'objImpuesto' && inputActual.value == "Si objeto de impuesto") {
        inputActual.setAttribute("readonly", "")
        document.getElementById("tutorialText").innerHTML = "Continua en el campo de número de identificación"
        document.getElementById("numeroIden").style.display = "inline-block";
        document.getElementById("importe").style.bottom = "2053px";
        document.getElementById("descuento").style.bottom = "2053px";
        document.getElementById("objImpuesto").style.bottom = "1999px";
        document.getElementById("tasa").style.display = "inline-block";
        document.getElementById("save").style.display = "inline-block";
    }
    else if (actual == 'numeroIden' && inputActual.value == "EJEMPLO01") {
        inputActual.setAttribute("readonly", "")
        document.getElementById("tutorialText").innerHTML = "Es momento de configurar el IVA a cobrar, da click en el apartado de 'Tasa' debajo de el IVA cobrado"

    }
    else {
        document.getElementById("tutorialText").innerHTML = "Parece que cometiste un error, a todos nos a pasado. Intenta escribir el valor de nuevo"
    }
}

// MOSTRAR INPUT
async function mostrarinput(id) {

    inputActual = document.getElementById(id)
    inputActual.style.display = "inline-block";
}
// OCULTAR INPUT
async function ocultarinput(id) {

    inputActual = document.getElementById(id)
    inputActual.style.display = "none";
}

// Cambiar imagen
async function imagen(id, nuv) {
    img = document.getElementById(id);
    img.src = nuv;
}

// Funciones para el desarrollo
async function mover() {
    posicion = document.getElementById("paso").value
    contador = parseInt(posicion)
    document.getElementById("tuto-window").innerHTML = HTML_text[posicion];
}

async function mostrar() {
    posicion = document.getElementById("paso").value
    document.getElementById("tutorialText").innerHTML = tutorial_text[posicion];
}
