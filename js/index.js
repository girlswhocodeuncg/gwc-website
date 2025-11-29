console.log("GWC Homepage Loaded");
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    nav.classList.toggle("shadow-sm", window.scrollY >10);
})