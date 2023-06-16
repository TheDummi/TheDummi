import { Octokit } from 'https://cdn.skypack.dev/@octokit/rest';

const myRepositories = document.getElementById('myRepositories');
const xnx = document.getElementById('xernerx');
const pd = document.getElementById('portal');
const myGames = document.getElementById('myGames');

document.addEventListener('DOMContentLoaded', async (event) => {
	const fetch = new Octokit({
		auth: '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',
	});

	const repositories = (await fetch.request('GET /users/TheDummi/repos', {})).data;

	repositorifier(myRepositories, repositories);

	const xernerx = (await fetch.request('GET /orgs/xernerx/repos')).data;

	repositorifier(xnx, xernerx);

	const portal = (await fetch.request('GET /orgs/PortalDiscordDevelopment/repos')).data;

	repositorifier(pd, portal);

	myGames.innerHTML = ``;

	for (const repository of repositories) {
		if (!repository.topics.includes('game')) continue;

		const div = document.createElement('div');

		div.classList.add('game-component');

		div.innerHTML = `<h2>${repository.name}</h2><a class="game-player" href="${repository.homepage}"><div class="play-button"><div class="triangle"></div></div></a>`;

		myGames.appendChild(div);
	}
});

function repositorifier(element, repositories) {
	element.innerHTML = ``;

	for (const repository of repositories) {
		const div = document.createElement('div');

		div.classList.add('component');

		div.innerHTML = `<h2>${repository.name}</h2><p class="description">${
			repository.description || ''
		}</p><p class="languageName">${repository.language || ''}</p><p class="stars">☆ ${repository.stargazers_count}</p>`;

		const links = document.createElement('div');

		links.classList.add('links');

		links.innerHTML = `<a href="${repository.html_url}" target="_blank">Repository</a>${
			repository.homepage ? `<a href="${repository.homepage}" target="_blank">Website</a>` : ``
		}`;

		div.appendChild(links);

		element.appendChild(div);
	}
}
