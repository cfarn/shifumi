let player, ia, iaTxt

const iaRandom = document.getElementById('ia')
const signImg = document.getElementById('playerImg')
const resultDisplay = document.getElementById('gameResult')

// Choix du joueur
const playerChoice = (choice) => {
    player = choice
    let img 
    if(player==="stone"){
        img = 1
    }else if(player === "paper"){
        img = 2
    }else if(player === "scissors") {
        img = 3
    }
    // image du choix
    signImg.innerHTML = `<img src="img/${img}.jpg" alt="" id="signImg">`
    console.log(playerImg)
    // console.log("I clicked on my button")
    iaChoice()

}

// Choix de l'IA
const iaChoice = (choice) => {
    // génération aléatoire de 1 à 3
    const min = 1
    const max = 3
    choice = Math.floor(Math.random() * max) + min

    ia = choice
    if(ia === 1) {
        iaTxt = "stone"
    }else if(ia === 2) {
        iaTxt = "paper"
    }else if(ia === 3) {
        iaTxt = "scissors"
    }

    // image du choix
    iaRandom.innerHTML = `<img src="img/${ia}.jpg" alt="" id="iaRandom">`

    winner()

    // setInterval(function() {
    //     iaRandom.innerHTML += 1
    //     }, 1000);


}

// Déterminer le vainqueur
const winner = () => {
    if((player === "stone" && iaTxt === "scissors") || (player === "scissors" && iaTxt === "paper") || (player === "paper" && iaTxt === "stone")) {
        console.log("Vous avez gagné !") 
        result = "Vous avez gagné !"
    }else if((player === "scissors" && iaTxt === "stone") || (player === "paper" && iaTxt === "scissors") || (player === "stone" && iaTxt === "paper")) {
        console.log("Vous avez perdu")
        result = "Vous avez perdu"
    }else if(player === iaTxt) {
        console.log("Match nul")
        result = "Match nul"
    }
    // afficher le résultat
    gameResult.innerHTML = result
}





// const element = document.getElementById("demo");
// setInterval(function() {
// element.innerHTML += "Hello"
// }, 1000);

// const iaRandom = document.getElementById('iaRandom').getAttribute('src')
