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
        addClass(mainDark, 'dark')
    } else if(cpt % 2 != 0) {
        addClass(searchBar, 'hide');
        removeClass(mainDark, 'dark');
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
            // for(i = 0; i < soustitreMenuDesktop.length; i++){
                //     soustitreMenuDesktop[i].addEventListener("mouseover", event =>{
                    //         soustitreMenuDesktop[i].classList.remove("hide");
                    //     })
                    //     soustitreMenuDesktop[i].addEventListener("mouseout", event =>{
                        //         soustitreMenuDesktop[i].classList.add("hide");
                        //     })
                        // }
                    };
                    
                    
                    //___________________FOOTER
                    
                    
let menuIcons = document.querySelector('.menu__icons');
let iconUser = document.querySelector('.icon__user');

let footerMobileContent = document.querySelector(".footer_mobile_content");
let footerDesktopContent = document.querySelector(".footer_desktop_content");
let mediaQuerySmall =  window.matchMedia("(max-width:767px)");

mediaQuerySmall.addEventListener('change', (e) => {
    if (e.matches) {
        removeClass(menuIcons, 'hide');
        removeClass(searchIcon, 'hide');
        removeClass(iconUser, 'hide');
        removeClass(footerMobileContent, 'hide')
        addClass(footerDesktopContent, 'hide');
    } else {
        addClass(menuIcons, 'hide');
        addClass(searchIcon, 'hide');
        addClass(iconUser, 'hide');

        addClass(footerMobileContent, 'hide');
        removeClass(footerDesktopContent, 'hide');
    }
})
