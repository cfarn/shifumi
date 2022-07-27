// variables
let player, ia, iaTxt
let round = 0
let playerScore = 0
let iaScore = 0

// elements
const iaRandom = document.getElementById('ia')
const signImg = document.getElementById('playerImg')
const resultDisplay = document.getElementById('gameResult')
const playerScoreDOM = document.getElementById("playerScore")
const iaScoreDOM = document.getElementById("iaScore")
const gameHistory = document.getElementById("gameHistory")
const empty = document.getElementById("empty")
const gameAera = document.getElementById("gameAera")

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
    // console.log(playerImg)
    
    // afficher le choix de l'IA
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

    // afficher le vainqueur
    winner()
}

// Déterminer le vainqueur
const winner = () => {
    round += 1

    if((player === "stone" && iaTxt === "scissors") || (player === "scissors" && iaTxt === "paper") || (player === "paper" && iaTxt === "stone")) {
        result = "Vous avez gagné !"
        handlePlayerWin() 
    }else if((player === "scissors" && iaTxt === "stone") || (player === "paper" && iaTxt === "scissors") || (player === "stone" && iaTxt === "paper")) {
        result = "Vous avez perdu !"
        handleIaWin()
    }else if(player === iaTxt) {
        result = "Match nul"
        handleDraw()
    }
    // afficher le résultat
    gameResult.innerHTML = result
    // afficher le score
    updateScore()
}

// historique
const createHistoryRound = (message) => {
    if (empty) {
      empty.remove()
    }

    gameHistory.innerHTML = gameHistory.innerHTML + `
    <div class="round">
      <h4>Round ${round}</h4>
      <h5>${message}</h5>
    <div>
  `
}

// afficher le score
const handlePlayerWin = () => {
    playerScore += 1
    createHistoryRound("Vous avez gagné")
}
  
const handleIaWin = () => {
    iaScore += 1
    createHistoryRound("Vous avez perdu")
}
  
const handleDraw = () => {
    createHistoryRound("Match nul")
}

const updateScore = () => {
    playerScoreDOM.innerHTML = playerScore
    iaScoreDOM.innerHTML = iaScore

    // scroll
    // gameHistory.scrollTop +=20

    if (playerScore === 3) {
        gameAera.innerHTML = `
          <h2>Vous avez gagné la partie !</h2>
          <button class="game-buttons" onclick="location.reload()">Retry ?</button>
        `
    }
    if (iaScore === 3) {
        gameAera.innerHTML = `
          <h2>L'IA a gagné la partie</h2>
          <button class="game-buttons" onclick="location.reload()">Retry ?</button>
        `
    }
}

