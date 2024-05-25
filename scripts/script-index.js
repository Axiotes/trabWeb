function menuMobile() {
    let menu = document.getElementById('menu-mobile');

    console.log(menu)

    if (menu.style.transform === 'scale(0)') {
        menu.style.transform = "scale(1)";
    } else {
        menu.style.transform = "scale(0)";
    }
}

let isDark = document.getElementById("btn-mode");
let mode = document.getElementById("mode");
const spaceBtn = document.querySelector(".space-btn");
const btnClass = document.querySelector(".btn-class");

isDark = false;

function trocarTema(){
    isDark = !isDark;

    if (isDark) {
        mode.innerHTML = "Light mode"

        spaceBtn.classList.add("posicao-btn-dark", "space-btn-dark");
        btnClass.classList.add("btn-dark");

        spaceBtn.classList.remove("posicao-btn-light", "space-btn-light");
        btnClass.classList.remove("btn-light");
    } else {
        mode.innerHTML = "Dark mode"

        spaceBtn.classList.add("posicao-btn-light", "space-btn-light");
        btnClass.classList.add("btn-light");

        spaceBtn.classList.remove("posicao-btn-dark", "space-btn-dark");
        btnClass.classList.remove("btn-dark");
    }
}