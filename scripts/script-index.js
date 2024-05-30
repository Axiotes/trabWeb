const checkbox = document.getElementById("check-mode");
const checkboxMobile = document.getElementById("check-mode-mobile");
const labelColor = document.querySelectorAll(".label");
const btnLabelColor = document.querySelectorAll(".btn-label");
const header = document.querySelector(".header");
const body = document.body;
const footer = document.querySelector(".footer");
const tituloPage = document.querySelector(".titulo-page");
const opcoes = document.querySelectorAll(".opcoes");
const opcoaoSelecionada = document.querySelector("#opcaoSelecionada");

function menuMobile() {
    let menu = document.getElementById('menu-mobile');

    if (menu.style.transform === 'scale(0)') {
        menu.style.transform = "scale(1)";
    } else {
        menu.style.transform = "scale(0)";
    }
}

function toggleMode() {
    labelColor.forEach((element) => {
        element.classList.toggle("label-dark");
        element.classList.toggle("label-light");
    });

    btnLabelColor.forEach((element) => {
        element.classList.toggle("btn-label-dark");
        element.classList.toggle("btn-label-light");
    });

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

    if (valueMode == "dark") {
        checkbox.checked = true;
        checkboxMobile.checked = true;
        toggleMode();
    }
}

addMode();

checkbox.addEventListener('change', () => {
    toggleMode();

    localStorage.removeItem("mode");

    labelColor.forEach((element) => {
        if (element.classList.contains("label-dark")) {
            localStorage.setItem("mode", "dark");
        }
    });
});

checkboxMobile.addEventListener('change', () => {
    toggleMode();

    localStorage.removeItem("mode");

    labelColor.forEach((element) => {
        if (element.classList.contains("label-dark")) {
            localStorage.setItem("mode", "dark");
        }
    });
});