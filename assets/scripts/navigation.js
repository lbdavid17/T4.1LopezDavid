import {elementsNavbar} from "./getNavElements.js";

const navSlide = () => {
    elementsNavbar.menu.addEventListener("click", () => {
        //Toggle Nav
        elementsNavbar.nav.classList.toggle("nav-active");
        
        //Animate Links
        elementsNavbar.navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.1s ease forwards ${index / 3 }s`;
            }
        });
    });  
  }
  
navSlide();