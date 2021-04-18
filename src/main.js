var hamburger=document.getElementById("hamburger")
var navList= document.getElementById("nav-list")


hamburger.addEventListener("click",toggleButton)
function toggleButton(){
    navList.classList.toggle("show")
}