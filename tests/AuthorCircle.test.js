const AuthorCircle = require("../models/AuthorCircle");

AuthorCircle.authors = [
	{ author: "Melvin", authorId: 1 },
	{ author: "Yun", authorId: 2 },
	{ author: "Syafi", authorId: 3 },
	{ author: "Carl", authorId: 4 },
	{ author: "Ashley", authorId: 5 },
	{ author: "Lishan", authorId: 6 }
];

describe("Authors", () => {
	it("should return all authors in AuthorCircle", () => {
		AuthorCircle.authors = [
			{ author: "Melvin", authorId: 1 },
			{ author: "Yun", authorId: 2 },
			{ author: "Syafi", authorId: 3 },
			{ author: "Carl", authorId: 4 },
			{ author: "Ashley", authorId: 5 },
			{ author: "Lishan", authorId: 6 }
		];
		expect(AuthorCircle.getAllAuthors()).toEqual([
			{ author: "Melvin", authorId: 1 },
			{ author: "Yun", authorId: 2 },
			{ author: "Syafi", authorId: 3 },
			{ author: "Carl", authorId: 4 },
			{ author: "Ashley", authorId: 5 },
			{ author: "Lishan", authorId: 6 }
		]);
	});

	it("should return author who is authorId 5", () => {
		Author
	})
});
