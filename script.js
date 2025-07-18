// Creation d'une bibliothèque
const library = [];

// Fonction qui ajoute un livre dans la bibliothèque
function addBook(book) {

    library.push(book);
}

// Fonction qui recherche un livre par son titre
function findBookByTitle(title) {
  for (let i = 0; i < library.length; i++) {
    const book = library[i];
    if (book.title.toLowerCase().trim() === title.toLowerCase().trim()) {
      return book;
    }
  }
}
// Fonction qui marque le un livre comme non emprunté
function getAvailableBooks() {
    for (let i = 0; i < library.length; i++) {
        const book = library[i];
     if (book.borrowed === false) {
            console.log("les livres disponibles sont",book);
        }
      }
}
// Fonction qui marque le un livre comme emprunté
function getUnavailableBooks() {
    for (let i = 0; i < library.length; i++) {
        const book = library[i];
        if (book.borrowed === true) {
                console.log("les livres indisponibles sont",book);
            }
          }
}

// Fonction qui permet de changer le booléen borrowed d'un livre




addBook({
  title : "Le Petit Prince",
  author : "Antoine de Saint-Exupéry",
  year : 1943,
  borrowed: false   
})

addBook({
  title : "Prince",
  author : "Antoine ",
  year : 1941,
  borrowed: false   
})
addBook({
    title : "1984",
    author : "George Orwell",
    year : 1949,
    borrowed: true   
})

console.log(library);
getAvailableBooks();
getUnavailableBooks();
console.log("Le livre que vous recherchez est ",findBookByTitle("le petit prince"));