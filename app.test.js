const request = require("supertest");
const app = require("./app");

describe("express server", () => {
    
	it("GET / should return status code 200", () => {
		return request(app)
			.get("/")
			.expect(200)
			.expect("The Bookshelf!");
	});
});
