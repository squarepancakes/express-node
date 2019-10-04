const request = require("supertest");
const BookShelf = require("../models/BookShelf");
const app = require("../app");

jest.mock("../models/BookShelf");

const mockData = [
	{ id: 1, title: "Intro to React", author: "Melvin" },
	{ id: 2, title: "Baking and debugging", author: "Yun" },
	{ id: 3, title: "Being an awesome dev", author: "Syafi" },
	{ id: 4, title: "Weather forecast", author: "Carl" }
];

describe("/books", () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});
	it("GET / should return all books", () => {
		BookShelf.getAllBooks.mockReturnValueOnce(mockData);
		return request(app)
			.get("/books")
			.expect(200)
			.expect([
				{ id: 1, title: "Intro to React", author: "Melvin" },
				{ id: 2, title: "Baking and debugging", author: "Yun" },
				{ id: 3, title: "Being an awesome dev", author: "Syafi" },
				{ id: 4, title: "Weather forecast", author: "Carl" }
			]);
	});

	it("GET / should return book 1", () => {
		BookShelf.getBookById.mockReturnValueOnce(mockData[0]);
		return request(app)
			.get("/books/1")
			.expect(200)
			.expect({ id: 1, title: "Intro to React", author: "Melvin" });
	});

	it("GET / should return book 2", () => {
		BookShelf.getBookById.mockReturnValueOnce(mockData[1]);
		return request(app)
			.get("/books/2")
			.expect(200)
			.expect({ id: 2, title: "Baking and debugging", author: "Yun" });
	});

	it("POST / should add a new book", () => {
		return request(app)
			.post("/books")
			.expect(200)
			.expect("Book created");
	});

	// kind of like mocking the data newBook takes in a "req.body"
	it("POST / new should add a new book, 10", () => {
		const newBook = { id: 10, title: "Waffle", author: "Blah" };
		return request(app)
			.post("/books/new")
			.send(newBook)
			.expect(200)
			.expect({ id: 10, title: "Waffle", author: "Blah" })
			.expect(() => expect(BookShelf.addNewBook).toBeCalledTimes(1));
	});

	it("POST / new should add a new book, 11", () => {
		const newBook = { id: 11, title: "Pancakes", author: "Blah" };
		return request(app)
			.post("/books/new")
			.send(newBook)
			.expect(200)
			.expect({ id: 11, title: "Pancakes", author: "Blah" })
			.expect(() => expect(BookShelf.addNewBook).toBeCalledTimes(1));
	});

	it("GET /books?author=Melvin", () => {
		BookShelf.filterBooks.mockReturnValueOnce([mockData[0]]);
		return request(app)
			.get("/books")
			.query({ author: "Melvin" })
			.expect(200)
			.expect([{ id: 1, title: "Intro to React", author: "Melvin" }]);
	});

	it("GET /books?title=Weather", () => {
		BookShelf.filterBooks.mockReturnValueOnce([mockData[3]]);
		return request(app)
			.get("/books")
			.query({ title: "Weather" })
			.expect(200)
			.expect([{ id: 4, title: "Weather forecast", author: "Carl" }]);
	});

	it("GET /books?author=Syafi&title=Weather", () => {
		BookShelf.filterBooks.mockReturnValueOnce([]);
		return request(app)
			.get("/books")
			.query({ author: "Syafi", title: "Weather" })
			.expect(200)
			.expect([]);
	});
	it("GET /books?author=Carl&title=Weather", () => {
		BookShelf.filterBooks.mockReturnValueOnce([
			{ id: 4, title: "Weather forecast", author: "Carl" }
		]);
		return request(app)
			.get("/books")
			.query({ author: "Carl", title: "Weather" })
			.expect(200)
			.expect([{ id: 4, title: "Weather forecast", author: "Carl" }]);
	});

	it("PUT / should throw an error if book does not exist", () => {
		BookShelf.updateBook.mockImplementationOnce(() => {
			throw new Error();
		});
		return request(app)
			.put("/books/100")
			.expect(404);
	});

	it("PUT / should update book according to id", () => {
		BookShelf.updateBook.mockReturnValueOnce();

		const updates = {
			id: 1,
			title: "React developing in 5 easy steps",
			author: "Melvin"
		};

		return request(app)
			.put("/books/1")
			.send(updates)
			.expect(200)
			.expect({
				id: 1,
				title: "React developing in 5 easy steps",
				author: "Melvin"
			})
			.expect(() => expect(BookShelf.updateBook).toBeCalledTimes(1));
	});

	it("DELETE/ should delete book according to id stated", () => {
		BookShelf.getAllBooks.mockReturnValueOnce([
			{ id: 2, title: "Baking and debugging", author: "Yun" },
			{ id: 3, title: "Being an awesome dev", author: "Syafi" },
			{ id: 4, title: "Weather forecast", author: "Carl" }
		]);
		return request(app)
			.delete("/books/1")
			.expect(200)
			.expect([
				{ id: 2, title: "Baking and debugging", author: "Yun" },
				{ id: 3, title: "Being an awesome dev", author: "Syafi" },
				{ id: 4, title: "Weather forecast", author: "Carl" }
			])
			.expect(() => expect(BookShelf.deleteBook).toBeCalledTimes(1));
	});
});
