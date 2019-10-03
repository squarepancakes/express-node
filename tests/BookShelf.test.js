const BookShelf = require("../models/BookShelf");

BookShelf.books = [
	{ id: 1, title: "Intro to React", author: "Melvin" },
	{ id: 2, title: "Baking and debugging", author: "Yun" },
	{ id: 3, title: "Being an awesome dev", author: "Syafi" }
];

describe("BookShelf", () => {
	it("should return all books in BookShelf", () => {
		BookShelf.books = [
			{ id: 1, title: "Intro to React", author: "Melvin" },
			{ id: 2, title: "Baking and debugging", author: "Yun" },
			{ id: 3, title: "Being an awesome dev", author: "Syafi" }
		];
		expect(BookShelf.getAllBooks()).toEqual([
			{ id: 1, title: "Intro to React", author: "Melvin" },
			{ id: 2, title: "Baking and debugging", author: "Yun" },
			{ id: 3, title: "Being an awesome dev", author: "Syafi" }
		]);
	});
	describe("books are returned by id", () => {
		it("should return books by id", () => {
			expect(BookShelf.getBookById(2)).toEqual({
				id: 2,
				title: "Baking and debugging",
				author: "Yun"
			});
		});
	});
	describe("adding new books", () => {
		it("should add a new book", () => {
			BookShelf.addNewBook({ id: 6, title: "Languages", author: "Syafi" });
			expect(BookShelf.getAllBooks()).toEqual([
				{ id: 1, title: "Intro to React", author: "Melvin" },
				{ id: 2, title: "Baking and debugging", author: "Yun" },
				{ id: 3, title: "Being an awesome dev", author: "Syafi" },
				{ id: 6, title: "Languages", author: "Syafi" }
			]);
		});
	});

	describe("should be able to filter books by query", () => {
		describe("should be able to filter by a single query", () => {
			it("should return [] if the filter has no matches", () => {
				BookShelf.books = [
					{ id: 1, title: "Intro to React", author: "Melvin" },
					{ id: 2, title: "Baking and debugging", author: "Yun" },
					{ id: 3, title: "Being an awesome dev", author: "Syafi" },
					{ id: 6, title: "Languages", author: "Syafi" }
				];
				expect(BookShelf.filterBooks({ author: "Jesstern" })).toEqual([]);
			});

			it("should be able to filter by author", () => {
				expect(BookShelf.filterBooks({ author: "Yun" })).toEqual([
					{ id: 2, title: "Baking and debugging", author: "Yun" }
				]);
			});
			it("should be able to filter and return all books written by author", () => {
				expect(BookShelf.filterBooks({ author: "Syafi" })).toEqual([
					{ id: 3, title: "Being an awesome dev", author: "Syafi" },
					{ id: 6, title: "Languages", author: "Syafi" }
				]);
			});

			it("should be able to filter by title", () => {
				expect(BookShelf.filterBooks({ title: "React" })).toEqual([
					{ id: 1, title: "Intro to React", author: "Melvin" }
				]);
			});
		});

		describe("should be able to filter by multiple queries", () => {
			it("should be able to return an empty array if there are no matches", () => {
				const query = { author: "Ashley", title: "Weather" };
				expect(BookShelf.filterBooks(query)).toEqual([]);
			});

			it("should be able to return books that matches all queries", () => {
				const query = { author: "Syafi", title: "awesome" };
				expect(BookShelf.filterBooks(query)).toEqual([
					{ id: 3, title: "Being an awesome dev", author: "Syafi" }
				]);
			});
		});

		describe("should be able to update books", () => {
			it("should be able to update a book when there are changes", () => {
				BookShelf.books = [
					{ id: 1, title: "Intro to React", author: "Melvin" },
					{ id: 2, title: "Baking and debugging", author: "Yun" },
					{ id: 3, title: "Being an awesome dev", author: "Syafi" }
				];
				const id = 1;
				const changes = {
					id: 1,
					title: "React App in 5 days",
					author: "Melvin"
				};

				expect(BookShelf.updateBook(id, changes)).toEqual({
					id: 1,
					title: "React App in 5 days",
					author: "Melvin"
				});
			});
		});

		describe("should be able to delete books", () => {
			it("should be able to delete book id 1", () => {
				const id = 1;
				BookShelf.books = [
					{ id: 1, title: "Intro to React", author: "Melvin" },
					{ id: 2, title: "Baking and debugging", author: "Yun" },
					{ id: 3, title: "Being an awesome dev", author: "Syafi" }
				];
				expect(BookShelf.deleteBook(id)).toEqual([
					{ id: 2, title: "Baking and debugging", author: "Yun" },
					{ id: 3, title: "Being an awesome dev", author: "Syafi" }
				]);
			});
		});
	});
});
