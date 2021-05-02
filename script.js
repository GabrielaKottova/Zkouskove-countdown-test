numOfClicks = 0
function textFunction() {

  numOfClicks++
  /*document.getElementById("text1").innerHTML = "New text!";*/
  if(numOfClicks == 1)
  {
    document.getElementById("text1").style.color = "white";
  }
  else if (numOfClicks == 2) 
  {
    document.getElementById("text2").style.color = "white";
  }
  else if (numOfClicks == 3) 
  {
    document.getElementById("text3").style.color = "white";
  }
  else if (numOfClicks == 4) 
  {
    document.getElementById("text4").style.color = "white";
     
  }
}

var countDownDate = new Date("May 24, 2021 00:00:05").getTime();


var x = setInterval(function() {

  var now = new Date().getTime();  
  var distance = countDownDate - now;
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  
  document.getElementById("text1").innerHTML = days + " dní     ";
  document.getElementById("text2").innerHTML = hours + "h     ";
  document.getElementById("text3").innerHTML = minutes + "m     ";
  document.getElementById("text4").innerHTML = seconds + "s     ";

  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "ZKOUŠKOVÉ ZAČALO";
  }
}, 1000);
