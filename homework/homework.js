//Escriba aquí su código JavaScript:
const randomNumber = ()=> Math.ceil(Math.random() * 10)

const start = document.getElementById("start")

function crearDocFrag(contenedor,etiqueta,contenido,id) {
    let container
    try {
        container = document.querySelector(contenedor);
    } catch(e) {
        container = contenedor;
        console.log("El parametro no se puede seleccionar con query selector")
    }

    if (container.lastElementChild.getAttribute("id")==id) {
		container.removeChild(container.lastElementChild);
	}
    
    let textContainer = document.createElement(etiqueta);
    textContainer.innerHTML = contenido;
    container.appendChild(textContainer);
    if (id !== undefined) {
        container.lastElementChild.setAttribute("id", id)
    };
    
};

function startGame () {
    if (gameStatus == "on") {
        newRam = randomNumber()
        if (newRam == guessNumber) {
            newRam = randomNumber()
        } else {
            guessNumber = newRam
        }
        crearDocFrag("body","div",`<input type="Number" id="inputUser"><button type="submit" id="btnUser">Adivinar</button>`,"userTry");
        gameStatus = "started"
        
        if (gameStatus == "started") {
            const inputUser = document.getElementById("inputUser");
            const sendBtn = document.getElementById("btnUser");
            sendBtn.addEventListener("click", (e)=>{
                e.preventDefault();
                checkNumber()
            })
        }
    } else if (gameStatus == "finished"){
        try {
            document.getElementById("message").remove();
            document.getElementById("userTry").remove();
        } catch (e) {
            console.log(`Ocurrio un error, ${e}`)
        }
        gameStatus = "on";
        tries = 3;
    } 
    start.addEventListener("click",(e)=>{
    startGame();
})

}

function checkNumber() {
    let message

    if (gameStatus == "started") {
        if (inputUser.value < 1 || inputUser.value > 10) {
            message = "ingrese un numero valido entre 1 y 10"
        } else if (inputUser.value == guessNumber) {
            message = "¡Felicitaciones, ganaste!"
            gameStatus = "finished"
        } else if (inputUser.value !== guessNumber && tries <= 0){
            message = `Perdiste, el numero era ${guessNumber}`
            gameStatus = "finished"
        }  else /* if (inputUser.value !== guessNumber && tries > 0) */ {
            tries = tries -1
            let diff = Math.abs(guessNumber - inputUser.value);
            let help
            if (diff <= 3) {
                help = "caliente";
            } else if (diff > 3 && diff < 6) {
                help = "tibio";
            } else if (diff >= 6) {
                help = "frio"
            }
            message = `No acertaste, ${help}, te quedan ${tries + 1} intentos`;
     }
    showMessage(message)
}}

const showMessage = (msj) => {
    crearDocFrag("body","div",`<h2>${msj}</h2>`,"message")
}


let guessNumber
let tries = 3
let gameStatus = "on"


start.addEventListener("click",(e)=>{
    startGame();
})

