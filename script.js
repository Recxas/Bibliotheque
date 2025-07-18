// Creation d'une bibliothèque
const library = [];

// Fonction qui ajoute un livre dans la bibliothèque
function addBook(book) {

    library.push(book);
}

addBook({
  title : "Le Petit Prince",
  author : "Antoine de Saint-Exupéry",
  year : 1943   
})

console.log(library);
