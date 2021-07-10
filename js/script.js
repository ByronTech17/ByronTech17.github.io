const header = document.getElementById("header");
const nav = document.querySelector("header nav.container");

const banner = document.querySelector(".home-banner");

const img = document.querySelector(".home-banner img");
const menuOverlay = document.querySelector(".menu-overlay");

const navItems = document.querySelector("nav .nav-items");

navItems.style.top = `${header.clientHeight}px`;

const onScroll = () => {
    if (
        window.scrollY >= 40 ||
        (navItems.classList.contains("open") && window.innerWidth <= 640)
    )
        header.classList.add("scrolled");
    else if (!navItems.classList.contains("open") || window.innerWidth > 640)
        header.classList.remove("scrolled");
};

document.addEventListener("scroll", onScroll);

window.addEventListener("resize", () => {
    onScroll();
    navItems.style.top = `${header.clientHeight}px`;
});

function menuToggle() {
    navItems.classList.toggle("open");
    menuOverlay.classList.toggle("open");
    onScroll();
}
