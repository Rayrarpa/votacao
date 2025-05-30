let nome = document.getElementById("name");
let desc = document.getElementById("desc");
let image = document.getElementById("image");

nome.innerHTML = localStorage.getItem("nome");
desc.innerHTML = localStorage.getItem("descr");
image.src = localStorage.getItem("image");

let gameCheck = false;