const AuthorCircle = require("../models/AuthorCircle");
const BookShelf = require("../models/BookShelf");

AuthorCircle.authors = [
	{ author: "Melvin", authorId: 1 },
	{ author: "Yun", authorId: 2 },
	{ author: "Syafi", authorId: 3 },
	{ author: "Carl", authorId: 4 },
	{ author: "Ashley", authorId: 5 },
	{ author: "Lishan", authorId: 6 }
];

BookShelf.books = [
	{ id: 1, title: "Intro to React", author: "Melvin", authorId: 1 },
	{ id: 2, title: "Baking and debugging", author: "Yun", authorId: 2 },
	{ id: 3, title: "Being an awesome dev", author: "Syafi", authorId: 3 },
	{ id: 4, title: "Weather forecast", author: "Carl", authorId: 4 },
	{ id: 5, title: "Dev in Japan", author: "Ashley", authorId: 5 },
	{ id: 6, title: "Gambling secrets", author: "Lishan", authorId: 6 },
	{ id: 7, title: "Poker tips and tricks", author: "Lishan", authorId: 6 }
];

describe("Authors", () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});
	it("should return all authors in AuthorCircle", () => {
		expect(AuthorCircle.getAllAuthors()).toEqual([
			{ author: "Melvin", authorId: 1 },
			{ author: "Yun", authorId: 2 },
			{ author: "Syafi", authorId: 3 },
			{ author: "Carl", authorId: 4 },
			{ author: "Ashley", authorId: 5 },
			{ author: "Lishan", authorId: 6 }
		]);
	});

	it("should return author who is authorId 4", () => {
		expect(AuthorCircle.getAuthorById(4)).toEqual({
			author: "Carl",
			authorId: 4
		});
	});

	it("should return author who is authorId 5", () => {
		expect(AuthorCircle.getAuthorById(5)).toEqual({
			author: "Ashley",
			authorId: 5
		});
	});

	it("should return all books by authorId 3", () => {
		expect(BookShelf.getAllBooksByAuthor(3)).toEqual([
			{ id: 3, title: "Being an awesome dev", author: "Syafi", authorId: 3 }
		]);
	});
	
	it("should return all books by authorId 6", () => {
		expect(BookShelf.getAllBooksByAuthor(6)).toEqual([
			{ id: 6, title: "Gambling secrets", author: "Lishan", authorId: 6 },
			{ id: 7, title: "Poker tips and tricks", author: "Lishan", authorId: 6 }
		]);
	});
});
