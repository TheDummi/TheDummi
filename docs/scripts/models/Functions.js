import links from './links.js';

export function loadLinks() {
    const wrap = document.getElementById('contents');

    for (const cat of Object.values(links)) {

        const wrapper = document.createElement('div')

        wrapper.classList.add('wrapper.vertical')
        for (const value of cat) {
            const anchor = document.createElement('a');

            anchor.innerText = value.type;

            anchor.href = value.url;

            anchor.classList.add('link');

            anchor.classList.add('component');

            wrapper.appendChild(anchor);
        }

        wrap.appendChild(wrapper);
    }
}