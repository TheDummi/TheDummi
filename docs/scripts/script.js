import { loadLinks } from "./Functions.js";
import links from "./links.js";

const menuIconButton = document.querySelector("[data-menu-icon-btn]");
const sidebar = document.querySelector("[data-sidebar]");

loadLinks();

document.addEventListener("click", (event) => {
    const types = Object.keys(links);

    types.push("welcome")

    if (types.includes(event.target.offsetParent?.id)) {
        for (const type of types) {
            const element = document.getElementById(type);

            element.classList.remove("active");
        }

        const element = document.getElementById(event.target.offsetParent.id);

        element.classList.add("active");
    }
})

menuIconButton.addEventListener("click", () => {
    sidebar.classList.toggle("open")
})