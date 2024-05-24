function menuMobile() {
    let menu = document.getElementById('menu-mobile');

    console.log(menu)

    if (menu.style.transform === 'scale(0)') {
        menu.style.transform = "scale(1)";
    } else {
        menu.style.transform = "scale(0)";
    }
}

const images = document.querySelectorAll(".image");
const texts = document.querySelectorAll(".text-titulo");
const textsReverse = document.querySelectorAll(".text-titulo-reverse");

const observer = new IntersectionObserver( (elements) => {
    elements.forEach((element) => {
        if (element.isIntersecting){
            element.target.classList.add("mostrar");
        } else {
            element.target.classList.remove("mostrar");
        }
    });
});

images.forEach((image) => observer.observe(image));
texts.forEach((text) => observer.observe(text));
textsReverse.forEach((textReverse) => observer.observe(textReverse));