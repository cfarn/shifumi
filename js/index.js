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
    // setInterval()
    iaRandom.innerHTML = `<img src="img/${ia}.jpg" alt="" id="iaRandom">`

    // défilement des images aléatoires avant le choix
    // let f = () => {
    //     iaRandom = 0
    //     iaRandom += 1
    //     iaRandom.setAttribute(`<img src="img/${ia}.jpg" alt="" id="iaRandom">`)
    //     if(iaRandom == 3) {
    //         iaRandom.innerHTML = `<img src="img/${ia}.jpg" alt="" id="iaRandom">`
    //     }
    // }
    // window.setInterval('f()', 800)

    // setInterval(function() {
    //     iaRandom.innerHTML += `<img src="img/${ia}.jpg" alt="" id="iaRandom">`
    // }, 1000);



    // afficher le vainqueur
    winner()
}

// Déterminer le vainqueur
const winner = () => {
    if((player === "stone" && iaTxt === "scissors") || (player === "scissors" && iaTxt === "paper") || (player === "paper" && iaTxt === "stone")) {
        // console.log("Vous avez gagné !") 
        result = "Vous avez gagné !"
        // document.getElementById("border").style.border = "solid 3px red";
    }else if((player === "scissors" && iaTxt === "stone") || (player === "paper" && iaTxt === "scissors") || (player === "stone" && iaTxt === "paper")) {
        // console.log("L'IA a gagné")
        result = "Vous avez perdu !"
    }else if(player === iaTxt) {
        // console.log("Match nul")
        result = "Match nul"
    }
    // afficher le résultat
    gameResult.innerHTML = result
}

// afficher le score



// const element = document.getElementById("demo");
// setInterval(function() {
// element.innerHTML += "Hello"
// }, 1000);

// const iaRandom = document.getElementById('iaRandom').getAttribute('src')
