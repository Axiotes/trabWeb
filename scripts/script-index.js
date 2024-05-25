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
const mode = document.getElementById("mode");

function toggleMode() {
    labelColor.classList.toggle("label-dark");
    labelColor.classList.toggle("label-light");
    btnLabelColor.classList.toggle("btn-label-dark");
    btnLabelColor.classList.toggle("btn-label-light");
}

checkbox.addEventListener('change', () => {
    localStorage.setItem("isDark", checkbox.checked);
    let isDark = localStorage.getItem("isDark");

    console.log("LocalStorage", isDark);

    if (isDark) {
        toggleMode();
    }
});