// If Script tag is at the end of the documents
// $("h1").css("color","red")

//If script is in the head
// $(document).ready(function () 
// { 
//     $("h1").css("color","red") 
//  })

//$("h1").css("color","red") //2 attributes sets the value

console.log($("h2").css("color")) //1 attribute gets us the value

$("h1").addClass("big-title") //adding a class
$("h1").removeClass("big-title")// removing a class

$("h1").addClass("big-title margin-50")

console.log($("h1").hasClass("margin-50")) // used to check if an element has a particular class

$("h2").text("Hope you are fine!") //works as .textContent function

//$("button") //selects all the buttons 
$("button").html("<en>SSup guys</en>")

console.log($("img").attr("src"))
$("img").attr("src","images/crash.png")
$("a").attr("href","../firstProject/index.html")

console.log($('h1').attr("class")) //class is also an attribute

// Changing color using button using vanilla js
for(let i=0; i<5;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        document.querySelector('h1').style.color = "purple"
    })
}

// changing color using jQuery
$("button").click(function(){
    $("h1").css("color","orange")
})

$(document).keypress(function(event){
    $("h1").text(event.key)
})

//very easy way to implement event listener

$("h1").on("mouseover", function(){
    $("h1").css("color","indigo")
})

//jQuery to add elements
$("h1").before("<button class='new'>New</button>")
$("h1").after("<button class = 'after'>after</button>")
$("h1").prepend("<button class = 'prepend'>prepended</button>")
$("h1").append("<button>Appended</button>")

//to remove an element
$("input").remove()

//animations hide,show,fadeIn,fadeOut,toggle, slideUp, etc
$(".new").on("click", function(){
    $("h1").slideUp()
})
// $(".after").on("click", function(){
//     $("h1").show()
// })
// $(".after").on("click", function(){
//     $("h1").fade()
// })
//custom css, then .animate(), but in animate use only numbers
$("h1").on("click", function(){
    $("h1").animate({opacity:0.5})
})

//chaining of functions
$(".after").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5})
})