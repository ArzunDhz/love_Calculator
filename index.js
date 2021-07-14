


var image = document.querySelector("img");
sourceImg1 ="images/heart1.png";
sourceImg2 ="images/heart2.png";


$(".enter").on("click",  onEnter);



function onEnter(){


  var a = $("#inp1").val();
  var b = $("#inp2").val();

var random = Math.floor(Math.random()*100+1);


if(a==="" & b===""){
  alert("enter full detail");
}
else if (a==="arjun"||a==="dahal" && b==="arjun"||b==="dahal") {
  $("p.your").html(a)
  $("p.another").html(b)
  $("p.percentage").html("100%");
  $("p.Remarks").html(" made for each other")
    $("img").attr("src" , sourceImg2);
  var audio3 = new Audio('sounds/laugh.mp3');
  audio3.play();

}


else{
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




}
