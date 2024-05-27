const checkbox = document.getElementById("check-mode");
const labelColor = document.querySelector(".label");
const btnLabelColor = document.querySelector(".btn-label");
const header = document.querySelector(".header");
const body = document.body;
const footer = document.querySelector(".footer");
const tituloPage = document.querySelector(".titulo-page");
const opcoes = document.querySelectorAll(".opcoes");
const opcoaoSelecionada = document.querySelector("#opcaoSelecionada");

function menuMobile() {
    let menu = document.getElementById('menu-mobile');

    console.log(menu)

    if (menu.style.transform === 'scale(0)') {
        menu.style.transform = "scale(1)";
    } else {
        menu.style.transform = "scale(0)";
    }
}

function toggleMode() {
    labelColor.classList.toggle("label-dark");
    labelColor.classList.toggle("label-light");

    btnLabelColor.classList.toggle("btn-label-dark");
    btnLabelColor.classList.toggle("btn-label-light");

    header.classList.toggle("header-dark");
    header.classList.toggle("header-light");

    body.classList.toggle("back-color-light");
    body.classList.toggle("back-color-dark");

    footer.classList.toggle("footer-dark");
    footer.classList.toggle("footer-light");

    tituloPage.classList.toggle("titulo-page-dark");
    tituloPage.classList.toggle("titulo-page-light");

    opcoes.forEach((element) => {
        element.classList.toggle("opcoes-light");
        element.classList.toggle("opcoes-dark");
    });

    opcoaoSelecionada.classList.toggle("opcao-selecionada-dark");
    opcoaoSelecionada.classList.toggle("opcao-selecionada-light");
}

function addMode() {
    let valueMode = localStorage.getItem("mode");

    if (valueMode) {
        checkbox.checked = true;
        toggleMode();
    }
}

addMode();

checkbox.addEventListener('change', () => {
    toggleMode();

    localStorage.removeItem("mode");

    if (labelColor.classList.contains("label-dark")){
        localStorage.setItem("mode", "dark");
    }
});