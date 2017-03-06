svar libraryControler = {

	init: function () {

		this.showFullBook();
		this.editBook();
		this.closePopUp();
		this.removeBook();


		/*		$("#formBook").submit(function (e) {
					e.preventDefault();
					var title = $("#title").val();
					var author = $("#authorlist option:selected").val();
					var year = $("#year").val();



					library.addBook(title, author, year);			localStorageService.addlibrarytoLocalStor(library.getBooks());		
					libraryView.clearView();			libraryView.showBooks(library.getBooks(),libraryAuthor.getAuthors()); 


				});*/

		$("body").on('submit', '#formBook', function () {
			//e.preventDefault();
			var index = undefined;
			var title = $(this.title).val();
			var author = $(this.authorlist).val();
			var year = $(this.year).val();
			index = $(this.index).val();

			library.addBook(title, author, year, index);
			localStorageService.addlibrarytoLocalStor(library.getBooks());


			if (index != undefined) {
				libraryView.clearView();
				libraryView.showBooks(library.getBooks(), libraryAuthor.getAuthors());
			}



		});


	},
	removeBook: function () {

		$(".popUp").on('click', '#removeButton', function () {
			var number = $(this).val();	
			$('.modal ').modal('hide');
			library.removeBook(number);
			localStorageService.addlibrarytoLocalStor(library.getBooks());
			libraryView.clearView();
			libraryView.showBooks(library.getBooks(), libraryAuthor.getAuthors());

		});

	},

	showFullBook: function () {

		$("#library").on('click', '.btn', function () {
			var number = $(this).val();
			$('.popUp').load('html/showFullBook.html', function () {

				$('.modal ').modal('show');
				popUpView.showBookInPopUp(library.getBook(number), number);
				popUpView.showAuthorsInPopUp(libraryAuthor.getAuthors(), library.getBook(number));

			});

		});
	}


};