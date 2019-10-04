const request = require("supertest");
const AuthorCircle = require("../models/AuthorCircle");
const app = require("../app");

jest.mock("../models/AuthorCircle");

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

	it("GET / should return author id 5", () => {
		AuthorCircle.getAllAuthors.mockReturnValueOnce(mockData[4]);
		return request(app)
			.get("/authors/5")
			.expect(200)
			.expect({ author: "Ashley", authorId: 5 });
	});
});
