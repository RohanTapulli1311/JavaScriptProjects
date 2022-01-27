

// let drumSome = document.querySelector("button")
// drumSome.addEventListener("click", handleClick)


// function handleClick(){
//     alert("I got clicked!")
// }

let numberOfDrums = document.querySelectorAll(".drum").length

for( let i=0;i<numberOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    this.style.color ="white"
   
    const audio = new Audio(`sounds/crash.mp3`)      
    audio.play();
    })
}


