let randomNumber1 = Math.floor(Math.random()*6)+1
console.log(randomNumber1)
let randomNumber2 = Math.floor(Math.random()*6)+1
console.log(randomNumber2)
let dice1 = document.querySelector(".img1")
dice1.setAttribute("src",`images/dice${randomNumber1}.png`)
let dice2 = document.querySelector(".img2")
dice2.setAttribute("src",`images/dice${randomNumber2}.png`)

let displayWinner = document.querySelector(".container h1")
console.log(displayWinner)


if(randomNumber1>randomNumber2){
displayWinner.textContent = "🚩Player 1 Wins!"
}
else if(randomNumber2>randomNumber1){
    displayWinner.textContent = "Player 2 Wins!🚩"
}
else{
    displayWinner.textContent = "Draw!"
}