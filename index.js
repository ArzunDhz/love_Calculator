



$("button").on("click",animate);










function animate(){
  $(".enter").addClass("pressed")
  setTimeout(function(){
            $(".enter").removeClass('pressed');
    }, 100);
    onEnter();
}

function onEnter(){





var random = Math.floor(Math.random()*100+1);



var a = prompt("Enter your name");
var b = prompt("Enter lover name");

$("p.your").html(a)
$("p.another").html(b)
$("p.percentage").html(random+"%");


$(".link").attr("href","https://www.youtube.com/")


var image = document.querySelector("img");
sourceImg1 ="images/heart1.png";
sourceImg2 ="images/heart2.png";


if(random<50){
  $("img").attr("src" , sourceImg2)
  $("p.Remarks").html("its fine ")
  var audio1 = new Audio('sounds/cry.mp3');
audio1.play();

}
else {
  $("img").attr("src" , sourceImg1)
  $("p.Remarks").html(" Number doesn't matter")
  var audio2 = new Audio('sounds/laugh.mp3');
  audio2.play();

}


}
