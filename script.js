const header = document.getElementById("header");
const nav = document.querySelector("header nav.container");

const title = document.querySelector(".title");
title.style.height = `${title.clientWidth * (8 / 25)}px`;

const titleDiv = document.querySelector(".title > div");
const navTitle = document.querySelector(".nav-title");
const overlay = document.querySelector(".overlay");

document.body.style.overflowY = "hidden";

let i = 0;

const interval = setInterval(() => {
    window.scrollTo(0, 0);
    i++;
    titleDiv.style.backgroundPositionY = `${i * 4.16667}%`;
    if (i >= 24) clearInterval(interval);
}, 80);

setTimeout(() => {
    overlay.classList.remove("show");
    setTimeout(() => {
        document.body.style.overflowY = "auto";
        overlay.style.display = "none";
        title.style.zIndex = "30";
        titleDiv.style.zIndex = "30";
    }, 400);
}, 2500);

const banner = document.querySelector(".home-banner");

const img = document.querySelector(".home-banner img");
const textContainer = document.querySelector(".title div");
const bannerOverlay = document.querySelector(".home-banner .banner-overlay");
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

    img.style.top = window.scrollY / 1.3 + "px";
    textContainer.style.top = window.scrollY / 1.9 + "px";

    bannerOverlay.style.opacity =
        0.5 + window.scrollY / window.innerHeight / 2.5;
    title.style.filter = `brightness(${
        1 - window.scrollY / window.innerHeight
    })`;
};

document.addEventListener("scroll", onScroll);

window.addEventListener("resize", () => {
    onScroll();
    title.style.height = `${title.clientWidth * (8 / 25)}px`;
});

function menuToggle() {
    navItems.classList.toggle("open");
    menuOverlay.classList.toggle("open");
    onScroll();
}
