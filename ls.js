// 2019 GUILLEUS Hugues
// 2020 GUILLEUS Hugues review for Arveto Ink.

document.addEventListener("DOMContentLoaded", async () => {
	let ls = document.getElementById("lsRepo");

	(await (await fetch('https://api.github.com/users/arveto/repos')).json())
	.filter(repo => !repo.archived && repo.description)
		.filter(repo => repo.name != "arveto.github.io")
		.sort((r1, r2) => r1.name < r2.name)
		.forEach(repo => ls.insertAdjacentHTML("beforeend", `<li>
			<hgroup>
				<a href="${repo.html_url}" title="GitHub">
					<img class="mark" src="/GitHub-Mark.png">
					${repo.name}
				</a>
				${
					repo.homepage ? `<a href="${repo.homepage}">${repo.homepage}</a>` :""
				}
			</hgroup>
			${
				repo.description ? `<p>${repo.description}</p>` : ""
			}
			</li>`));
}, {
	once: true,
});
