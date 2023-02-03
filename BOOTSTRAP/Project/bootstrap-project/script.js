var hamburger = document.querySelector(".hamburger");  
var navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
} )