function startGame(){
    let petButton = document.getElementById("pet-button")
    petButton.addEventListener("click", playerPetSelection)
}

function playerPetSelection(){
    let inputFyre = document.getElementById("fyre")
    let inputSplash = document.getElementById("splash")
    let inputGrounda = document.getElementById("grounda")

    if(inputFyre.checked){
        alert("Seleccionaste a Fyre") 
    } else if (inputSplash.checked){
        alert("Seleccionaste a Splash")
    } else if (inputGrounda.checked){
        alert("Seleccionaste a Grounda")
    } else {
        alert("No has seleccionado mascota")
    }
}

window.addEventListener("load", startGame)
