
var a = prompt("your name");
var b = prompt("next name");

var random = Math.floor(Math.random()*100+1);



document.querySelectorAll("p")[0].innerHTML = a ;

document.querySelectorAll("p")[1].innerHTML = b ;


document.querySelectorAll("p")[2].innerHTML = random+"%" ;

var heart = document.querySelector("img");







var image = document.querySelector("img");
sourceImg1 ="images/"+ "heart1"+".png" ;
sourceImg2 ="images/"+ "heart2"+".png" ;
if(random<50){
  image.setAttribute("src" , sourceImg2);
  document.querySelectorAll("p")[3].innerHTML = "its fine " ;
}
else{
  image.setAttribute("src" , sourceImg1);
  document.querySelectorAll("p")[3].innerHTML = " Number doesn't matter" ;
}
