let level = 1
let patternGenerated = []
let patternEntered = []
const blocks = ['green','red','yellow','blue']

$(document).on("keypress",startGame)

function startGame(){
    $("#level-title").text(`level ${level}`)
    let randomChoice = randomPattern()
    // console.log(randomChoice)
    // console.log(blocks[randomChoice-1])
    randomPlay(blocks[randomChoice-1])
}

function randomPattern(){
   return (Math.floor(Math.random()*4)+1)
}

function randomPlay(choice){
   switch(choice){
       case 'green':
            let greenPlay = new Audio('sounds/green.mp3');
            $('.green').addClass("pressed")
            setTimeout(function(){
                $('.green').removeClass("pressed") 
            },100)
            greenPlay.play();
            break;
       case 'red':
        let redPlay = new Audio('sounds/red.mp3');
        $('.red').addClass("pressed")
        setTimeout(function(){
            $('.red').removeClass("pressed") 
        },100)
        redPlay.play();
        break;
        case 'yellow':
            let yellowPlay = new Audio('sounds/yellow.mp3');
            $('.yellow').addClass("pressed")
            setTimeout(function(){
                $('.yellow').removeClass("pressed") 
            },100)
            yellowPlay.play();
            break;
        case 'blue':
            let bluePlay = new Audio('sounds/blue.mp3');
            $('.blue').addClass("pressed")
            setTimeout(function(){
                $('.blue').removeClass("pressed") 
            },100)
            bluePlay.play();
            break;
        default:
            alert("Something went wrong in switch")


   }
}