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
};