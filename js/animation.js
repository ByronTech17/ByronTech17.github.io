const title = document.querySelector(".title");
title.style.height = `${title.clientWidth * (8 / 25)}px`;

const navTitle = document.querySelector(".nav-title");
const overlay = document.querySelector(".overlay");
const titleDiv = document.querySelector(".title div");
const bannerOverlay = document.querySelector(".home-banner .banner-overlay");

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

window.addEventListener("resize", () => {
    title.style.height = `${title.clientWidth * (8 / 25)}px`;
});

document.addEventListener("scroll", () => {
    img.style.top = window.scrollY / 1.3 + "px";
    titleDiv.style.top = window.scrollY / 1.9 + "px";

    bannerOverlay.style.opacity =
        0.5 + window.scrollY / window.innerHeight / 2.5;
    title.style.filter = `brightness(${
        1 - window.scrollY / window.innerHeight
    })`;
});
