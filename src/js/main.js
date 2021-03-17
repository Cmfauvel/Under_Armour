//________________________header__________________________

let mediaQueryA =  window.matchMedia("(max-width:767px)");

mediaQueryA.addEventListener('change', (e) => {
    if (e.matches) {
        footerMobileContent.classList.remove("hide");
        footerDesktopContent.classList.add("hide");
    } else {
        footerMobileContent.classList.add("hide");
        footerDesktopContent.classList.remove("hide");

    }
})

// let textPromo = document.querySelector(".block__pub");
// let listMenu = document.querySelector(".list");
// var doc = document.documentElement;
// console.log(doc.clientWidth);
// //événement ICI
// if(doc.clientWidth < 1570 && doc.clientWidth > 767) {
//     // textPromo.classList.add('block__pub--left');
//     listMenu.classList.add('list--small');
// } else if(doc.clientWidth < 1300 && doc.clientWidth > 767) {
//     textPromo.classList.remove('block__pub');
// }

//--------------------Icon search mobile

let searchIcon = document.querySelector(".search__icon");
let searchBar = document.querySelector(".input__search--mobile");
let mainDark = document.querySelector("main");
let cpt = 0;

searchIcon.addEventListener("click", event => {
       cpt++;
    if(cpt % 2 == 0) {
        searchBar.classList.remove("hide");
        mainDark.classList.add("dark");
    } else if(cpt % 2 != 0) {
        searchBar.classList.add("hide");
        mainDark.classList.remove("dark");
    }
});

//-----------------------Menu burger mobile

let menuMobile = document.querySelector('.menu--mobile');
let iconMenuFerme = document.querySelector('.menu__icon');
let iconMenuOuvert = document.querySelector('#menu--ouvert');

iconMenuFerme.addEventListener("click", event =>{
    menuMobile.classList.remove("hide");
    iconMenuFerme.classList.add('hide');
    iconMenuOuvert.classList.remove('hide');
});

iconMenuOuvert.addEventListener("click", event =>{
    menuMobile.classList.add("hide");
    iconMenuOuvert.classList.add('hide');
    iconMenuFerme.classList.remove('hide');
});

//-----------------Menu Desktop

let titreMenuDesktop = document.querySelector('.element__listmenu');
let soustitreMenuDesktop = document.querySelector('.subtitle');
let currentMenu = titresMenuDesktop.nextElementSibling;

// for(let i = 0; i < titresMenuDesktop.length; i++){
    titreMenuDesktop.addEventListener("mouseover", event =>{
        console.log("mouseover", event, titreMenuDesktop, MouseEvent)
        if(event.target === titreMenuDesktop) {            
            soustitreMenuDesktop.classList.remove("hide");
        } else if(event.target != titreMenuDesktop){
            soustitreMenuDesktop.classList.add("hide");
        }
    // })
})