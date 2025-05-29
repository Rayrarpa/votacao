function create(gm) {
    localStorage.setItem("nome", games[gm].name);
    localStorage.setItem("descr", games[gm].description);
    localStorage.setItem("image", games[gm].img);
}