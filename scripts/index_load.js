const jogos = document.getElementById("jogos");

for (let i = 0; i < games.length; i++) {
    jogos.innerHTML += `<li class="jogos-items">
                <img src="${games[i].img}" alt="" class="jogos-items-img">
                <div class="jogos-items-text">
                    <h1 class="jogos-items-text-title">${games[i].name}</h1>
                    <div class="jogos-items-text-buttons">
                        <a href="" class="jogos-items-text-buttons-items">
                            <button>Votar</button>
                        </a>
                        <a href="./jogo.html" class="jogos-items-text-buttons-items">
                            <button onclick="create(${i})">Saiba Mais</button>
                        </a>
                    </div>
                </div>
            </li>`
}