function menuMobile() {
    let menu = document.getElementById('menu-mobile');

    console.log(menu)

    if (menu.style.display === 'none') {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}