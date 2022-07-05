let player; ia

const iaRandom = document.getElementById('ia')
const signImg = document.getElementById('playerImg')
const resultDisplay = document.getElementById('gameResult')

// Choix du joueur
const playerChoice = (choice) => {
    player = choice
    // image du choix
    signImg.innerHTML = `<img src="img/${playerImg}.jpg" alt="" id="signImg">`
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

    // image du choix
    iaRandom.innerHTML = `<img src="img/${ia}.jpg" alt="" id="iaRandom">`

    winner()

    // setInterval(function() {
    //     iaRandom.innerHTML += 1
    //     }, 1000);


}

// Déterminer le vainqueur
const winner = () => {
    
    if((player === "stone" && ia === "scissors") || (player === "scissors" && ia === "paper") || (player === "paper" && ia === "stone")) {
        console.log("Vous avez gagné !") 
        // result = "Vous avez gagné !"
    }else if((player === "scissors" && ia === "stone") || (player === "paper" && ia === "scissors") || (player === "stone" && ia === "paper")) {
        console.log("Vous avez perdu")
        // result = "Vous avez perdu"
    }else if(player === ia) {
        console.log("Match nul")
        // result = "Match nul"
    }
    // afficher le résultat
    // gameResult.innerHTML = result
}





// const element = document.getElementById("demo");
// setInterval(function() {
// element.innerHTML += "Hello"
// }, 1000);

// const iaRandom = document.getElementById('iaRandom').getAttribute('src')
