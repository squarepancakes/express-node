class Book {
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

	filterBooks(property, query) {
		return this.books.filter(book => {
			return book[property].includes(query);
		});
	}
}

module.exports = new Book();
