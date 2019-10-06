const request = require("supertest");
const AuthorCircle = require("../models/AuthorCircle");
const BookShelf = require("../models/BookShelf");
const app = require("../app");

jest.mock("../models/AuthorCircle");
jest.mock("../models/BookShelf");

const mockBooksData = [
	{ id: 1, title: "Intro to React", author: "Melvin", authorId: 1 },
	{ id: 2, title: "Baking and debugging", author: "Yun", authorId: 2 },
	{ id: 3, title: "Being an awesome dev", author: "Syafi", authorId: 3 },
	{ id: 4, title: "Weather forecast", author: "Carl", authorId: 4 },
	{ id: 5, title: "Dev in Japan", author: "Ashley", authorId: 5 },
	{ id: 6, title: "Gambling secrets", author: "Lishan", authorId: 6 },
	{ id: 7, title: "Poker tips and tricks", author: "Lishan", authorId: 6 }
];

const mockData = [
	{ author: "Melvin", authorId: 1 },
	{ author: "Yun", authorId: 2 },
	{ author: "Syafi", authorId: 3 },
	{ author: "Carl", authorId: 4 },
	{ author: "Ashley", authorId: 5 },
	{ author: "Lishan", authorId: 6 }
];

describe("/authors", () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});
	it("GET / should return all authors", () => {
		AuthorCircle.getAllAuthors.mockReturnValueOnce(mockData);
		return request(app)
			.get("/authors")
			.expect(200)
			.expect([
				{ author: "Melvin", authorId: 1 },
				{ author: "Yun", authorId: 2 },
				{ author: "Syafi", authorId: 3 },
				{ author: "Carl", authorId: 4 },
				{ author: "Ashley", authorId: 5 },
				{ author: "Lishan", authorId: 6 }
			]);
	});

	it("GET / should return author id 3", () => {
		AuthorCircle.getAuthorById.mockReturnValueOnce(mockData[2]);
		return request(app)
			.get("/authors/3")
			.expect(200)
			.expect({ author: "Syafi", authorId: 3 });
	});

	it("GET / should return author id 5", () => {
		AuthorCircle.getAuthorById.mockReturnValueOnce(mockData[5]);
		return request(app)
			.get("/authors/6")
			.expect(200)
			.expect({ author: "Lishan", authorId: 6 });
	});

	it("GET / should return all books by author with authorId 4", () => {
		BookShelf.getAllBooksByAuthor.mockReturnValueOnce(mockBooksData[3]);
		return request(app)
			.get("/authors/4/books")
			.expect(200)
			.expect({ id: 4, title: "Weather forecast", author: "Carl", authorId: 4 });
	});
});
