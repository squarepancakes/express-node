class AuthorCircle {
	constructor() {
		this.authors = [
			{ author: "Melvin", authorId: 1 },
			{ author: "Yun", authorId: 2 },
			{ author: "Syafi", authorId: 3 },
			{ author: "Carl", authorId: 4 },
			{ author: "Ashley", authorId: 5 },
			{ author: "Lishan", authorId: 6 }
		];
	}

	getAllAuthors() {
		return this.authors;
    }
    
    getAuthorById(id) {
        return id
    }
}

module.exports = new AuthorCircle();
