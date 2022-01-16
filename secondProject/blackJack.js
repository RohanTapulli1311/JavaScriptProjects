let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let hasBlackJack = false
let sum = firstCard + secondCard
let isAlive = true
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
// let sumEl = document.querySelector("#sum-el")

function getRandomCard(){
   return 5; 
}
function startGame(){
    renderGame()
}
function renderGame(){
   // cardsEl.textContent ="Cards:"+ cards[0] + " " +cards[1]
   cardsEl.textContent = "Cards: "
   for( let i=0; i< cards.length;i++){
    cardsEl.textContent += cards[i]+" "
   }
    sumEl.textContent ="Sum: "+ sum
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

function newCard(){
    let newCard = getRandomCard()
    sum += newCard
    cards.push(newCard)
    renderGame()
}


console.log(hasBlackJack)
console.log(isAlive)