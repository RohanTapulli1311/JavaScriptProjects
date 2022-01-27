let lists = document.getElementsByTagName("li")
lists[0].style.color ="red"

let lists2 = document.getElementsByClassName("item")
console.log(lists2)
lists2[2].style.color = "purple"

let heading = document.getElementById("greet")
heading.innerHTML = "Welcome Home"

//querySelector
let famBtn = document.querySelector("#family")
famBtn.addEventListener("click",function(){
    let msg = document.querySelector("#mssg")
    msg.innerHTML = `You are family!!`
})

let smething = document.querySelector("#list .item")
// smething.innerHTML = `new edit`

let smething2 = document.querySelectorAll("#list .item")
smething2[1].style.color = "goldenrod"

let link = document.querySelector("li a")
link.style.color = "green"

heading.style.fontSize ="5rem"

famBtn.style.backgroundColor = "yellow"

famBtn.classList.add("invisible")
document.querySelector("#family").classList.toggle("invisible")


document.querySelector("#greet").classList.toggle("huge")
document.querySelector('#change').textContent = "Bing"
document.querySelector('#change').setAttribute("href","www.bing.com")


function add(num1, num2){
    return num1+num2
}

function subtract(num1,num2){
    return num2-num1

}
function multiply(num1,num2){
    return num1*num2
}
function divide(num1,num2){
 return num1/num2
}

//Higher order function accepts another function as a parameter
function calculator(num1,num2, operator){
    return operator(num1,num2)
}