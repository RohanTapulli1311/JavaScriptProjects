let firstCard = 10
let secondCard = 11
let hasBlackJack = false
let sum = firstCard + secondCard 
let isAlive = true
let message = ""
let messageEl = document.getElementById('message-el')
function startGame(){
    if (sum <= 20){
        message = "Would you like to draw another card?" 
        
    }
    else if (sum === 21){
        message = "Congrats!! Youve got blackJack!!"
        
        hasBlackJack = true
    // make sure u use === alwayss
    }
    else{
        message = "Sry, you are out!!"
        
        isAlive = false
    }
messageEl.textContent = message
console.log(message)
}


console.log(hasBlackJack)
console.log(isAlive)