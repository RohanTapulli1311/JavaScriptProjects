let firstCard = 4
let secondCard = 9
let hasBlackJack = false
let sum = firstCard + secondCard + 4
let isAlive = true
if (sum <= 21){
    console.log("Would you like to draw another card?")
}
else if (sum === 21){
    console.log("Congrats!! Youve got blackJack!!")
    hasBlackJack = true
// make sure u use === alwayss
}
else{
    console.log("Sry, you are out!!") 
    isAlive = false
}

console.log(hasBlackJack)
console.log(isAlive)