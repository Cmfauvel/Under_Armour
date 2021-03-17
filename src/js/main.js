let footerMobileContent = document.querySelector(".footer_mobile_content");
let footerDesktopContent = document.querySelector(".footer_desktop_content");

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


    

