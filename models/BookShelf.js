class BookShelf {
	constructor() {
		this.books = [
			{ id: 1, title: "Intro to React", author: "Melvin", authorId: 1 },
			{ id: 2, title: "Baking and debugging", author: "Yun", authorId: 2 },
			{ id: 3, title: "Being an awesome dev", author: "Syafi", authorId: 3 },
			{ id: 4, title: "Weather forecast", author: "Carl", authorId: 4 },
			{ id: 5, title: "Dev in Japan", author: "Ashley", authorId: 5 },
			{ id: 6, title: "Gambling secrets", author: "Lishan", authorId: 6 },
			{ id: 7, title: "Poker tips and tricks", author: "Lishan", authorId: 6 }
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
				const regex = new RegExp(queries[key], "gi");
				return book[key].match(regex);
			});
		});
	}

	updateBook(id, changes) {
		let bookToUpdate = this.getBookById(id);
		if (!bookToUpdate) {
			throw new Error("Book does not exist");
		}
		const indexOfBook = this.books.indexOf(bookToUpdate);
		this.books.splice(indexOfBook, 1, changes);
		bookToUpdate = this.books[indexOfBook];
		return bookToUpdate;
	}

	deleteBook(id) {
		const bookToDelete = this.getBookById(id);
		if (!bookToDelete) {
			throw new Error("Book does not exist");
		}
		const indexOfBook = this.books.indexOf(bookToDelete);
		this.books.splice(indexOfBook, 1);
		return this.getAllBooks();
	}

	getAllBooksByAuthor(id) {
		return this.books.filter(book => book.authorId === id);
	}
}

module.exports = new BookShelf();
