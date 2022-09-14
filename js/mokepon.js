let playerAttack

function startGame(){
    let petButton = document.getElementById("pet-button")
    petButton.addEventListener("click", playerPetSelection)

    let fireButton = document.getElementById("fire-button")
    fireButton.addEventListener("click", fireAttack)
    let waterButton = document.getElementById("water-button")
    waterButton.addEventListener("click", waterAttack)
    let groundButton = document.getElementById("ground-button")
    groundButton.addEventListener("click", groundAttack)
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

    enemyPetSelection()
}

function random(min, max){
    return Math.floor(Math.random() * (max-min+1) + min)
}

function enemyPetSelection(){
    let petCode = random(1,3)
    let spanEnemyPet = document.getElementById("enemy-pet")

    if(petCode == 1){
        spanEnemyPet.innerHTML = "Fyre"
    } else if (petCode == 2){
        spanEnemyPet.innerHTML = "Splash"
    } else if (petCode == 3){
        spanEnemyPet.innerHTML = "Grounda"
    }
}

function fireAttack(){
    playerAttack = "Fuego 🔥"
    alert(playerAttack)
}

function waterAttack(){
    playerAttack = "Agua 💧"
    alert(playerAttack)
}

function groundAttack(){
    playerAttack = "Tierra 🌱"
    alert(playerAttack)
}

window.addEventListener("load", startGame)
