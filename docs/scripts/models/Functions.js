import links from './links.js';

export function loadBarLinks() {
    const bar = document.getElementById('top-bar');

    for (const [key, val] of Object.entries(links)) {
        const div = document.createElement('div');

        div.classList.add('dropdown');

        const button = document.createElement('button');

        button.innerText = `My ${key}`;

        button.classList.add("button");

        button.classList.add("link");

        div.appendChild(button);

        const menu = document.createElement('div');

        menu.classList.add('dropdown-menu');

        for (const v of val) {
            const anchor = document.createElement('a');

            anchor.classList.add('link');
            anchor.classList.add('info');

            anchor.innerText = v.name;

            anchor.href = v.url

            menu.appendChild(anchor);
        }

        div.appendChild(menu);

        bar.appendChild(div)
    }
}