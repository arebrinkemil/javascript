document.addEventListener("DOMContentLoaded", () => {
  const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
    { title: "Pride and Prejudice", author: "Jane Austen" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "Moby-Dick", author: "Herman Melville" },
    { title: "War and Peace", author: "Leo Tolstoy" },
    { title: "Ulysses", author: "James Joyce" },
    { title: "The Odyssey", author: "Homer" },
    { title: "Hamlet", author: "William Shakespeare" },
    {
      title: "One Hundred Years of Solitude",
      author: "Gabriel García Márquez",
    },
    { title: "Crime and Punishment", author: "Fyodor Dostoevsky" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "The Brothers Karamazov", author: "Fyodor Dostoevsky" },
    { title: "Don Quixote", author: "Miguel de Cervantes" },
    { title: "The Divine Comedy", author: "Dante Alighieri" },
    { title: "The Grapes of Wrath", author: "John Steinbeck" },
    { title: "Catch-22", author: "Joseph Heller" },
    { title: "Lolita", author: "Vladimir Nabokov" },
    { title: "Anna Karenina", author: "Leo Tolstoy" },
    // ... you can continue to add more books as needed
  ];

  const bookshelf = document.getElementById("bookshelf");
  const sortSelect = document.getElementById("sort");
  const filterInput = document.getElementById("filter");

  function displayBooks(bookList) {
    bookshelf.innerHTML = ""; // clear the bookshelf
    for (const book of bookList) {
      const bookDiv = document.createElement("div");
      bookDiv.innerHTML = `<strong>${book.title}</strong> by ${book.author}`;
      bookshelf.appendChild(bookDiv);
    }
  }

  function sortBooks(criteria) {
    return books.sort((a, b) => (a[criteria] > b[criteria] ? 1 : -1));
  }

  function filterBooks(query) {
    return books.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  sortSelect.addEventListener("change", () => {
    displayBooks(sortBooks(sortSelect.value));
  });

  filterInput.addEventListener("input", () => {
    displayBooks(filterBooks(filterInput.value));
  });

  displayBooks(books); // initial display
});
