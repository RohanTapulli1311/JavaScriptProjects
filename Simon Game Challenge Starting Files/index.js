var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
let userClickedPattern = []
let level = 0
let started = false

$(document).on("keypress",function(){
    if(started === false){
        nextSequence()
        started = true
    }
})


$('.btn').on("click",function(){

let userChosenColour = this.id
userClickedPattern.push(userChosenColour)
currentClick = userChosenColour
console.log(userClickedPattern)
playSound(userChosenColour)
animatePress(userChosenColour)
checkAnswer(userClickedPattern.length - 1)

})
            
       



function nextSequence() {
    userClickedPattern = []
    level += 1
    $('#level-title').text("level " + level)

    //2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber
    var randomNumber = Math.floor(Math.random() * 4);
  
    //4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
    var randomChosenColour = buttonColours[randomNumber];
  
    //6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
    gamePattern.push(randomChosenColour);

    $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour)
    

  }

  function playSound(name){
    let playAudio = new Audio(`sounds/${name}.mp3`);
    playAudio.play();
  }
  
  function animatePress(currentColour){
    $(`#${currentColour}`).addClass("pressed")
    setTimeout(function(){
        $(`#${currentColour}`).removeClass("pressed") 
    },100)
  }

  function checkAnswer(currenLevel){
      if(gamePattern[currenLevel] === userClickedPattern[currenLevel]){
          console.log("correct")

          if(gamePattern.length === userClickedPattern.length){
              setTimeout(function(){
              nextSequence()    
              }, 1000)
          }
      }
      else{
          console.log("incorrect")
          playSound("wrong")
          $("body").addClass("game-over")
          setTimeout(function(){
            $("body").removeClass("game-over")
          },200)
          $('#level-title').text("Game Over, Press Any Key to Restart")
          startOver()


      }
  }

  function startOver() {
    gamePattern =[]
    level = 0
    started = false
    }