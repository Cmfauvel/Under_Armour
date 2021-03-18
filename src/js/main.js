//________________________header__________________________


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
// let currentMenu = titresMenuDesktop.nextElementSibling;

// let nouveautes = document.getElementById("text-red");
// let sousNouveautes = document.getElementById("nouveaute_soustitre");

// nouveautes.addEventListener("mouseover", event => {
//     sousNouveautes.classList.remove("hide");
// })

// nouveautes.addEventListener("mouseout", event =>{
//     sousNouveautes.classList.add("hide");
// })

//rester sur l'élément affiché quand souris dessus





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
    // for(i = 0; i < soustitreMenuDesktop.length; i++){
    //     soustitreMenuDesktop[i].addEventListener("mouseover", event =>{
    //         soustitreMenuDesktop[i].classList.remove("hide");
    //     })
    //     soustitreMenuDesktop[i].addEventListener("mouseout", event =>{
    //         soustitreMenuDesktop[i].classList.add("hide");
    //     })
    // }
};

//__________________CAROUSEL

let currentSlide = document.querySelector('.slide');
let nextArrow = document.querySelector('#next__slide');
let previousArrow = document.querySelector('#previous__slide');
let nextSlide = currentSlide.nextElementSibling;

nextArrow.addEventListener('click', event =>{
    currentSlide.classList.add('hide');
    nextSlide.classList.remove('hide');
    console.log(nextSlide)
})

previousArrow.addEventListener('click', event =>{
    nextSlide.classList.add('hide');
    currentSlide.classList.remove('hide');
})

//___________________FOOTER

let footerMobileContent = document.querySelector(".footer_mobile_content");
let footerDesktopContent = document.querySelector(".footer_desktop_content");
let mediaQuery =  window.matchMedia("(max-width:767px)");

mediaQuery.addEventListener('change', (e) => {
    if (e.matches) {
        footerMobileContent.classList.remove("hide");
        footerDesktopContent.classList.add("hide");
    } else {
        footerMobileContent.classList.add("hide");
        footerDesktopContent.classList.remove("hide");

    }
})
