setTimeout(() => {
    alert ("Levantate Neo...")



let primerEscenario

primerEscenario = prompt("Ya llegaron por ti Neo, voy a guiarte. Podes huir a la ultima oficina escribiendo HUIR o enfrentarlos escribiendo ENFRENTAR");

if (primerEscenario == "HUIR"){
    alert ("Muy bien, ya estamos cerca de escapar.")
}else {
    alert ("Te adverti que debias escapar, no se que te haran ahora...") 
    end   
}



let segundoEscenario

segundoEscenario = prompt("A tu izquierda hay una ventana para subir a la terraza, escribi SUBIR para escapar o SENTARSE si te dan miedo las alturas y queres quedarte en la oficina ");

if (segundoEscenario == "SUBIR"){
    alert ("Muy bien, me reunire contigo cuando antes y hablaremos de la Matrix")
}else {
    alert ("Te adverti que debias escapar, no se que te haran ahora...")
    end
}



let tercerEscenario

tercerEscenario = prompt("Bien, logramos escapar. No tengo tiempo para explicar que es la Matrix, debes verla. Si tomas la pastilla ROJA te llevo al pais de las maravillas. Si tomas la AZUL termina el camino y despertaras en tu cama creyendo lo que quieras creer...");

if (tercerEscenario == "ROJA"){
    alert ("Esto es Matrix, preparate porque vamos a empezar a entrenar")
}else {
    alert ("Todo esto fue un sueño?")
    end
}

alert ("Excenlente, estamos en un programa de entrenamiento, necesitaras aprender a pelear antes de salir ahi afuera, saber defenderte puede ser vital si te cruzas con un agente.")


let cuartoEscenario

cuartoEscenario = prompt ("Vamos con un poco de Kung Fu, intenta golpearme usando la palabra GOLPEAR, cuando sientas que estas listo para ir a la Matrix escribi RETROCEDER asi podemos irnos")



while (cuartoEscenario !== "RETROCEDER"){
    cuartoEscenario = prompt ("Intenta GOLPEAR de nuevo, sino RETROCEDER")
}

let quintoEscenario

alert ("Esto es la Matrix, creeme que no hay nada real ahi. Luego de ver al Oraculo, debemos volver, para eso tenemos que buscar un telefono")

prompt ("Pero cuidado! Un agente nos ataca, esquiva todos nuestros disparos. Recorda tu entrenamiento usando GOLPEAR sino RETROCEDER")

while (quintoEscenario !== "RETROCEDER"){
    quintoEscenario = prompt ("Intenta GOLPEAR de nuevo, sino RETROCEDER")
}


let sextoEscenario
let segundoPasillo
let tercerPasillo
let ultimoPasillo


alert ("Tenes que encontrar ese telefono, en el edificio de Wabash y Lake hay una salida! cuatro veces a la DERECHA")

function caminoEquivocado(){
    alert ("No! Elegiste el camino equivocado, hay que volver! Recorda que debemos ir a la DERECHA")
}

sextoEscenario = prompt ("Estas en el pasillo, IZQUIERDA o DERECHA?")

if (sextoEscenario == "DERECHA"){
    alert ("Bien, 3 veces mas")
}else {
    caminoEquivocado();
}


segundoPasillo = prompt ("Ya estamos mas cerca, IZQUIERDA o DERECHA?")

if (segundoPasillo == "DERECHA"){
    alert ("Bien, 2 veces mas")
}else {
    caminoEquivocado();
}

tercerPasillo = prompt ("Ya puedo escuchar el telefono sonar, IZQUIERDA o DERECHA?")

if (tercerPasillo == "DERECHA"){
    alert ("Bien, 1 vez mas")
}else {
    caminoEquivocado();
}

ultimoPasillo = prompt ("Ya casi, a la vuelta esta la habitacion, IZQUIERDA o DERECHA?")

if (ultimoPasillo == "DERECHA"){
    alert ("Perfecto, ya casi escapamos!!")
}else {
    caminoEquivocado();
}


alert ("Llegamos! Pero al abrir la puerta, del otro lado aparece el agente Smith para dispararnos a quemarropa. Es el final?")

alert ("...")

alert ("Pero algo pasa, de a poco te levantas, nadie entiende nada excepto Morfeo, que ilusionado expresa: ES EL ELEGIDO")

prompt ("Renvoado, atacas a Smith para destruirlo para siempre escribiendo ATACAR")

alert ("Smith resulta destruido y Neo escapa de la Matrix. Listo para dejar un mensaje a la humanidad.")














}, 5000);
