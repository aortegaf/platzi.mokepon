function startGame(){
    let petButton = document.getElementById("pet-button")
    petButton.addEventListener("click", playerPetSelection)
}

function playerPetSelection(){
    let inputFyre = document.getElementById("fyre")
    let inputSplash = document.getElementById("splash")
    let inputGrounda = document.getElementById("grounda")
    let spanPlayerPet = document.getElementById("player-pet")

    if(inputFyre.checked){
        spanPlayerPet.innerHTML = "Fyre"
    } else if (inputSplash.checked){
        spanPlayerPet.innerHTML = "Splash"
    } else if (inputGrounda.checked){
        spanPlayerPet.innerHTML = "Grounda"
    } else {
        alert("No has seleccionado mascota")
    }
}

window.addEventListener("load", startGame)
