let level = 0
let patternGenerated = []
let patternEntered = []

const blocks = ['green','red','yellow','blue']

$(document).on("keypress",startGame)

function startGame(){
   level = 1
   startLevel()
   patternGenerated = []
   patternEntered = []
}

function startLevel(){
    $("#level-title").text(`level ${level}`)
    let randomChoice = randomPattern()
    // console.log(randomChoice)
    // console.log(blocks[randomChoice-1])
    randomPlay(blocks[randomChoice-1])
    patternGenerated.push(blocks[randomChoice-1])
    console.log(patternGenerated)
    $('.btn').on("click", function(){
        //alert(this.id)
        pressedChoice(this.id)
        patternEntered.push(this.id)
        console.log(patternEntered)
        checkCorrect()
    })

}
function checkCorrect(){
    for(let i=0;i<patternGenerated.length;i++){
        if(patternGenerated[i] === patternEntered[i]){
            continue
        }
        else{
            endGame()
        }
      
    }
    alert("next round")
    startLevel()
}
function endGame(){
 alert("game ended")
 startGame()
}

function randomPattern(){
   return (Math.floor(Math.random()*4)+1)
}

function randomPlay(choice){
   switch(choice){
       case 'green':
            let greenPlay = new Audio('sounds/green.mp3');
            $('.green').toggle("pressed")
            setTimeout(function(){
                $('.green').toggle("pressed") 
            },100)
            greenPlay.play();
            break;
       case 'red':
        let redPlay = new Audio('sounds/red.mp3');
        $('.red').toggle("pressed")
        setTimeout(function(){
            $('.red').toggle("pressed") 
        },100)
        redPlay.play();
        break;
        case 'yellow':
            let yellowPlay = new Audio('sounds/yellow.mp3');
            $('.yellow').toggle("pressed")
            setTimeout(function(){
                $('.yellow').toggle("pressed") 
            },100)
            yellowPlay.play();
            break;
        case 'blue':
            let bluePlay = new Audio('sounds/blue.mp3');
            $('.blue').toggle("pressed")
            setTimeout(function(){
                $('.blue').toggle("pressed") 
            },100)
            bluePlay.play();
            break;
        default:
            alert("Something went wrong in switch")


   }
}
function pressedChoice(choice){
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