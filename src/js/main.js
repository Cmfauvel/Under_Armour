/**
 * FOOTER
 */
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



var span = document.getElementsByClassName("extend");

    for (let i = 0; i < span.length; i++) {
        span[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var ul = this.nextElementSibling;
            if (ul.style.display === "block") {
                ul.style.display = "none";
            } else {
                ul.style.display = "block";
            }
        });
    }
