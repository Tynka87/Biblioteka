var library = {
    library: [],


    addBook: function (title, author, year, index) {
        var book = new Book(title, author, year);

        if (index === undefined) {
            this.library.push(book);
        } else {
            this.library.splice(index, 1, book);
        };
    },

    addBook2: function (_json) {
        var book = new Book(_json.title, _json.author, _json.year);
        this.library.push(book);
    },

    addBooks: function (_json) {
        for (var i = 0; i < _json.length; i++) {
            this.addBook2(_json[i]);
        }
    },

    getBooks: function () {
        return this.library;
    },

    removeBook: function (number) {
        this.library.splice(number, 1);
    },

    getBook: function (number) {
        return this.library[number];
    },

    isBookWithAuthor: function (id) {
        let book = this.library.find((book) =>
            book.getAuthor() === id
        );
        return book ? true : false;
    },

    isBooksWithAuthor: function (id) {
        let book = this.library.filter((book) =>
            book.getAuthor() === id
        );
        return book;
    },

    searchBooks: function (search) {
        let books = this.library.filter((book) =>
            book.getTitle().toLowerCase().includes(search.toLowerCase())
        );
        if (books.length === 0) {
            let authorTabl = libraryAuthor.getAuthorInTable(search);
            let newArrayAuthors = libraryAuthor.searchAuthors(authorTabl);

            newArrayAuthors.forEach((author) => {
                let id = author.getId();
                books = books.concat(this.isBooksWithAuthor(id));
            });
        }


        return books;

    }
};
