import { loadBarLinks } from './models/Functions.js';

loadBarLinks();

document.addEventListener('click', (event) => {
    const allDivers = document.getElementsByClassName('dropdown-menu');

    for (const div of allDivers) {
        div.classList.remove('show')
    }

    if (event.target.matches('button')) {
        const parent = event.target.parentNode;

        const divers = parent.getElementsByClassName("dropdown-menu")

        for (const div of divers) {
            div.classList.add("show");
        }
    }
})