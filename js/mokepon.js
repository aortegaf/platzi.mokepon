let playerAttack
let enemyAttack
let playerLifes = 3
let enemyLifes = 3

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
    enemyRandomAttack()
}

function waterAttack(){
    playerAttack = "Agua 💧"
    enemyRandomAttack()
}

function groundAttack(){
    playerAttack = "Tierra 🌱"
    enemyRandomAttack()
}

function enemyRandomAttack(){
    let attackCode = random(1,3)

    if(attackCode == 1){
        enemyAttack = "Fuego 🔥"
    } else if (attackCode == 2){
        enemyAttack = "Agua 💧"
    } else if (attackCode == 3){
        enemyAttack = "Tierra 🌱"
    }

    fight()
}

function fight(){
    let spanPlayerPetLifes = document.getElementById("player-lifes")
    let spanEnemyPetLifes = document.getElementById("enemy-lifes")
    
    if(playerAttack == enemyAttack){
        attacksHistory("EMPATE")
    } else if((playerAttack == "Fuego 🔥" && enemyAttack == "Tierra 🌱") || (playerAttack == "Agua 💧" && enemyAttack == "Fuego 🔥") || (playerAttack == "Tierra 🌱" && enemyAttack == "Agua 💧")){
        attacksHistory("GANASTE")
        enemyLifes--
        spanEnemyPetLifes.innerHTML = enemyLifes
    } else {
        attacksHistory("PERDISTE")
        playerLifes--
        spanPlayerPetLifes.innerHTML = playerLifes
    }

    if(playerLifes == 0){
        fightFinalResult("TU MASCOTA FUE DERROTADA 💀")
    } else if(enemyLifes == 0) {
        fightFinalResult("TU MASCOTA SALIÓ VICTORIOSA 🥇")
    }
}

function attacksHistory(result){
    let attacksHistoryMessage = document.createElement("p")
    attacksHistoryMessage.innerHTML = "Atacaste con " + playerAttack +  " | El enemigo atacó con " + enemyAttack + "--> " + result

    let attacksHistorySection = document.getElementById("attacks-history")
    attacksHistorySection.appendChild(attacksHistoryMessage)
}

function fightFinalResult(finalResult){
    let fightResult = document.createElement("p")
    fightResult.innerHTML = finalResult

    let attacksHistorySection = document.getElementById("attacks-history")
    attacksHistorySection.appendChild(fightResult)
}

window.addEventListener("load", startGame)
