class BookShelf {
	constructor() {
		this.books = [
			{ id: 1, title: "Intro to React", author: "Melvin" },
			{ id: 2, title: "Baking and debugging", author: "Yun" },
			{ id: 3, title: "Being an awesome dev", author: "Syafi" },
			{ id: 4, title: "Weather forecast", author: "Carl" },
			{ id: 5, title: "Dev in Japan", author: "Ashley" },
			{ id: 6, title: "Gambling secrets", author: "Lishan" }
		];
	}

	getAllBooks() {
		return this.books;
	}

	getBookById(id) {
		return this.books.find(book => book.id === id);
	}

	// doesnt return as it just pushes to the array
	addNewBook(book) {
		this.books.push(book);
	}

	filterBooks(queries) {
		const keys = Object.keys(queries);
		return this.books.filter(book => {
			return keys.every(key => {
				return book[key].includes(queries[key]);
			});
		});
	}

	updateBook(id, changes) {
		let bookToUpdate = this.getBookById(id);
		const indexOfBook = this.books.indexOf(bookToUpdate);
		this.books.splice(indexOfBook, 1, changes);
		bookToUpdate = this.books[indexOfBook];
		return bookToUpdate;
	}

	deleteBook(id) {
		let bookToDelete = this.getBookById(id);
		const indexOfBook = this.books.indexOf(bookToDelete);
		this.books.splice(indexOfBook, 1)
		return this.getAllBooks();
	}
}

module.exports = new BookShelf();
