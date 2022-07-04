let player; ia
const iaRandom = document.getElementById('ia')
const signImg = document.getElementById('playerImg')

// let 1 = document.get

// Choix du joueur
const playerChoice = (choice) => {
    player = choice
    signImg.innerHTML = `<img src="img/${playerImg}.jpg" alt="" id="signImg">`
    // console.log("I clicked on my button")
    iaChoice()

}

// Choix de l'IA
const iaChoice = (choice) => {
    const min = 1
    const max = 3
    choice = Math.floor(Math.random() * max) + min
    ia = choice

    iaRandom.innerHTML = `<img src="img/${ia}.jpg" alt="" id="iaRandom">`

    result()

    // setInterval(function() {
    //     iaRandom.innerHTML += 1
    //     }, 1000);


}

// Déterminer le vainqueur
const result = () => {
    if((player === 1 && ia === 3) || (player === 3 && ia === 2) || (player === 2 && ia === 1)) {
        console.log("Vous avez gagné !") 
    }else if((player === 3 && ia === 1) || (player === 2 && ia === 3) || (player === 1 && ia === 2)) {
        console.log("Vous avez perdu")
    }else {
        console.log("Match nul")
    }
}




// const element = document.getElementById("demo");
// setInterval(function() {
// element.innerHTML += "Hello"
// }, 1000);

// const iaRandom = document.getElementById('iaRandom').getAttribute('src')
