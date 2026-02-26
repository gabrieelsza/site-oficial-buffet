const btnMobile = document.querySelector("#btn-menu");
const navLinks = document.getElementById("nav-links");
const iconBtn = document.querySelector("#btn-menu i")

btnMobile.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    iconBtn.classList.toggle('fa-times')
    iconBtn.classList.toggle('fa-bars')
    iconBtn.style.color = "#002C22"; 
});