



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