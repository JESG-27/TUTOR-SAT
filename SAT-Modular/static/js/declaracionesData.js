// HTML
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
    <input class="" type="button" onclick="siguiente(), actualizarTexto(3)" value="Presenta tu declaración de pagos mensuales..." id="opcionRSC">
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
    <input class="" type="button" onclick="siguiente(), actualizarTexto()" value="INICIAR">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(1)">
`;

// Posición 3
var login = `
<div class="tuto-window">
    <img class="" src="/static/images/Declaraciones/Login.png" alt="image">
</div>
<input class="atras" type="button" onclick="anterior(), actualizarTexto(3)">
`;

// Tutorial text
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


// HTML de tutorial
var HTML_text_declaraciones = [SAT_inicio, declaraciones, presenta_declaracion, login]

// Texto de guía tutorial
var tutorial_text_declaraciones = [inicio, RSC, opcion_RSC, iniciar_declaracion]