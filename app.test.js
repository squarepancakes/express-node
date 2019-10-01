const request = require("supertest");
const app = require("./app");

describe("express server", () => {
	it("GET /should return status code 200", () => {
		return request(app)
			.get("/books")
			.expect(200);
	});
});