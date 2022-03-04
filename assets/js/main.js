/* 
Traccia esercizio. 

Creare una pagina che elenchi una lists di post socials a partire da un array di oggetti.
Gli attributi minimi del modello di un post: id, contenuto, immagine,
autore (nome, avatar), numero di likes, data creazione.
Un secondo array conterrà solo gli id dei posts a cui abbiamo dato like.

Immagini: va bene utilizzare qualsiasi servizio di placeholder
ad es. Unsplash (https://unsplash.it/300/300?image=<id>)

BONUS:
Bonus 1: Date formattate come tempo relativo (es. "due mesi fa")
Bonus 2: Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Sofia Perlari > SP)
Bonus 3: Click al pulsante "Mi Piace" incrementa il counter dei like al post.
*/

// DOM
let row = document.querySelector(".row");

// Array di oggetti
const posts = [
	{
		id: 1,
		content:
			"Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Etnihil ullam aut alias.",
		image: "https://unsplash.it/300/300?image=",
		author: ["Alberto Bisetti", "https://unsplash.it/300/300?image="],
		likes: 80,
		date: "4 mesi fa",
	},
	{
		id: 2,
		content:
			"Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Etnihil ullam aut alias.",
		image: "https://unsplash.it/300/300?image=",
		author: ["Alessandro Fedele", "https://unsplash.it/300/300?image="],
		likes: 50,
		date: "2 mesi fa",
	},
	{
		id: 3,
		content:
			"Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Etnihil ullam aut alias.",
		image: "https://unsplash.it/300/300?image=",
		author: ["Camilla Necci", "https://unsplash.it/300/300?image="],
		likes: 120,
		date: "1 mese fa",
	},
];
console.log(posts);

// Ciclo for nell'array di oggetti

post(posts);
function post(posts) {
	for (let index = 0; index < posts.length; index++) {
		const element = posts[index];
		let elementPosts = `
                 <div class="card">
					<div class="card_header d_flex">
						<img src="${posts[index].author[1]}" alt="" />
						<div class="card_text">
							<h2>${posts[index].author[0]}</h2>
							<h3>${posts[index].date}</h3>
						</div>
					</div>
					<div class="main">
                        <p>${posts[index].content}</p>
						<img src="${posts[index].image}" alt="" />
					</div>
					<div class="social">
						<div><button><i class="fas fa-thumbs-up"></i> Mi Piace</button></div>
						<div>Piace a ${posts[index].likes} persone</div>
					</div>
				</div>
    `;
		//row.insertAdjacentHTML("beforeend", elementPosts);
		row.innerHTML += elementPosts;
	}
}

// 2° array di oggetti composto dagli id del 1° array
const { id } = posts[(0, 1, 2)];
console.log(id);
