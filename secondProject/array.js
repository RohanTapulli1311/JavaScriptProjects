let arr = []

arr.push(6)
console.log(arr)

//task
 let messages = [
     "Hey, how are u bro?!",
     "Im fine, what about u ?",
     "Im good too, so how is college goin on?"

 ]
  let newMessage = "colleges goin pretty well now tho!"

  messages.push(newMessage)
  console.log(messages)
  //to remove an element
   //messages.pop()

   // for loop in jS

//    for( let count =1; count <=11; count ++){
//        console.log(count)
//    }

// for with messgaes
// for( let i=0; i< messages.length; i++){
//     console.log(messages[i])
// }

let sentence = ["hii","this","is","rohan,","here","!","Welcome","aboard"]
let greetingEl = document.getElementById("greeting-el")
console.log(sentence.length)
for( let i = 0; i< sentence.length; i++){
    greetingEl.textContent += sentence[i] + ' '
}

p1time = 106
p2time = 182

function fastest(){
    if(p1time>p2time){
        return p1time
    }
    else if(p2time>p1time){
        return p2time
    }
    else{
        return p1time
    }
}
function totaltime(){
    let total = p1time+p2time
    return total
}
let fastestracer = fastest()
console.log(fastestracer)
let totalTime = totaltime()
console.log(totalTime)