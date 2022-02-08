

$('.calc-btn').on("click",function(){
    console.log("clicked")
    console.log(this.value)
    let currentEQ = $('.calc-display').val()
    
    if(this.value==='C'){
        $('.calc-display').val("")
    }
    if(this.value==='='){
        equate(currentEQ)
    }
    else{
        $('.calc-display').val($('.calc-display').val()+this.value)
    }
    
})

function equate(equation) {

  }



