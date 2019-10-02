const request = require("supertest");
const book = require("../models/Books");
const app = require("../app");

describe("/books", () => {
	it("GET / should return new books", () => {
		return request(app)
			.get("/books")
			.expect(200)
			.expect(book.getAllBooks());
	});

	it("GET / should return book 1", () => {
		return request(app)
			.get("/books/1")
			.expect(200)
			.expect({ id: 1, title: "Intro to React", author: "Melvin" });
	});

	it("GET / should return book 2", () => {
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
	it("POST /new should add a new book, 10", () => {
        const newBook = { id: 10, title: "Waffle", author: "Blah" };
		return request(app)
            .post("/books/new")
            .send(newBook)
			.expect(200)
			.expect({ id: 10, title: "Waffle", author: "Blah" });
	});

	it("POST /new should add a new book, 11", () => {
		const newBook = { id: 11, title: "Pancakes", author: "Blah" };
		return request(app)
			.post("/books/new")
			.send(newBook)
			.expect(200)
			.expect({ id: 11, title: "Pancakes", author: "Blah" });
	});

	it("PUT / should return book changed", () => {
		return request(app)
			.put("/books")
			.expect(200)
			.expect("Book changed");
	});
	
	it("GET /books?author=Melvin", () => {
		return request(app)
		.get("/books")
		.query({author: "Melvin"})
		.expect(200)
		.expect([{ id: 1, title: "Intro to React", author: "Melvin" }])
	})
	
	it("GET /books?title=Weather", () => {
		return request(app)
		.get("/books")
		.query({title: 'Weather'})
		.expect(200)
		.expect([{ id: 4, title: "Weather forecast", author: "Carl" }])
	})
	

});
