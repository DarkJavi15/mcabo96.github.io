



/*Icono hamburguesa*/
function myFunction(x) {
    x.classList.toggle("change");
    let longitud = '0px';
    if (document.getElementById("mySidenav").style.width==0||document.getElementById("mySidenav").style.width==longitud) {
        document.getElementById("mySidenav").style.width = "100%";
    } else {
        document.getElementById("mySidenav").style.width = "0";
        
        
    }
}


var i = 0;
var txt = 'Lorem ipsum typing effect!'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */
document.getElementById("demo").innerHTML="";
window.onload =  setTimeout(typeWriter, 700);
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}