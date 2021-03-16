//-----------------header---------------

let textPromo = document.querySelector(".block__pub");
let listMenu = document.querySelector(".list");
var doc = document.documentElement;
console.log(doc.clientWidth);
//événement ICI
if(doc.clientWidth < 1570 && doc.clientWidth > 767) {
    // textPromo.classList.add('block__pub--left');
    listMenu.classList.add('list--small');
} else if(doc.clientWidth < 1300 && doc.clientWidth > 767) {
    textPromo.classList.remove('block__pub');
}

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