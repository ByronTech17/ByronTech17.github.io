const header = document.getElementById("header");
const nav = document.querySelector("header nav.container");

const title = document.querySelector(".title");
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
    title.style.transition = "all 300ms ease-in-out";
}, 80);

setTimeout(() => {
    overlay.style.background = "none";
    setTimeout(() => {
        document.body.style.overflowY = "auto";
        overlay.style.display = "none";
        title.style.zIndex = "30";
        titleDiv.style.zIndex = "30";
        3;
    }, 400);
}, 2500);

const banner = document.querySelector(".home-banner");

const img = document.querySelector(".home-banner img");
const textContainer = document.querySelector(".title div");

document.addEventListener("scroll", (event) => {
    if (window.scrollY >= 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");

    img.style.top = window.scrollY / 1.3 + "px";
    textContainer.style.top = window.scrollY / 1.9 + "px";

    const filter = `opacity(${1 - window.scrollY / window.innerHeight}) blur(${
        (window.scrollY / window.innerHeight) * 3
    }px)`;

    banner.style.filter = filter;
    textContainer.style.filter = filter;
});
