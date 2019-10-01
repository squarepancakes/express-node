class Book {
    constructor() {
        this.books = [
            { id: 1, title: "Apple" },
            { id: 2, title: "Apple Pie" },
            { id: 3, title: "Apple Eating" },
            { id: 4, title: "Pears" },
            { id: 5, title: "Melons" },
            { id: 6, title: "Mango" },
            { id: 7, title: "Pineapple" }
        ];
    }

    getAllBooks() {
        return this.books
    }

    getBookById(id) {
        return this.books.find(book => book.id === id);
    }

    addNewBook(book) {
        return this.books.push(book)
    }

}


module.exports = new Book();