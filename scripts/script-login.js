function menuMobile() {
    let menu = document.getElementById('menu-mobile');

    console.log(menu)

    if (menu.style.transform === 'scale(0)') {
        menu.style.transform = "scale(1)";
    } else {
        menu.style.transform = "scale(0)";
    }
}

const checkbox = document.getElementById("check-mode");
const labelColor = document.querySelector(".label");
const btnLabelColor = document.querySelector(".btn-label");

function toggleMode() {
    labelColor.classList.toggle("label-dark");
    labelColor.classList.toggle("label-light");
    btnLabelColor.classList.toggle("btn-label-dark");
    btnLabelColor.classList.toggle("btn-label-light");
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