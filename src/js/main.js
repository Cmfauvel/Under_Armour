//________________________header__________________________

function removeClass(element, className) {
    element.classList.remove(className);
}

function addClass(element, className) {
    element.classList.add(className);
}

//--------------------Icon search mobile

function removeClass(element, className) {
    element.classList.remove(className);
}

function addClass(element, className) {
    element.classList.add(className);
}


let searchIcon = document.querySelector(".search__icon");
let searchBar = document.querySelector(".input__search--mobile");
let mainDark = document.querySelector("main");
console.log(searchIcon);
console.log(searchBar);
console.log(mainDark);
let cpt = 0;


searchIcon.addEventListener("click", event => {
    cpt++;
    if(cpt % 2 == 0) {
        removeClass(searchBar, 'hide');
        addClass(mainDark, 'dark');
    } else if(cpt % 2 != 0) {
        addClass(searchBar, 'hide');
        removeClass(mainDark, 'dark');
    }
});

//-----------------------Menu burger mobile

let menuIcons = document.querySelector('.menu__icons');
let iconUser = document.querySelector('.icon__user');
let menuMobile = document.querySelector('.menu--mobile');
let iconMenuFerme = document.querySelector('.menu__icon');
let iconMenuOuvert = document.querySelector('#menu--ouvert');

iconMenuFerme.addEventListener("click", event =>{
    removeClass(menuMobile, 'hide');
    iconMenuFerme.classList.add('hide');
    iconMenuOuvert.classList.remove('hide');
    mainDark.classList.add("dark");
});

iconMenuOuvert.addEventListener("click", event =>{
    menuMobile.classList.add("hide");
    iconMenuOuvert.classList.add('hide');
    iconMenuFerme.classList.remove('hide');
    mainDark.classList.remove("dark");
});

//-----------------Menu Desktop

let titresMenuDesktop = document.getElementsByClassName('element__listmenu');
let soustitreMenuDesktop = document.getElementsByClassName('subtitle');

for(let i = 0; i < titresMenuDesktop.length; i++){
    titresMenuDesktop[i].addEventListener("mouseover", event =>{
        soustitreMenuDesktop[i].classList.remove("hide");
        mainDark.classList.add("dark");
        soustitreMenuDesktop[i].addEventListener("mouseover", event =>{
            soustitreMenuDesktop[i].classList.remove("hide");
            mainDark.classList.add("dark");
            
        })
        soustitreMenuDesktop[i].addEventListener("mouseout", event =>{
                    soustitreMenuDesktop[i].classList.add("hide");
                    mainDark.classList.remove("dark");
                })
    })
    titresMenuDesktop[i].addEventListener("mouseout", event =>{
        soustitreMenuDesktop[i].classList.add("hide");
        mainDark.classList.remove("dark");
    })
};

//__________________CAROUSEL DESKTOP

let currentSlide = document.querySelector('.slide');
let nextArrow = document.querySelector('#next__slide');
let previousArrow = document.querySelector('#previous__slide');
let nextSlide = currentSlide.nextElementSibling;
// let slides = document.getElementsByClassName('slide_img');
// let largeurEcran = window.innerWidth;
// let containerSlides = document.getElementsByClassName('slide');
// let slideIndex = 1;

    nextArrow.addEventListener('click', event =>{
        currentSlide.classList.add('hide');
        nextSlide.classList.remove('hide');
    });
    previousArrow.addEventListener('click', event =>{
        nextSlide.classList.add('hide');
    currentSlide.classList.remove('hide');
    });



//___________________FOOTER

let footerMobileContent = document.querySelector(".footer_mobile_content");
let footerDesktopContent = document.querySelector(".footer_desktop_content");
let mediaQuerySmall =  window.matchMedia("(max-width:767px)");

mediaQuerySmall.addEventListener('change', (e) => {
    if (e.matches) {
        footerMobileContent.classList.remove("hide");
        footerDesktopContent.classList.add("hide");
        removeClass(menuIcons, 'hide');
        removeClass(searchIcon, 'hide');
        removeClass(iconUser, 'hide');
        removeClass(footerMobileContent, 'hide')
        addClass(footerDesktopContent, 'hide');
    } else {
        footerMobileContent.classList.add("hide");
        footerDesktopContent.classList.remove("hide");
        addClass(menuIcons, 'hide');
        addClass(searchIcon, 'hide');
        addClass(iconUser, 'hide');

        addClass(footerMobileContent, 'hide');
        removeClass(footerDesktopContent, 'hide');

        addClass(footerMobileContent, 'hide');
        removeClass(footerDesktopContent, 'hide');
    }
})
