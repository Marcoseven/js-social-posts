/* 
Descrizione:
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
let card = document.querySelector(".card");

// Array di oggetti
const posts = [
	{
		id: 1,
		contenuto: "immagine e testo",
		immagine: "https://unsplash.it/300/300?image=",
		autore: "Alberto Bisetti",
		likes: 80,
		dataCreazione: "4 mesi fa",
	},
	{
		id: 2,
		contenuto: "immagine e testo",
		immagine: "https://unsplash.it/300/300?image=",
		autore: "Alessandro Fedele",
		likes: 50,
		dataCreazione: "2 mesi fa",
	},
	{
		id: 3,
		contenuto: "immagine e testo",
		immagine: "https://unsplash.it/300/300?image=",
		autore: "Camilla Necci",
		likes: 120,
		dataCreazione: "1 mese fa",
	},
];
// console.log(posts);

// Ciclare nell'array di oggetti
for (let index = 0; index < posts.length; index++) {
	const element = posts[index];

	console.log(element);
}

// 2° array di oggetti composto dagli id del 1° array
const { id } = posts[0, 1, 2];
console.log(id);
