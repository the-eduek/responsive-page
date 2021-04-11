const hamburger = document.querySelector(".ham");
const navLinks = document.querySelector(".nav-links");
const navLinksList = navLinks.querySelectorAll("a")

hamburger.addEventListener("click", toggleMenu);

function toggleMenu(e) {
    navLinks.classList.toggle("nav-links--open");

    if (navLinks.classList.contains("nav-links--open")) {
        navLinks.addEventListener("click", (e) => {
            const clicked = e.target;

            navLinksList.forEach(link => {
                if (clicked === link) {
                    navLinks.classList.remove("nav-links--open")
                }
            })
        }) 
    }
}