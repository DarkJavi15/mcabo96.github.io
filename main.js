



/*Icono hamburguesa*/
function myFunction() {
    //x.classList.toggle("change");
    document.getElementById("hamburguer").classList.toggle("change");
    let longitud = '0px';
    if (document.getElementById("mySidenav").style.width==0||document.getElementById("mySidenav").style.width==longitud) {
        document.getElementById("mySidenav").style.width = "100%";
    } else {
        document.getElementById("mySidenav").style.width = "0";
    }
}

//Enlaces del nav
function myFunction2(x) {
    
    document.getElementById("hamburguer").classList.toggle("change");
    let longitud = '0px';
    if (document.getElementById("mySidenav").style.width==0||document.getElementById("mySidenav").style.width==longitud) {
        document.getElementById("mySidenav").style.width = "100%";
    } else {
        document.getElementById("mySidenav").style.width = "0";
    }
    console.log(x)
    console.log("#"+x)
    window.location.href = "#"+x;
}



var prevScrollpos = window.pageYOffset;
//Get the button:
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTo({top: 0, behavior: 'smooth'}); // For Chrome, Firefox, IE and Opera
}



var i = 0;
var txt = 'M.cabophoto'; /* The text */
var txt2 = 'Photographer';
var speed = 100; /* The speed/duration of the effect in milliseconds */
document.getElementById("titulo").innerHTML="";
document.getElementById("subtitulo").innerHTML="";
window.onload =  setTimeout(typeWriter, 700);
function typeWriter() {
    if (i < txt2.length) {//Cambia el txt.length por el que más caracteres tenga
        document.getElementById("titulo").innerHTML += txt.charAt(i);
        document.getElementById("subtitulo").innerHTML += txt2.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}