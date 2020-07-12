
/*Karusel üçün*/

$(document).ready(function() {
    $('.carousel').carousel()
});
document.documentElement.setAttribute("lang", "en");
document.documentElement.removeAttribute("class");

axe.run(function(err, results) {
    console.log(results.violations);
});

// Dropdown menyusu üçün 

function myAccFunc1() {
    var x = document.getElementById("demoAc1");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
 }
  
  function myAccFunc2() {
    var x = document.getElementById("demoAc2");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  }

 
  // Kənar menyunu açıb bağlamaq üçün funksiyalar
  function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
    document.getElementsByClassName("carousel-indicators").style.display = "none";
    
  }
   
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }

 /*dropdown javascript*/
