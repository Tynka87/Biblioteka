var liblary = {
	liblary: [],


	addBook: function (title, author, year, index) {
		var book = new Book(title, author, year);

		if (index == undefined) {
			this.liblary.push(book);
		} else {
			this.liblary.splice(index, 1, book);
		};
	},

	addBook2: function (_json) {
		var book = new Book(_json.title, _json.author, _json.year);
		this.liblary.push(book);
	},

	addBooks: function (_json) {
		for (var i = 0; i < _json.length; i++) {
			this.addBook2(_json[i]);
		}
	},

	getBooks: function () {
		return this.liblary;
	},

	removeBook: function (number) {
		this.liblary.splice(number, 1);
	},
	
	getBook: function (number) {
		console.log(this.liblary[number].getTitle());
		return this.liblary[number];
	},
};