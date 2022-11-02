import links from "./links.js";

export function loadLinks() {
    const content = document.getElementById('content');
    const sidebar = document.getElementById('sidebar');

    for (const [type, value] of Object.entries(links)) {
        const div = document.createElement("div");
        div.classList.add('component');
        div.setAttribute('id', type)

        const h1 = document.createElement('h1');
        h1.innerText = type.slice(0, 1).toUpperCase() + type.slice(1).toLowerCase();
        div.appendChild(h1);

        const li = document.createElement('li');
        li.classList.add("sidebar-list-item");
        li.setAttribute('id', type)

        const a = document.createElement('a');
        a.href = `#${type}`;
        a.classList.add("sidebar-link");

        const img = document.createElement("img");
        img.src = `./icons/${type}.png`;
        img.classList.add("sidebar-img");

        const newDiv = document.createElement("div");
        newDiv.innerText = type.slice(0, 1).toUpperCase() + type.slice(1).toLowerCase();
        newDiv.classList.add("hidden-sidebar");

        a.appendChild(img)
        a.appendChild(newDiv)

        li.appendChild(a)

        sidebar.appendChild(li)

        for (const info of value) {
            // Create a div within the content div
            const contentDiv = document.createElement('div');
            contentDiv.classList.add("component");

            // Create a link.
            if (info.url) {
                const a = document.createElement('a');
                a.href = info.url;
                a.innerText = `${info.type ? `${info.type} - ` : ""}${info.name}`
                a.classList.add("link");
                contentDiv.appendChild(a);
            }

            if (info.urls) {
                const p = document.createElement("p");
                p.innerText = info.name
                p.classList.add("urls-header")

                const linksDiv = document.createElement("div");
                linksDiv.classList.add('links');

                for (const url of info.urls) {
                    const a = document.createElement('a');
                    a.href = url.url;
                    a.innerText = url.name;
                    a.classList.add('multi-link')

                    linksDiv.appendChild(a)
                }

                contentDiv.appendChild(p)
                contentDiv.appendChild(linksDiv)
            }

            // Create the description paragraph
            const p = document.createElement('p');
            p.innerText = info.description || "No description";
            contentDiv.appendChild(p);

            div.appendChild(contentDiv);
        }

        content.appendChild(div);
    }
}