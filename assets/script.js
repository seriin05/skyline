var menuBtn = document.getElementById("menu-btn");
var navMenu = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});