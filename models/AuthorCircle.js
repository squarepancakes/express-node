class AuthorCircle {
	constructor() {
		this.authors = [
			{ author: "Melvin", id: 1 },
			{ author: "Yun", id: 2 },
			{ author: "Syafi", id: 3 },
			{ author: "Carl", id: 4 },
			{ author: "Ashley", id: 5 },
			{ author: "Lishan", id: 6 }
		];
	}

	getAllAuthors() {
		return this.authors;
    }
    
    getAuthorById(id) {
		return this.authors.find(author => author.id === id)}
}

module.exports = new AuthorCircle();
