let welcomeEl = document.getElementById('welcome-el')

let firstName = "ROHAN"
let greeting = "Hii " + firstName + ", Welcome to this page"

welcomeEl.innerText = greeting

welcomeEl.innerText = welcomeEl.innerText + "😂"
//or
welcomeEl.innerText += "😂"