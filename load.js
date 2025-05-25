let nome = document.getElementById("name");
let desc = document.getElementById("desc");

nome.innerHTML = localStorage.getItem("nome");
desc.innerHTML = localStorage.getItem("descr");