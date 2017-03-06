var liblaryControler = {

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



					liblary.addBook(title, author, year);			localStorageService.addLiblarytoLocalStor(liblary.getBooks());		
					liblaryView.clearView();			liblaryView.showBooks(liblary.getBooks(),liblaryAuthor.getAuthors()); 


				});*/

		$("body").on('submit', '#formBook', function () {
			//e.preventDefault();
			var index = undefined;
			var title = $(this.title).val();
			var author = $(this.authorlist).val();
			var year = $(this.year).val();
			index = $(this.index).val();

			liblary.addBook(title, author, year, index);		localStorageService.addLiblarytoLocalStor(liblary.getBooks());
			

			if (index != undefined) {
				liblaryView.clearView();
				liblaryView.showBooks(liblary.getBooks(), liblaryAuthor.getAuthors());
			}



		});


	},
	removeBook: function () {

		$(".popUp").on('click', '#removeButton', function () {
			var number = $(this).val();
			console.log("Numer: " + number);
			console.log("removeBook ");

			$('.modal ').modal('hide');
			liblary.removeBook(number);
			localStorageService.addLiblarytoLocalStor(liblary.getBooks());
			liblaryView.clearView();
			liblaryView.showBooks(liblary.getBooks(), liblaryAuthor.getAuthors());

		});

	},
	editBook: function () {

		$(".popUp").on('click', '#editButton', function () {
			var number = $(this).val();
			console.log(number);
			popUpView.clearViewInPopUp();
			$('.popUp').load('html/editBook.html', function () {

				console.log("Edit Book");
				/*popUpView.renderEditBook(liblary.getBook(number),number);
				popUpView.showAuthorsInPopUp(liblaryAuthor.getAuthors(), liblary.getBook(number));
*/
			});




		});

	},
	closePopUp: function () {

		$(".popUp").on('click', '#cross', function () {

			console.log("test");
			$('.popUp .tooltip').remove();


		});

	},
	showFullBook: function () {

		$("#library").on('click', '.btn', function () {
			var number = $(this).val();

			console.log("test test");
			$('.popUp').load('html/showFullBook.html', function () {

				$('.modal ').modal('show');
				popUpView.showBookInPopUp(liblary.getBook(number), number);
				popUpView.showAuthorsInPopUp(liblaryAuthor.getAuthors(), liblary.getBook(number));

			});




		});

	}


};