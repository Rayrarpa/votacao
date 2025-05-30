let menuMobile = document.getElementById("menuMobile");
let menuToggle = document.getElementById("menuToggle");

function create(gm) {
    localStorage.setItem("nome", games[gm].name);
    localStorage.setItem("descr", games[gm].description);
    localStorage.setItem("image", games[gm].img);
    localStorage.setItem("gameCheck", true);
}

function openMenu() {
    menuMobile.classList.toggle("closed");
    menuToggle.classList.toggle("menuOpen");
    menuToggle.classList.toggle("menuClose");
}