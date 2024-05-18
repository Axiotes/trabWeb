function menuMobile() {
    let menu = document.querySelector('.mobile-menu');

    console.log(menu)

    if (menu.classList.contains('abrir-menu')) {
        menu.classList.remove('abrir-menu')
    } else {
        menu.classList.add('abrir-menu')
    }
}